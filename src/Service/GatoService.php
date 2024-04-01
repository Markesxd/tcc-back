<?php

namespace App\Service;

use App\Entity\Gato;
use App\Exception\ForbiddenException;
use App\Util\DateUtil;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\EntityManagerInterface;

class GatoService {
    private EntityManagerInterface $entityManager;
    private UserService $userService;

    public function __construct(
        EntityManagerInterface $entityManager,
        UserService $userService
    )
    {
        $this->entityManager = $entityManager;
        $this->userService = $userService;
    }

    public function create(Gato $gato): Gato
    {
        $user = $this->userService->getLoggedUser();
        $gato->setDono($user);
        $this->entityManager->persist($gato);
        $this->entityManager->flush();
        return $gato;
    } 

    public function list(): Collection
    {
        $user = $this->userService->getLoggedUser();
        return $user->getGatos();
    }

    public function update(Gato $gato, int $id): Gato
    {
        $user = $this->userService->getLoggedUser();
        $_gato = $this->entityManager->getRepository(Gato::class)->find($id);
        if(!$user->getGatos()->contains($_gato)){
            throw new ForbiddenException();
        }

        if($gato->getNome() !== null) {
            $_gato->setNome($gato->getNome());
        }
        if($gato->getAniversario() !== null) {
            $_gato->setAniversario($gato->getAniversario());
        }
        if($gato->getSexo() !== null) {
            $_gato->setSexo($gato->getSexo());
        }
        $this->entityManager->persist($_gato);
        $this->entityManager->flush();
        return $_gato;
    }

    public function delete(Gato $gato): void
    {
        $this->entityManager->remove($gato);
        $this->entityManager->flush();
    }
}