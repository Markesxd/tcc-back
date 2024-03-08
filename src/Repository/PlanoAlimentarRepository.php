<?php

namespace App\Repository;

use App\Entity\PlanoAlimentar;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PlanoAlimentar>
 *
 * @method PlanoAlimentar|null find($id, $lockMode = null, $lockVersion = null)
 * @method PlanoAlimentar|null findOneBy(array $criteria, array $orderBy = null)
 * @method PlanoAlimentar[]    findAll()
 * @method PlanoAlimentar[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlanoAlimentarRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PlanoAlimentar::class);
    }

    //    /**
    //     * @return PlanoAlimentar[] Returns an array of PlanoAlimentar objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('p')
    //            ->andWhere('p.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('p.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?PlanoAlimentar
    //    {
    //        return $this->createQueryBuilder('p')
    //            ->andWhere('p.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
