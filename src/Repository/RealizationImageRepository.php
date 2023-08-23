<?php

namespace App\Repository;

use App\Entity\RealizationImage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<RealizationImage>
 *
 * @method RealizationImage|null find($id, $lockMode = null, $lockVersion = null)
 * @method RealizationImage|null findOneBy(array $criteria, array $orderBy = null)
 * @method RealizationImage[]    findAll()
 * @method RealizationImage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RealizationImageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RealizationImage::class);
    }

//    /**
//     * @return RealizationImage[] Returns an array of RealizationImage objects
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

//    public function findOneBySomeField($value): ?RealizationImage
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
