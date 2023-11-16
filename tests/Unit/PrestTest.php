<?php

namespace App\Tests\Unit;

use App\Entity\Prest;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class PrestTest extends KernelTestCase
{
    public function getEntity(): Prest
    {
        return (new Prest())
            ->setPageTitle('PageTitle')
            ->setPageMetaDescription('MetaDescription')
            ->setName('Recipe #1')
            ->setSlug('Recipe #1')
            ->setDescription('Description #1')
            ->setCreatedAt(new \DateTimeImmutable());
    }

    public function testEntityIsValid(): void
    {
        self::bootKernel();
        $container = static::getContainer();

        $recipe = $this->getEntity();

        $errors = $container->get('validator')->validate($recipe);

        $this->assertCount(0, $errors);
    }

    public function testInvalidName()
    {
        self::bootKernel();
        $container = static::getContainer();

        $recipe = $this->getEntity();
        $recipe->setName('');

        $errors = $container->get('validator')->validate($recipe);
        $this->assertCount(0, $errors);
    }
}
