<?php

namespace App\Controller;

use App\Repository\CategorieRepository;
use App\Repository\PrestRepository;
use App\Repository\RealizationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Hostname;

class SiteMapController extends AbstractController
{
    #[Route('/sitemap.xml', name: 'sitemap', defaults: ['_format' => 'xml'])]
    public function index(
    Request $request,
    RealizationRepository $realizationRepository,
    PrestRepository $prestRepository,
    CategorieRepository $categorieRepository
    ): Response
    {
        // permet de recupéré nom de domain
        $hostname = $request->getSchemeAndHttpHost();

        $urls = [] ; 
        // permet de récupéré les url 
        $urls [] =['loc'=> $this->generateUrl('app_home')];
        $urls [] =['loc'=> $this->generateUrl('app_realization')];
        $urls [] =['loc'=> $this->generateUrl('app_prest')];
        $urls [] =['loc'=> $this->generateUrl('app_contact')];
        $urls [] =['loc'=> $this->generateUrl('app_security.login')];
        $urls [] =['loc'=> $this->generateUrl('app_security.logout')];

        foreach ($realizationRepository->findAll() as $realization) {
            $urls[] = [
                'loc'=> $this->generateUrl('app_realization_details', ['slug' => $realization->getSlug()]),
                'lastmod' => $realization->getCreatedAt()->format('Y-m-d')
            ];
        }

        foreach ($prestRepository->findAll() as $prest) {
            $urls[] = [
                'loc'=> $this->generateUrl('app_prest_details', ['slug' => $prest->getSlug()]),
                'lastmod' => $prest->getCreatedAt()->format('Y-m-d')
            ];
        }

        foreach ($categorieRepository->findAll() as $categorie) {
            $urls[] = [
                'loc'=> $this->generateUrl('app_category_show_prest', ['slug' => $categorie->getSlug()]),
            ];
        }

        foreach ($categorieRepository->findAll() as $categorie) {
            $urls[] = [
                'loc'=> $this->generateUrl('app_category_show_realization', ['slug' => $categorie->getSlug()]),
            ];
        }

        $response = new Response(
            $this->renderView('site_map/index.html.twig',[
                'urls' => $urls,
                'hostname'=>$hostname
            ]),
            200
        );

        $response->headers->set('Content-type','text/xml');

        return $response;
    }
}