<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\Ignore;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Ignore]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['show'])]
    private ?string $username = null;

    #[ORM\Column(length: 255)]
    private ?string $password = null;

    #[ORM\Column(length: 255)]
    #[Groups(['show'])]
    private ?string $email = null;

    #[ORM\OneToMany(targetEntity: Gato::class, mappedBy: 'dono', orphanRemoval: true)]
    #[Ignore]
    private Collection $gatos;

    #[ORM\OneToMany(targetEntity: CaixaDeAreia::class, mappedBy: 'usuario', orphanRemoval: true)]
    #[Ignore]
    private Collection $caixasDeAreia;

    #[ORM\OneToMany(targetEntity: Evento::class, mappedBy: 'usuario', orphanRemoval: true)]
    #[Ignore]
    private Collection $eventos;

    #[ORM\OneToMany(targetEntity: PlanoAlimentar::class, mappedBy: 'usuario', orphanRemoval: true)]
    #[Ignore]
    private Collection $planosAlimentares;

    public function __construct()
    {
        $this->gatos = new ArrayCollection();
        $this->caixasDeAreia = new ArrayCollection();
        $this->eventos = new ArrayCollection();
        $this->planosAlimentares = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): static
    {
        $this->username = $username;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    #[Ignore]
    public function getRoles(): array
    {
        return ["ROLE_USER"];
    }
    
    #[Ignore]
    public function getUserIdentifier(): string
    {
        return $this->email;
    }

    public function eraseCredentials(): void
    {}

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
            $gato->setDono($this);
        }

        return $this;
    }

    public function removeGato(Gato $gato): static
    {
        if ($this->gatos->removeElement($gato)) {
            // set the owning side to null (unless already changed)
            if ($gato->getDono() === $this) {
                $gato->setDono(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, CaixaDeAreia>
     */
    public function getCaixasDeAreia(): Collection
    {
        return $this->caixasDeAreia;
    }

    public function addCaixasDeAreium(CaixaDeAreia $caixasDeAreium): static
    {
        if (!$this->caixasDeAreia->contains($caixasDeAreium)) {
            $this->caixasDeAreia->add($caixasDeAreium);
            $caixasDeAreium->setUsuario($this);
        }

        return $this;
    }

    public function removeCaixasDeAreium(CaixaDeAreia $caixasDeAreium): static
    {
        if ($this->caixasDeAreia->removeElement($caixasDeAreium)) {
            // set the owning side to null (unless already changed)
            if ($caixasDeAreium->getUsuario() === $this) {
                $caixasDeAreium->setUsuario(null);
            }
        }

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
            $evento->setUsuario($this);
        }

        return $this;
    }

    public function removeEvento(Evento $evento): static
    {
        if ($this->eventos->removeElement($evento)) {
            // set the owning side to null (unless already changed)
            if ($evento->getUsuario() === $this) {
                $evento->setUsuario(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PlanoAlimentar>
     */
    public function getPlanosAlimentares(): Collection
    {
        return $this->planosAlimentares;
    }

    public function addPlanosAlimentare(PlanoAlimentar $planosAlimentare): static
    {
        if (!$this->planosAlimentares->contains($planosAlimentare)) {
            $this->planosAlimentares->add($planosAlimentare);
            $planosAlimentare->setUsuario($this);
        }

        return $this;
    }

    public function removePlanosAlimentare(PlanoAlimentar $planosAlimentare): static
    {
        if ($this->planosAlimentares->removeElement($planosAlimentare)) {
            // set the owning side to null (unless already changed)
            if ($planosAlimentare->getUsuario() === $this) {
                $planosAlimentare->setUsuario(null);
            }
        }

        return $this;
    }
}
