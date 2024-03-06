<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class CaixaDeAreiaController extends AbstractController
{
    #[Route('/caixa-de-areia', name: 'list_caixa_de_areia')]
    public function list(): JsonResponse
    {
        
        return $this->json(
            ''
        );
    }
}
