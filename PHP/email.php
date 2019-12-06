<?php

if(isset($_POST['email'])  && !empty($_POST['email'])){

    $nome = addslashes($_POST(['name']);

$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['message']);


$to = "contado@182354@upf.br" ;
$subject = "Contato - Programador";
$body = " Nome :".$nome. "\n".
          "Email:".$email. "\n".
          "Mensagem".$mensagem;

$header = "From:182354@upf.br". "\r\n"."Reply-To:".$email."\r\n".
    "X=Mailer:PHP/".phpversion();

if (mail($to , $subject ,$body , $header)){

    echo ("Email enviado com sucesso!")



}else{

    echo ("Email nao pode ser enviado");
}



}