<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "megansachamberlin@gmail.com";
$subject = "Contact Form";

$formcontent="From: $name \n Message: $message";


$mailheader = "From: $email \r\n";
if($email != NULL){
    mail($to, $subject, $formcontent, $mailheader);
}
echo "Thank You!"
header("Location:last.html");
?>