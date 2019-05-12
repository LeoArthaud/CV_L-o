<?php

namespace App\Repository;

use App\Entity\Commentarys;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Commentarys|null find($id, $lockMode = null, $lockVersion = null)
 * @method Commentarys|null findOneBy(array $criteria, array $orderBy = null)
 * @method Commentarys[]    findAll()
 * @method Commentarys[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommentarysRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Commentarys::class);
    }

    // /**
    //  * @return Commentarys[] Returns an array of Commentarys objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Commentarys
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
