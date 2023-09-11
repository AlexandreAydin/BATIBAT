<?php

namespace App\Controller;

use App\Entity\Prest;
use App\Entity\Realization;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(EntityManagerInterface $manager): Response
    {

        $prestRepository = $manager->getRepository(Prest::class);
        $prests = $prestRepository->paginationQuery()->getResult();

        $realizationRepository = $manager->getRepository(Realization::class);
        $realizations = $realizationRepository->paginationQuery()->getResult();

        return $this->render('pages/home/index.html.twig', [
             'prests' => $prests,
             'realizations' => $realizations
        ]);
    }
}
