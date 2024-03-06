<?php

namespace App\Repository;

use App\Entity\CaixaDeAreia;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CaixaDeAreia>
 *
 * @method CaixaDeAreia|null find($id, $lockMode = null, $lockVersion = null)
 * @method CaixaDeAreia|null findOneBy(array $criteria, array $orderBy = null)
 * @method CaixaDeAreia[]    findAll()
 * @method CaixaDeAreia[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CaixaDeAreiaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CaixaDeAreia::class);
    }

    //    /**
    //     * @return CaixaDeAreia[] Returns an array of CaixaDeAreia objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('c.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?CaixaDeAreia
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
