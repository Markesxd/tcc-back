<?php

namespace App\Controller;

use App\Entity\User;
use App\Service\UserService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\Context\Normalizer\ObjectNormalizerContextBuilder;
use Symfony\Component\Serializer\SerializerInterface;

class UserController extends AbstractController
{
    private SerializerInterface $serializer;
    private UserService $userService;

    public function __construct(
                                SerializerInterface $serializer,
                                UserService $userService
                            )
    {
        $this->serializer = $serializer;
        $this->userService = $userService;
    }

    #[Route('/register', name: 'register_user')]
    public function register(Request $request): Response
    {
        $user = $this->serializer->deserialize($request->getContent(), User::class, 'json');
        $this->userService->create($user);
        return new Response(
            '',
            Response::HTTP_CREATED,
            ['Location' => '/login']
        );
    }

    #[Route('/user', name: 'get_user', methods: ['GET'])]
    public function get(): JsonResponse
    {
        $user = $this->userService->getLoggedUser();
        $context = (new ObjectNormalizerContextBuilder())
            ->withGroups('show')
            ->toArray();
        return $this->json(
            $user,
            200,
            [],
            $context
        );
    }
}
