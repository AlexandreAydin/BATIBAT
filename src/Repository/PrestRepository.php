<?php

namespace App\Repository;

use App\Entity\Categorie;
use App\Entity\Prest;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Prest>
 *
 * @method Prest|null find($id, $lockMode = null, $lockVersion = null)
 * @method Prest|null findOneBy(array $criteria, array $orderBy = null)
 * @method Prest[]    findAll()
 * @method Prest[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PrestRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Prest::class);
    }


   public function paginationQuery()
   {
       return $this->createQueryBuilder('a')
           ->orderBy('a.id', 'DESC')
           ->getQuery()
       ;
   }

    public function findByCategoryQuery(Categorie $categorie): QueryBuilder
    {
        return $this->createQueryBuilder('p')
                    ->join('p.categorys', 'c') 
                    ->where('c.id = :categorieId')
                    ->setParameter('categorieId', $categorie->getId())
                    ->orderBy('p.id', 'DESC');
    }


//    public function findOneBySomeField($value): ?Prest
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
