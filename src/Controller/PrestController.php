<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PrestController extends AbstractController
{
    #[Route('/prest', name: 'app_prest')]
    public function index(): Response
    {
        return $this->render('pages/prest/index.html.twig', [
        ]);
    }
}
