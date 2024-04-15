<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RobotsController extends AbstractController
{
    #[Route('/robots.txt', name: 'app_robots')]
    public function index(): Response
    {
        $content = "User-agent: *\n";
        $content .= "Disallow: /admin/\n";
        $content .= "Allow: /\n";
        $content .= "Sitemap: https://www.batibat77.com/sitemap.xml";

    return new Response($content, 200, ['Content-Type' => 'text/plain']);
        return new Response($content, 200, ['Content-Type' => 'text/plain']);
    }
}
