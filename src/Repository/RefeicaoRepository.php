<?php

namespace App\Repository;

use App\Entity\Refeicao;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Refeicao>
 *
 * @method Refeicao|null find($id, $lockMode = null, $lockVersion = null)
 * @method Refeicao|null findOneBy(array $criteria, array $orderBy = null)
 * @method Refeicao[]    findAll()
 * @method Refeicao[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RefeicaoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Refeicao::class);
    }

    //    /**
    //     * @return Refeicao[] Returns an array of Refeicao objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('r.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Refeicao
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
