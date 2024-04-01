<?php

namespace App\Service;

use App\Entity\CaixaDeAreia;
use App\Exception\ForbiddenException;
use Doctrine\ORM\EntityManagerInterface;

class CaixaDeAreiaService {
    private EntityManagerInterface $entityManager;
    private UserService $userService;

    public function __construct(
        EntityManagerInterface $entityManager,
        UserService $userService
    )
    {
        $this->entityManager= $entityManager;
        $this->userService= $userService;
    }

    public function list()
    {
        $user = $this->userService->getLoggedUser();
        return $user->getCaixasDeAreia();
    }

    public function create(CaixaDeAreia $caixaDeAreia): CaixaDeAreia
    {
        $user = $this->userService->getLoggedUser();
        $caixaDeAreia->setUsuario($user);
        $this->entityManager->persist($caixaDeAreia);
        $this->entityManager->flush();
        return $caixaDeAreia;
    }

    public function update(CaixaDeAreia $caixaDeAreia, int $id): CaixaDeAreia
    {   
        $user = $this->userService->getLoggedUser();
        $_caixaDeAreia = $this->entityManager->getRepository(CaixaDeAreia::class)->find($id);
        if(!$user->getCaixasDeAreia()->contains($_caixaDeAreia)) {
            throw new ForbiddenException();
        }
        
        if($caixaDeAreia->getNome() !== null) {
            $_caixaDeAreia->setNome($caixaDeAreia->getNome());
        }
        if($caixaDeAreia->getLimpoEm() !== null) {
            $_caixaDeAreia->setLimpoEm($caixaDeAreia->getLimpoEm());
        }
        $this->entityManager->persist($_caixaDeAreia);
        $this->entityManager->flush();
        return $_caixaDeAreia;
    }

    public function delete(CaixaDeAreia $caixaDeAreia): void
    {
        $this->entityManager->remove($caixaDeAreia);
        $this->entityManager->flush();
    }
}