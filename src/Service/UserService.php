<?php

namespace App\Service;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class UserService {
    private EntityManagerInterface $entityManager;
    private UserPasswordHasherInterface $hasher;
    private TokenStorageInterface $tokenStorage;
    private JWTTokenManagerInterface $jwtTokenManager;

    public function __construct(
        EntityManagerInterface $entityManager,
        UserPasswordHasherInterface $hasher,
        TokenStorageInterface $tokenStorage,
        JWTTokenManagerInterface $jwtTokenManager
    )
    {
        $this->entityManager = $entityManager;
        $this->hasher = $hasher;
        $this->tokenStorage =  $tokenStorage;
        $this->jwtTokenManager =  $jwtTokenManager;
}
    public function create(User $user): User
    {
        $user->setPassword($this->hasher->hashPassword($user, $user->getPassword()));
        $this->entityManager->persist($user);
        $this->entityManager->flush();
        return  $user;
    }

    public function list(): array
    {
        return $this->entityManager->getRepository(User::class)->findAll();
    }

    public function getLoggedUser(): User
    {
        $email = $this->jwtTokenManager->decode($this->tokenStorage->getToken())['email'];
        return $this->entityManager->getRepository(User::class)
        ->findOneBy(['email' => $email]);
    }
}