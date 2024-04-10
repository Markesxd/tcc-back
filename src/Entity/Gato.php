<?php

namespace App\Entity;

use App\Repository\GatoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\Ignore;

#[ORM\Entity(repositoryClass: GatoRepository::class)]
class Gato
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['list_gato', 'list_plano_alimentar', 'list_evento'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['list_gato', 'list_plano_alimentar', 'list_evento'])]
    private ?string $nome = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups(['list_gato'])]
    private ?\DateTimeInterface $aniversario = null;

    #[ORM\Column(type: Types::SMALLINT)]
    #[Groups(['list_gato'])]
    private ?int $sexo = null;

    #[ORM\ManyToOne(inversedBy: 'gatos')]
    #[ORM\JoinColumn(nullable: false)]
    #[Ignore]
    private ?User $dono = null;

    #[ORM\ManyToMany(targetEntity: Evento::class, mappedBy: 'gatos')]
    #[Ignore]
    private Collection $eventos;

    #[ORM\ManyToOne(inversedBy: 'gatos')]
    #[Groups(['list_gato'])]
    private ?PlanoAlimentar $planoAlimentar = null;

    public function __construct()
    {
        $this->eventos = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
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
            $evento->addGato($this);
        }

        return $this;
    }

    public function removeEvento(Evento $evento): static
    {
        if ($this->eventos->removeElement($evento)) {
            $evento->removeGato($this);
        }

        return $this;
    }

    public function getPlanoAlimentar(): ?PlanoAlimentar
    {
        return $this->planoAlimentar;
    }

    public function setPlanoAlimentar(?PlanoAlimentar $planoAlimentar): static
    {
        $this->planoAlimentar = $planoAlimentar;

        return $this;
    }
}
