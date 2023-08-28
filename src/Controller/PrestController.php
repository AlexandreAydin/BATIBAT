<?php

namespace App\Controller;

use App\Entity\Prest;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PrestController extends AbstractController
{
    #[Route('/nos-prestations', name: 'app_prest')]
    public function index(EntityManagerInterface $manager): Response
    {

        $prests = $manager->getRepository(Prest::class)->findAll();

        return $this->render('pages/prest/index.html.twig', [
            'prests' => $prests,
        ]);
    }

    #[Route('nos-prestations/{slug}', name: ('app_prest_details'))]
    public function details(Prest $prest): Response
    {
        return $this->render('pages/prest/details_prest.html.twig',[
            'prest'=>$prest,
        ]);
    }


}
