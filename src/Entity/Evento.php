<?php

namespace App\Entity;

use App\Repository\EventoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Ignore;

#[ORM\Entity(repositoryClass: EventoRepository::class)]
class Evento
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nome = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $data = null;

    #[ORM\Column(type: Types::SMALLINT)]
    private ?int $intervaloDeRepeticao = null;

    #[ORM\ManyToOne(inversedBy: 'eventos')]
    #[ORM\JoinColumn(nullable: false)]
    #[Ignore]
    private ?User $usuario = null;

    #[ORM\ManyToMany(targetEntity: Gato::class, inversedBy: 'eventos')]
    private Collection $gatos;

    public function __construct()
    {
        $this->gatos = new ArrayCollection();
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

    public function getData(): ?\DateTimeInterface
    {
        return $this->data;
    }

    public function setData(\DateTimeInterface $data): static
    {
        $this->data = $data;

        return $this;
    }

    public function getIntervaloDeRepeticao(): ?int
    {
        return $this->intervaloDeRepeticao;
    }

    public function setIntervaloDeRepeticao(int $intervaloDeRepeticao): static
    {
        $this->intervaloDeRepeticao = $intervaloDeRepeticao;

        return $this;
    }

    public function getUsuario(): ?User
    {
        return $this->usuario;
    }

    public function setUsuario(?User $usuario): static
    {
        $this->usuario = $usuario;

        return $this;
    }

    /**
     * @return Collection<int, Gato>
     */
    public function getGatos(): Collection
    {
        return $this->gatos;
    }

    public function addGato(Gato $gato): static
    {
        if (!$this->gatos->contains($gato)) {
            $this->gatos->add($gato);
        }

        return $this;
    }

    public function removeGato(Gato $gato): static
    {
        $this->gatos->removeElement($gato);

        return $this;
    }
}
