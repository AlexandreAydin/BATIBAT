<?php

namespace App\Controller;

use App\Entity\Categorie;
use App\Repository\PrestRepository;
use App\Repository\CategorieRepository;
use App\Repository\RealizationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Knp\Component\Pager\PaginatorInterface;

class CategoryController extends AbstractController
{
    #[Route('/nos-prestations/categorie/{slug}', name: 'app_category_show_prest')]
    public function index(
        Categorie $categorie,
        PrestRepository $prestRepo,
        PaginatorInterface $paginator,
        Request $request,
        CategorieRepository $categorieRepo
    ): Response
    {
        if (!$categorie) {
            return $this->redirectToRoute('app_home');
        }

        $categoriesWithPrestations = $categorieRepo->findWithPrestations()->getQuery()->getResult();

        $query = $prestRepo->findByCategoryQuery($categorie);

        $prests = $paginator->paginate(
            $query,
            $request->query->getInt('page', 1),
            1 
        );

        return $this->render('category/show_prest.html.twig', [
            'categorie' => $categorie,
            'prests' => $prests,
            'categories' => $categoriesWithPrestations,
        ]);
    }

    #[Route('/nos-realisations/categorie/{slug}', name:'app_category_show_realization')]
    public function show_realization(
        Categorie $categorie,
        RealizationRepository $realizationRepo,
        PaginatorInterface $paginator,
        Request $request,
        CategorieRepository $categorieRepo
    ): Response
    {
        if (!$categorie) {
            return $this->redirectToRoute('app_home');
        }

        $categorieWithRealizations = $categorieRepo->findWithRealizations()->getQuery()->getResult();

        $query = $realizationRepo->findByRealizationCategoryQuery($categorie);

        $realizations = $paginator->paginate(
            $query,
            $request->query->getInt('page', 1),
            1
        );

        return $this->render('category/show_realizations.html.twig',[
            'currentCategorie' => $categorie,
            'realizations' => $realizations,
            'categories' =>  $categorieWithRealizations
        ]);


    }
}
