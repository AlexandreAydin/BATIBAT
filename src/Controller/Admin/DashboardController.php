<?php

namespace App\Controller\Admin;

use App\Entity\Categorie;
use App\Entity\Contact;
use App\Entity\Prest;
use App\Entity\Realization;
use App\Entity\RealizationCategorie;
use App\Entity\RealizationImage;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        return $this->render('admin/dasboard.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('BatiBat Admin');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('Réalisation', 'fas fa-image', Realization::class);
        yield MenuItem::linkToCrud('Réalisation Images', 'fas fa-image', RealizationImage::class);
        yield MenuItem::linkToCrud('Préstations article de blog', 'fas fa-pencil', Prest::class);
        yield MenuItem::linkToCrud('Préstation Catégories', 'fas fa-list', Categorie::class);
        yield MenuItem::linkToCrud('Contact', 'fas fa-user', Contact::class);
    }
}
 