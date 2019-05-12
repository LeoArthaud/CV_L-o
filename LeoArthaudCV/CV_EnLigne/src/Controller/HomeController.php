<?php

namespace App\Controller;



use App\Entity\Commentarys;
use App\Entity\visitors;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("home", name="home")
     */
    public function Home()
    {
        $visiteur = $this->getDoctrine()->getRepository(visitors::class)->findAll();
        $commentaires = $this->getDoctrine()->getRepository(Commentarys::class)->findAll();
        return $this->render('home.html.twig',[
            'commentaires' => $commentaires,
            'visiteur' => $visiteur,
        ]);
    }
}