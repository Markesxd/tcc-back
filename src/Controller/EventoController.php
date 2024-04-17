<?php

namespace App\Controller;

use App\Entity\Evento;
use App\Service\EventoService;
use App\Util\DateUtil;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\Context\Normalizer\ObjectNormalizerContextBuilder;
use Symfony\Component\Serializer\SerializerInterface;

class EventoController extends AbstractController
{
    private EventoService $eventoService;
    private SerializerInterface $serializer;

    public function __construct(
        EventoService $eventoService,
        SerializerInterface $serializer
    )
    {
        $this->eventoService = $eventoService;
        $this->serializer = $serializer;
    }

    #[Route('/evento', name: 'list_evento', methods: ['GET'])]
    public function list(): JsonResponse
    {
        $eventos = $this->eventoService->list();
        foreach($eventos as $evento) {
            DateUtil::convertDateToGMT($evento->getData());
        }
        $context = (new ObjectNormalizerContextBuilder())
            ->withGroups('list_evento')
            ->toArray();
        return $this->json(
            $eventos,
            Response::HTTP_OK,
            [],
            $context
        );
    }

    #[Route('/evento', name: 'create_evento', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        $context = (new ObjectNormalizerContextBuilder())
            ->withGroups('list_evento')
            ->toArray();
        $evento = $this->serializer->deserialize($request->getContent(), Evento::class, 'json');
        $evento = $this->eventoService->create($evento);

        return $this->json(
            $evento,
            Response::HTTP_CREATED,
            ['Location' => "/evento/{$evento->getId()}"],
            $context
        );
    }

    #[Route('evento/{id}', name: 'update_evento', methods: ['PUT'])]
    public function update(Request $request, int $id): JsonResponse
    {
        $context = (new ObjectNormalizerContextBuilder())
            ->withGroups('list_evento')
            ->toArray();
        $evento = $this->serializer->deserialize($request->getContent(), Evento::class, 'json', $context);
        $evento = $this->eventoService->update($evento, $id);

        return $this->json(
            $evento,
            Response::HTTP_OK,
            [],
            $context
        );
    }

    #[Route('/evento/{id}', name: 'delete_evento', methods: ['DELETE'])]
    public function delete(Evento $evento): Response
    {
        $this->eventoService->delete($evento);
        return new Response(
            '',
            Response::HTTP_NO_CONTENT
        );
    }
}
