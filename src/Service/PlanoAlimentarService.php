<?php

namespace App\Service;

use App\Entity\Gato;
use App\Entity\PlanoAlimentar;
use App\Entity\Refeicao;
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
        return $user->getPlanosAlimentares();
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
}