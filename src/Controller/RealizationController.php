<?php

namespace App\Controller;

use App\Entity\Realization;
use App\Repository\CategorieRepository;
use App\Repository\RealizationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
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
    public function index(
    RealizationRepository $realizationRepository,
    Request $request,
    CategorieRepository $categorieRepo,
    PaginatorInterface $paginator): Response
    {

        // $realizations = $this->entityManager->getRepository(Realization::class)->findAll();
        $categoriesWithRealizations = $categorieRepo->findWithRealizations()->getQuery()->getResult();

        $realizations = $paginator->paginate(
            $realizationRepository->paginationQuery(),

            $request->query->getInt('page',1),
            3
        );

        return $this->render('pages/realization/index.html.twig',[
            "realizations" =>  $realizations,
            'categories' => $categoriesWithRealizations
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
