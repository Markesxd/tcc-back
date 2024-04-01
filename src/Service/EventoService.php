<?php

namespace App\Service;

use App\Entity\Evento;
use App\Entity\Gato;
use App\Exception\ForbiddenException;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\EntityManagerInterface;

class EventoService {
    private EntityManagerInterface $entityManager;
    private UserService $userService;

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
        return $user->getEventos();
    }

    public function create(Evento $evento): Evento
    {
        $user = $this->userService->getLoggedUser();
        $evento->setUsuario($user);
        $gatos = $evento->getGatos();
        foreach($gatos as $gato) {
            $evento->removeGato($gato);
            $gato = $this->entityManager->getRepository(Gato::class)->find($gato->getId());
            $evento->addGato($gato);
        }
        $this->entityManager->persist($evento);
        $this->entityManager->flush();
        return $evento;
    }

    public function update(Evento $evento, int $id): Evento
    {
        $_evento = $this->entityManager->getRepository(Evento::class)->find($id);
        $user = $this->userService->getLoggedUser();
        if(!$user->getEventos()->contains($_evento)){
            throw new ForbiddenException();            
        }

        if($evento->getNome() !== null) {
            $_evento->setNome($evento->getNome());
        }
        if($evento->getData() !== null) {
            $_evento->setData($evento->getData());
        }
        if($evento->getIntervaloDeRepeticao() !== null) {
            $_evento->setIntervaloDeRepeticao($evento->getIntervaloDeRepeticao());
        }
        if(!$evento->getGatos()->isEmpty()) {
            $_evento->getGatos()->clear();
            foreach($evento->getGatos() as $gato) {
                $_evento->removeGato($gato);
                $gato = $this->entityManager->getRepository(Gato::class)->find($gato->getId());
                $_evento->addGato($gato);
            }
        }

        $this->entityManager->persist($_evento);
        $this->entityManager->flush();
        
        return $_evento;
    }

    public function delete(Evento $evento): void
    {
        $this->entityManager->remove($evento);
        $this->entityManager->flush();
    }
}