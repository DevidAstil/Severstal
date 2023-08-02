<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
  if (isset($_POST['utm_source'])) {$utm_source = $_POST['utm_source'];}
if (isset($_POST['utm_medium'])) {$utm_medium = $_POST['utm_medium'];}
if (isset($_POST['utm_campaign'])) {$utm_campaign = $_POST['utm_campaign'];}
  if (isset($_POST['utm_content'])) {$utm_content = $_POST['utm_content'];}
if (isset($_POST['utm_term'])) {$utm_term = $_POST['utm_term'];}

$to = "DevidAstil79@yandex.ru"; /*Укажите ваш адрес электоронной почты*/
$headers = "Content-type: text/plain; charset = utf-8"."\r\n".           "From:info@factum.agency";
$subject = "Заявка с вашего сайта im.factum.agency";
$message = "Имя пославшего: ".$name."\n Телефон: ".$phone."\ne-mail ".$utm_source."\nutm_medium: ".$utm_medium."\nutm_campaign: ".$utm_campaign."\nutm_content: ".$utm_content."\nutm_term: ".$utm_term."";
$send = mail ($to, $subject, $message, $headers);
header('Location: /thanks-page.html');
?>