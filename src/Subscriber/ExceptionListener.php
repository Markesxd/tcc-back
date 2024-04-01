<?php

namespace App\Subscriber;

use App\Exception\ApplicationExceptionInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Serializer\SerializerInterface;

class ExceptionListener implements EventSubscriberInterface {
    private SerializerInterface $serializer;

    public function __construct(
        SerializerInterface $serializer
    )
    {
        $this->serializer = $serializer;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::EXCEPTION => 'onKernelException'
        ];
    }

    public function onKernelException(ExceptionEvent $event): void
    {
        $exeption = $event->getThrowable();
        $event->stopPropagation();
        $statusCode = 500;
        $message = $exeption->getMessage() ?? "An unexpected Error has ocurred";

        if($exeption instanceof NotFoundHttpException) {
            $statusCode = $exeption->getStatusCode();
            $message = "Resourse not found";
        }else if($exeption instanceof ApplicationExceptionInterface) {
            $statusCode =  $exeption->getStatusCode();
            $message = $exeption->getMessage();
        }
        $content = [
            'error' => $message
        ];
        $event->setResponse(
            new JsonResponse(
                $this->serializer->serialize($content, 'json'), $statusCode)
        );
    }
}