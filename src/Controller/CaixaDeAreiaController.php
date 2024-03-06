<?php

namespace App\Controller;

use App\Entity\CaixaDeAreia;
use App\Service\CaixaDeAreiaService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

class CaixaDeAreiaController extends AbstractController
{
    private CaixaDeAreiaService $caixaDeAreiaService;
    private SerializerInterface $serializer;

    public function __construct(
        CaixaDeAreiaService $caixaDeAreiaService,
        SerializerInterface $serializer
    )
    {
        $this->caixaDeAreiaService = $caixaDeAreiaService;
        $this->serializer = $serializer;
    }

    #[Route('/caixa-de-areia', name: 'list_caixa_de_areia', methods: ['GET'])]
    public function list(): JsonResponse
    {
        $caixasDeAreia = $this->caixaDeAreiaService->list(); 
        return $this->json(
            $caixasDeAreia
        );
    }

    #[Route('/caixa-de-areia', name: 'create_caixa_de_areia', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        $caixaDeAreia = $this->serializer->deserialize(
                                                        $request->getContent(),
                                                        CaixaDeAreia::class,
                                                        'json'
                                                    );
        $caixaDeAreia = $this->caixaDeAreiaService->create($caixaDeAreia);
        return $this->json(
            $caixaDeAreia,
            Response::HTTP_CREATED,
            ['Location' => "/caixa-de-areia/{$caixaDeAreia->getId()}"]
        );
    }

    #[Route('/caixa-de-areia/{id}', name: 'update_caixa_de_areia', methods: ['PUT'])]
    public function update(int $id, Request $request): JsonResponse
    {
        $caixaDeAreia = $this->serializer->deserialize(
                            $request->getContent(),
                            CaixaDeAreia::class,
                            'json'
                        );
        $caixaDeAreia = $this->caixaDeAreiaService->update($caixaDeAreia, $id);
        return $this->json(
            $caixaDeAreia
        );
    }

    #[Route('/caixa-de-areia/{id}', name: 'delete_caixa_de_areia', methods: ['DELETE'])]
    public function delete(CaixaDeAreia $caixaDeAreia): Response
    {
        $this->caixaDeAreiaService->delete($caixaDeAreia);
        return $this->json(
            '',
            Response::HTTP_NO_CONTENT
        );
    }
}
