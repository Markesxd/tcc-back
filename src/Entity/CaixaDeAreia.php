<?php

namespace App\Entity;

use App\Repository\CaixaDeAreiaRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Ignore;

#[ORM\Entity(repositoryClass: CaixaDeAreiaRepository::class)]
class CaixaDeAreia
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nome = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $limpoEm = null;

    #[ORM\ManyToOne(inversedBy: 'caixasDeAreia')]
    #[ORM\JoinColumn(nullable: false)]
    #[Ignore]
    private ?User $usuario = null;

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

    public function getLimpoEm(): ?\DateTimeInterface
    {
        return $this->limpoEm;
    }

    public function setLimpoEm(?\DateTimeInterface $limpoEm): static
    {
        $this->limpoEm = $limpoEm;

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
}
