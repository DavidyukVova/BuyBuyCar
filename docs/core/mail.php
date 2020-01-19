<?php
//письмо
$message = '';
$message .= '<h1>Заказ з сайту BuyBuyCar</h1>';
$message .= '<p>Name: '.$_POST['name'].'</p>';
$message .= '<p>Phone: '.$_POST['phone'].'</p>';
$message .= '<p>Article: '.$_POST['article'].'</p>';

$to = 'vovkadavidyuk@gmail.com'.',';
$to .=$_POST['email'];
$spectext = '<!DOCTYPE HTML><html><head><title>Заказ</title></head><body>';
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$m = mail($to, 'Massage first form', $spectext.$message.'</body></html>', $headers);
if ($m) {echo 1;} else {echo 0;}