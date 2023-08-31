<?php

namespace App\Repository;

use App\Entity\Categorie;
use App\Entity\Realization;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Realization>
 *
 * @method Realization|null find($id, $lockMode = null, $lockVersion = null)
 * @method Realization|null findOneBy(array $criteria, array $orderBy = null)
 * @method Realization[]    findAll()
 * @method Realization[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RealizationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Realization::class);
    }

    public function paginationQuery()
    {
        return $this->createQueryBuilder('a')
            ->orderBy('a.id', 'DESC')
            ->getQuery()
        ;
    }

    public function findByRealizationCategoryQuery(Categorie $categorie): QueryBuilder
    {
        return $this->createQueryBuilder('p')
                    ->join('p.categorys', 'c') 
                    ->where('c.id = :categorieId')
                    ->setParameter('categorieId', $categorie->getId())
                    ->orderBy('p.id', 'DESC');
    }
    

//    public function findOneBySomeField($value): ?Realization
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
