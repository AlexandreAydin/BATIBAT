<?php

namespace App\Controller\Admin;

use App\Entity\Prest;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use FOS\CKEditorBundle\Form\Type\CKEditorType;

class PrestCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Prest::class;
    }

    
    public function configureCrud(Crud $crud): Crud
    {
    return $crud
        ->addFormTheme('@FOSCKEditor/Form/ckeditor_widget.html.twig');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('name'),
            TextEditorField::new('description')
                ->setFormType(CKEditorType::class)
                ->hideOnIndex(),
            DateTimeField::new('createdAt')->hideOnForm(),
        ];
    }
    
}
