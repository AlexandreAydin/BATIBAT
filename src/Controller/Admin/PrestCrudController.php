<?php

namespace App\Controller\Admin;

use App\Entity\Prest;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class PrestCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Prest::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
