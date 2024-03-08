<?php

namespace App\Controller;

use App\Entity\Gato;
use App\Service\GatoService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

class GatoController extends AbstractController
{
    private GatoService $gatoService;
    private SerializerInterface $serializer;

    public function __construct(
        GatoService $gatoService,
        SerializerInterface $serializer
    )
    {
        $this->gatoService = $gatoService;
        $this->serializer = $serializer;
    }

    #[Route('/gato', name: 'list_gato', methods: ['GET'])]
    public function listGatos(): JsonResponse
    {
        $gatos = $this->gatoService->list();
        return $this->json($gatos);
    }

    #[Route('/gato/{id}', name: 'find_gato', methods: ['GET'])]
    public function find(Gato $gato): JsonResponse
    {
        return $this->json($gato);
    }

    #[Route('/gato', name: 'create_gato', methods: ['POST'])]
    public function createGato(Request $request): JsonResponse
    {
        $gato = $this->serializer->deserialize($request->getContent(), Gato::class, 'json');
        $this->gatoService->create($gato);
        return $this->json(
            $gato,
            Response::HTTP_CREATED,
            [
                'Location' => "/gato/{$gato->getId()}" 
            ]
        );
    }

    #[Route('/gato/{id}', name: 'update_gato', methods: ['PUT'])]
    public function updateGato(Request $request, int $id): JsonResponse
    {
        $gato = $this->serializer->deserialize($request->getContent(), Gato::class, 'json');
        $_gato = $this->gatoService->update($gato, $id);
        return $this->json($_gato);
    }

    #[Route('/gato/{id}', name: 'delete_gato', methods: ['DELETE'])]
    public function deleteGato(Gato $gato): JsonResponse
    {
        $this->gatoService->delete($gato);
        return $this->json(
            '',
            Response::HTTP_NO_CONTENT
        );
    }
}
