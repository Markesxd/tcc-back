<?php

namespace App\Service;

use App\Entity\Gato;
use App\Entity\PlanoAlimentar;
use App\Entity\Refeicao;
use App\Entity\RefeicaoLog;
use DateTime;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\EntityManagerInterface;

class PlanoAlimentarService {
    private UserService $userService;
    private EntityManagerInterface $entityManager;

    public function __construct(
        UserService $userService,
        EntityManagerInterface $entityManager
    )
    {
        $this->userService = $userService;
        $this->entityManager = $entityManager;
    }

    public function list(): Collection
    {
        $user = $this->userService->getLoggedUser();
        $planosAlimentares = $user->getPlanosAlimentares();
        foreach($planosAlimentares as $planoAlimentar) {
            foreach($planoAlimentar->getRefeicoes() as $refeicao) {
                $refeicao->setFoiServida(
                    $this->getRefeicaoTodaysLog($refeicao)->isFoiServida()
                );
            }
        }
        return $planosAlimentares;
    }
    
    public function create(PlanoAlimentar $planoAlimentar): PlanoAlimentar
    {
        $user = $this->userService->getLoggedUser();
        $planoAlimentar->setUsuario($user);
        $gatos = $planoAlimentar->getGatos();
        foreach($gatos as $gato) {
            $planoAlimentar->removeGato($gato);
            $gato = $this->entityManager->getRepository(Gato::class)->find($gato->getId());
            $planoAlimentar->addGato($gato);
        }
        $this->entityManager->persist($planoAlimentar);
        $this->entityManager->flush();
        return $planoAlimentar;
    }

    public function update(PlanoAlimentar $planoAlimentar, int $id): PlanoAlimentar
    {
        $_planoAlimentar = $this->entityManager->getRepository(PlanoAlimentar::class)->find($id);
        $user = $this->userService->getLoggedUser();
        if(!$user->getPlanosAlimentares()->contains($_planoAlimentar)) {
            //todo: throw forbiden error;
            return $_planoAlimentar;
        }

        if($planoAlimentar->getNome() !== null) {
            $_planoAlimentar->setNome($planoAlimentar->getNome());
        }
        if(!$planoAlimentar->getGatos()->isEmpty()) {
            $_planoAlimentar->getGatos()->clear();
            foreach($planoAlimentar->getGatos() as $gato) {
                $_gato = $this->entityManager->getRepository(Gato::class)->find($gato->getId());
                $_planoAlimentar->addGato($_gato);
            }
        }

        $this->entityManager->persist($_planoAlimentar);
        $this->entityManager->flush();

        return $_planoAlimentar;
    }

    public function delete(PlanoAlimentar $planoAlimentar): void
    {
        foreach($planoAlimentar->getGatos() as $gato) {
            $gato->setPlanoAlimentar(null);
        }
        $this->entityManager->remove($planoAlimentar);
        $this->entityManager->flush();
    }

    public function servir(Refeicao $refeicao)
    {
        $_refeicao = $this->entityManager->getRepository(Refeicao::class)->find($refeicao->getId());
        $todaysLog = $this->getRefeicaoTodaysLog($_refeicao);
        $todaysLog->setFoiServida($refeicao->getFoiServida());
        $this->entityManager->persist($todaysLog);
        $this->entityManager->flush();
    }

    private function getRefeicaoTodaysLog(Refeicao $refeicao): RefeicaoLog
    {
        $todaysLog =  $this->entityManager->getRepository(RefeicaoLog::class)->findOneBy(
            ['refeicao' => $refeicao, 'data' => (new DateTime())]
        );
        if(!$todaysLog) {
            $todaysLog = new RefeicaoLog();
            $todaysLog
                ->setData(new DateTime())
                ->setRefeicao($refeicao)
                ->setFoiServida(false);
        }
        return $todaysLog;
    }
}