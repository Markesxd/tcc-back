<?php

namespace App\Entity;

use App\Repository\PlanoAlimentarRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\Ignore;

#[ORM\Entity(repositoryClass: PlanoAlimentarRepository::class)]
class PlanoAlimentar
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['list_gato', 'list_plano_alimentar'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['list_gato', 'list_plano_alimentar'])]
    private ?string $nome = null;

    #[ORM\ManyToOne(inversedBy: 'planosAlimentares')]
    #[ORM\JoinColumn(nullable: false)]
    #[Ignore]
    private ?User $usuario = null;

    #[ORM\OneToMany(targetEntity: Gato::class, mappedBy: 'planoAlimentar')]
    #[Groups(['list_plano_alimentar'])]
    private Collection $gatos;

    #[ORM\OneToMany(targetEntity: Refeicao::class, mappedBy: 'planoAlimentar', orphanRemoval: true, cascade: ['persist'])]
    #[Groups(['list_plano_alimentar'])]
    private Collection $refeicoes;

    public function __construct()
    {
        $this->gatos = new ArrayCollection();
        $this->refeicoes = new ArrayCollection();
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
            $gato->setPlanoAlimentar($this);
        }

        return $this;
    }

    public function removeGato(Gato $gato): static
    {
        if ($this->gatos->removeElement($gato)) {
            // set the owning side to null (unless already changed)
            if ($gato->getPlanoAlimentar() === $this) {
                $gato->setPlanoAlimentar(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Refeicao>
     */
    public function getRefeicoes(): Collection
    {
        return $this->refeicoes;
    }

    public function addRefeico(Refeicao $refeico): static
    {
        if (!$this->refeicoes->contains($refeico)) {
            $this->refeicoes->add($refeico);
            $refeico->setPlanoAlimentar($this);
        }

        return $this;
    }

    public function removeRefeico(Refeicao $refeico): static
    {
        if ($this->refeicoes->removeElement($refeico)) {
            // set the owning side to null (unless already changed)
            if ($refeico->getPlanoAlimentar() === $this) {
                $refeico->setPlanoAlimentar(null);
            }
        }

        return $this;
    }
}
