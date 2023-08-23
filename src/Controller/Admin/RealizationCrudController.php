<?php

namespace App\Controller\Admin;

use App\Entity\Realization;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use App\Form\RealizationImageType;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class RealizationCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Realization::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('title','titre'),
            SlugField::new('slug')->setTargetFieldName('title'),
            TextField::new('locations','lieux'),
            TextField::new('year','l\'anée'),
            CollectionField::new('realizationImages')
                ->setEntryType(RealizationImageType::class),
        ];
    }
    
}
