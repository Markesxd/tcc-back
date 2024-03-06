<?php

namespace App\Entity;

use App\Repository\GatoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Ignore;

#[ORM\Entity(repositoryClass: GatoRepository::class)]
class Gato
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nome = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $aniversario = null;

    #[ORM\Column(type: Types::SMALLINT)]
    private ?int $sexo = null;

    #[ORM\ManyToOne(inversedBy: 'gatos')]
    #[ORM\JoinColumn(nullable: false)]
    #[Ignore]
    private ?User $dono = null;

    #[ORM\ManyToMany(targetEntity: Evento::class, mappedBy: 'cats')]
    private Collection $eventos;

    public function __construct()
    {
        $this->eventos = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNome(): ?string
    {
        return $this->nome;
    }

    public function setNome(string $nome): static
    {
        $this->nome = $nome;

        return $this;
    }

    public function getAniversario(): ?\DateTimeInterface
    {
        return $this->aniversario;
    }

    public function setAniversario(?\DateTimeInterface $aniversario): static
    {
        $this->aniversario = $aniversario;

        return $this;
    }

    public function getSexo(): ?int
    {
        return $this->sexo;
    }

    public function setSexo(int $sexo): static
    {
        $this->sexo = $sexo;

        return $this;
    }

    public function getDono(): ?User
    {
        return $this->dono;
    }

    public function setDono(?User $dono): static
    {
        $this->dono = $dono;

        return $this;
    }

    /**
     * @return Collection<int, Evento>
     */
    public function getEventos(): Collection
    {
        return $this->eventos;
    }

    public function addEvento(Evento $evento): static
    {
        if (!$this->eventos->contains($evento)) {
            $this->eventos->add($evento);
            $evento->addCat($this);
        }

        return $this;
    }

    public function removeEvento(Evento $evento): static
    {
        if ($this->eventos->removeElement($evento)) {
            $evento->removeCat($this);
        }

        return $this;
    }
}
