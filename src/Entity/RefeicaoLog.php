<?php

namespace App\Entity;

use App\Repository\RefeicaoLogRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Ignore;

#[ORM\Entity(repositoryClass: RefeicaoLogRepository::class)]
class RefeicaoLog
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?bool $foiServida = null;

    #[ORM\ManyToOne(inversedBy: 'logs')]
    #[Ignore]
    private Refeicao $refeicao;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $data = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isFoiServida(): ?bool
    {
        return $this->foiServida;
    }

    public function setFoiServida(bool $foiServida): static
    {
        $this->foiServida = $foiServida;

        return $this;
    }

    /**
     * @return Refeicao
     */
    public function getRefeicao(): Refeicao
    {
        return $this->refeicao;
    }

    public function setRefeicao(Refeicao $refeicao): static
    {
        $this->refeicao = $refeicao;

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
}
