<?php

namespace App\Entity;

use App\Repository\CategorieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategorieRepository::class)]
class Categorie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\ManyToMany(targetEntity: Realization::class, mappedBy: 'categorys')]
    private Collection $realizations;

    public function __construct()
    {
        $this->realizations = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->getName();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Realization>
     */
    public function getRealizations(): Collection
    {
        return $this->realizations;
    }

    public function addRealization(Realization $realization): static
    {
        if (!$this->realizations->contains($realization)) {
            $this->realizations->add($realization);
            $realization->addCategory($this);
        }

        return $this;
    }

    public function removeRealization(Realization $realization): static
    {
        if ($this->realizations->removeElement($realization)) {
            $realization->removeCategory($this);
        }

        return $this;
    }


}
