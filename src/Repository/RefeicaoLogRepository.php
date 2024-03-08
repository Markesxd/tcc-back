<?php

namespace App\Repository;

use App\Entity\RefeicaoLog;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<RefeicaoLog>
 *
 * @method RefeicaoLog|null find($id, $lockMode = null, $lockVersion = null)
 * @method RefeicaoLog|null findOneBy(array $criteria, array $orderBy = null)
 * @method RefeicaoLog[]    findAll()
 * @method RefeicaoLog[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RefeicaoLogRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RefeicaoLog::class);
    }

    //    /**
    //     * @return RefeicaoLog[] Returns an array of RefeicaoLog objects
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

    //    public function findOneBySomeField($value): ?RefeicaoLog
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
