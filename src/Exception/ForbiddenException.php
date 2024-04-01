<?php

namespace App\Exception;

use RuntimeException;
use Symfony\Component\HttpFoundation\Response;

class ForbiddenException extends RuntimeException implements ApplicationExceptionInterface {
    public function __construct(string $message = 'This resource is forbidden')
    {
        parent::__construct($message);
    }

    public function getStatusCode(): int
    {
        return Response::HTTP_FORBIDDEN;
    }
}