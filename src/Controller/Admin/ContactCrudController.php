<?php

namespace App\Controller\Admin;

use App\Entity\Contact;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TelephoneField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ContactCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Contact::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setDefaultSort(['createdAt' => 'DESC']);
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name','nom'),
            EmailField::new('email')
                ->hideOnIndex(),
            TelephoneField::new('phone','numéro de téléphone')
                ->hideOnIndex(), 
            TextField::new('message')
                ->hideOnIndex(), 
            BooleanField::new('isRead', 'lu ?'),
            DateTimeField::new('createdAt', 'Créé le'),
        ];
    }


    public function configureActions(Actions $actions): Actions
    {
        $detailAction = Action::new('detail', 'Lire plus')
            ->setIcon('fa fa-eye')
            ->linkToCrudAction(Crud::PAGE_DETAIL);
    
        $actions->add(Crud::PAGE_INDEX, $detailAction)
            ->update(Crud::PAGE_INDEX, Action::DELETE, function (Action $action) {
                return $action->setLabel('Supprimer')
                              ->setIcon('fa fa-trash')
                              ->displayAsLink();
            })
            ->disable(Action::NEW)
            ->remove(Crud::PAGE_DETAIL, Action::EDIT);
    
        return $actions;
    }
    

    
    
}
