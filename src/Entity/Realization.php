<?php

namespace App\Entity;

use App\Repository\RealizationRepository;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Doctrine\ORM\Mapping as ORM;

#[UniqueEntity('slug')]
#[ORM\Entity(repositoryClass: RealizationRepository::class)]
class Realization
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(length: 255,unique:true )]
    private ?string $slug = null;

    #[ORM\OneToMany(mappedBy: 'realisation', targetEntity: RealizationImage::class, cascade: ['persist'], orphanRemoval: true,)]
    private Collection $realizationImages;

    #[ORM\Column(length: 255)]
    private ?string $locations = null;

    #[ORM\Column]
    private ?int $year = null;


    #[ORM\ManyToMany(targetEntity: Categorie::class, inversedBy: 'realizations')]
    private Collection $categorys;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(length: 60, nullable: true)]
    private ?string $pageTitle = null;

    #[ORM\Column(length: 160, nullable: true)]
    private ?string $pageMetaDescription = null;


    public function __construct()
    {
        $this->realizationImages = new ArrayCollection();
        $this->categorys = new ArrayCollection();
        $this->createdAt = new DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

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
     * @return Collection<int, RealizationImage>
     */
    public function getRealizationImages(): Collection
    {
        return $this->realizationImages;
    }

    public function addRealizationImage(RealizationImage $realizationImage): static
    {
        if (!$this->realizationImages->contains($realizationImage)) {
            $this->realizationImages->add($realizationImage);
            $realizationImage->setRealisation($this);
        }

        return $this;
    }

    public function removeRealizationImage(RealizationImage $realizationImage): static
    {
        if ($this->realizationImages->removeElement($realizationImage)) {
            // set the owning side to null (unless already changed)
            if ($realizationImage->getRealisation() === $this) {
                $realizationImage->setRealisation(null);
            }
        }

        return $this;
    }

    public function getLocations(): ?string
    {
        return $this->locations;
    }

    public function setLocations(string $locations): static
    {
        $this->locations = $locations;

        return $this;
    }

    public function getYear(): ?int
    {
        return $this->year;
    }

    public function setYear(int $year): static
    {
        $this->year = $year;

        return $this;
    }

    /**
     * @return Collection<int, Categorie>
     */
    public function getCategorys(): Collection
    {
        return $this->categorys;
    }

    public function addCategory(Categorie $category): static
    {
        if (!$this->categorys->contains($category)) {
            $this->categorys->add($category);
        }

        return $this;
    }

    public function removeCategory(Categorie $category): static
    {
        $this->categorys->removeElement($category);

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getPageTitle(): ?string
    {
        return $this->pageTitle;
    }

    public function setPageTitle(?string $pageTitle): static
    {
        $this->pageTitle = $pageTitle;

        return $this;
    }

    public function getPageMetaDescription(): ?string
    {
        return $this->pageMetaDescription;
    }

    public function setPageMetaDescription(?string $pageMetaDescription): static
    {
        $this->pageMetaDescription = $pageMetaDescription;

        return $this;
    }

}
