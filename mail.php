<?php 
if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message']; 

    $mailTo = "meganisastar@msn.com"
    $headers = "From: ".$email;
    

    mail($mailTo, $message, $headers);
    header("Location: index.php?mailsend");
}
