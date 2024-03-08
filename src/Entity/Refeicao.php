<?php

namespace App\Entity;

use App\Repository\RefeicaoRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Ignore;

#[ORM\Entity(repositoryClass: RefeicaoRepository::class)]
class Refeicao
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nome = null;

    #[ORM\ManyToOne(inversedBy: 'refeicoes')]
    #[ORM\JoinColumn(nullable: false)]
    #[Ignore]
    private ?PlanoAlimentar $planoAlimentar = null;

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
