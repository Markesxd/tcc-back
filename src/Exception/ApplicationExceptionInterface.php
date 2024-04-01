<?php

namespace App\Exception;

interface ApplicationExceptionInterface {
    function getStatusCode(): int;
    function getMessage(): string;
}