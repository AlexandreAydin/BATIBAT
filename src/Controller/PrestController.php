<?php

namespace App\Controller;

use App\Entity\Prest;
use App\Repository\CategorieRepository;
use App\Repository\PrestRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PrestController extends AbstractController
{
    #[Route('/nos-prestations', name: 'app_prest')]
    public function index(
    PrestRepository $prestRepository,
    Request $request,
    PaginatorInterface $paginator,
    CategorieRepository $categorieRepo
    ): Response
    {

        $categoriesWithPrestations = $categorieRepo->findWithPrestations()->getQuery()->getResult();
        
        $prests = $paginator->paginate(

            $prestRepository->paginationQuery(),

            $request->query->getInt('page', 1), 
            12
        );

        return $this->render('pages/prest/index.html.twig', [
            'prests' => $prests,
            'categories' => $categoriesWithPrestations,
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
