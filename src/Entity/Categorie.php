<?php

namespace App\Entity;

use App\Repository\CategorieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ORM\Entity(repositoryClass: CategorieRepository::class)]
#[UniqueEntity('slug')]
class Categorie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255, unique:true)]
    private ?string $slug = null;

    #[ORM\ManyToMany(targetEntity: Realization::class, mappedBy: 'categorys')]
    private Collection $realizations;

    #[ORM\ManyToMany(targetEntity: Prest::class, mappedBy: 'categorys')]
    private Collection $prests;

    public function __toString()
    {
        return $this->getName();
    }


    public function __construct()
    {
        $this->realizations = new ArrayCollection();
        $this->prests = new ArrayCollection();
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

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): static
    {
        $this->slug = $slug;

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

    /**
     * @return Collection<int, Prest>
     */
    public function getPrests(): Collection
    {
        return $this->prests;
    }

    public function addPrest(Prest $prest): static
    {
        if (!$this->prests->contains($prest)) {
            $this->prests->add($prest);
            $prest->addCategory($this);
        }

        return $this;
    }

    public function removePrest(Prest $prest): static
    {
        if ($this->prests->removeElement($prest)) {
            $prest->removeCategory($this);
        }

        return $this;
    }


}
