<?php

namespace App\Controller;

use App\Entity\visitors;
use App\Entity\Commentarys;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
//use Symfony\Component\Security\Core\Security;

class FormController extends AbstractController
{
    /**
     * @Route("/addMessage", name="addMessage", methods={"POST"})
     */
    public function AddComment(Request $request)
    {
        // creates a task and gives it some dummy data for this example
        $visitor = new visitors();
        $commentaries = new Commentarys();
        $nameVisitor= $request->get('name');
        $emailVisitor= $request->get('email');
        $visitor->setName($nameVisitor);
        $visitor->setEmail($emailVisitor);
        $commentaries->setNameVisitor($visitor);
        $commentaries->setCommentary($request->get('message'));
        $commentaries->setDate(new \DateTime());
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($visitor);
        $entityManager->persist($commentaries);
        $entityManager->flush();
        return $this->render('home.html.twig');
    }
}