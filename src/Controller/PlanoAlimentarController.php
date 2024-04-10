<?php

namespace App\Controller;

use App\Entity\PlanoAlimentar;
use App\Entity\Refeicao;
use App\Service\PlanoAlimentarService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\Context\Normalizer\ObjectNormalizerContextBuilder;
use Symfony\Component\Serializer\SerializerInterface;

class PlanoAlimentarController extends AbstractController
{
    private PlanoAlimentarService $planoAlimentarService;
    private SerializerInterface $serializer;

    public function __construct(
        PlanoAlimentarService $planoAlimentarService,
        SerializerInterface $serializer
    )
    {
        $this->planoAlimentarService = $planoAlimentarService;
        $this->serializer = $serializer;
    }

    #[Route('/plano-alimentar', name: 'list_plano_alimentar', methods: ['GET'])]
    public function list(): JsonResponse
    {
        $planosAlimentares = $this->planoAlimentarService->list();
        $context = (new ObjectNormalizerContextBuilder())
            ->withGroups('list_plano_alimentar')
            ->toArray();
        return $this->json(
            $planosAlimentares,
            Response::HTTP_OK,
            [],
            $context
        );
    }

    #[Route('/plano-alimentar', name: 'create_plano_alimentar', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        $planoAlimentar = $this->serializer->deserialize(
                                                        $request->getContent(),
                                                        PlanoAlimentar::class,
                                                        'json'
                                                    );
        $planoAlimentar = $this->planoAlimentarService->create($planoAlimentar);
        return $this->json(
            $planoAlimentar,
            Response::HTTP_CREATED,
            [
                'Location' => "/plano-alimentar/{$planoAlimentar->getId()}"
            ]
        );
    }

    #[Route('/plano-alimentar/servir', name: 'servir_refeicao', methods: ['PUT'])]
    public function servir(Request $request): Response 
    {
        $refeicao = $this->serializer->deserialize($request->getContent(), Refeicao::class, 'json');
        $this->planoAlimentarService->servir($refeicao);
        return new Response(
            null,
            Response::HTTP_NO_CONTENT
        );
    }

    #[Route('plano-alimentar/{id}', name: 'update_plano_alimentar', methods: ['PUT'])]
    public function update(Request $request, int $id): JsonResponse
    {
        $planoAlimentar = $this->serializer->deserialize($request->getContent(), PlanoAlimentar::class, 'json');
        $planoAlimentar = $this->planoAlimentarService->update($planoAlimentar, $id);
        $context = (new ObjectNormalizerContextBuilder())
            ->withGroups('list_plano_alimentar')
            ->toArray();
        return $this->json(
            $planoAlimentar,
            Response::HTTP_OK,
            [],
            $context
        );
    }

    #[Route('/plano-alimentar/{id}', name: 'delete_plano_alimentar', methods: ['DELETE'])]
    public function delete(PlanoAlimentar $planoAlimentar): Response
    {
        $this->planoAlimentarService->delete($planoAlimentar);
        return new Response(
            '',
            Response::HTTP_NO_CONTENT
        );
    }
}
