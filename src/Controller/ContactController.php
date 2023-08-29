<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Repository\ContactRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Mapping\Entity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(): Response
    {
        return $this->render('pages/contact/index.html.twig');
    }

    #[Route('/contact/submit', name: 'app_submit_contact')]
    public function submit_contact(Request $request, EntityManagerInterface $manager): Response
    {
        $name = $request->request->get('name');
        $email = $request->request->get('email');
        $phone = intval(str_replace(' ', '', $request->request->get('phone')));      
        $message = $request->request->get('message');

        $contact = new Contact();
        $contact->setName($name);
        $contact->setEmail($email);
        $contact->setPhone($phone);
        $contact->setMessage($message);

        $manager->persist($contact);
        $manager->flush();

        $this->addFlash(
            'success',
            'Votre message a été envoyé avec succès !'
        );

        return $this->redirectToRoute('app_contact');
    }
}
