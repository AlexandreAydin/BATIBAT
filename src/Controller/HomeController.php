<?php

namespace App\Controller;

use App\Entity\Prest;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(EntityManagerInterface $manager): Response
    {

        $prests = $manager->getRepository(Prest::class)->findAll();

        return $this->render('pages/home/index.html.twig', [
             'prests' => $prests,
        ]);
    }
}
