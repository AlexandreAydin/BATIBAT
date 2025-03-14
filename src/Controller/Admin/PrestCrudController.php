<?php

namespace App\Controller\Admin;

use App\Entity\Prest;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
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
        ->addFormTheme('@FOSCKEditor/Form/ckeditor_widget.html.twig')
        ->setDefaultSort(['createdAt' => 'DESC']);
    }



    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('pageTitle', 'block title'),
            TextField::new('pageMetaDescription','block meta description'),
            TextField::new('name'),
            SlugField::new('slug')->setTargetFieldName('name'),
            TextEditorField::new('description')
                ->setFormType(CKEditorType::class)
                ->hideOnIndex(),
            AssociationField::new('categorys'),
            DateTimeField::new('createdAt')->hideOnForm(),
        ];
    }
    
}
