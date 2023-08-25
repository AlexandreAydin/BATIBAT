<?php

namespace App\Controller;

use App\Entity\Realization;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RealizationController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/nos-realisations', name: 'app_realization')]
    public function index(): Response
    {

        $realizations = $this->entityManager->getRepository(Realization::class)->findAll();

        return $this->render('pages/realization/index.html.twig',[
            "realizations" =>  $realizations,
        ]);
    }

    #[Route('/nos-realisations/{slug}' , name:'app_realization_details')]
        public function details(Realization $realization): Response
    {
        
        return $this->render('pages/realization/details_realization.html.twig',[
            'realization' => $realization
        ]);
    }
}
