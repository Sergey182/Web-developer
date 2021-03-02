<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require '../vendor/autoload.php';
require_once 'upload.php';

function send($attachments, $message)
{
    $config = parse_ini_file('./config.ini');
    $host = $config['host'];
    $username = $config['username'];
    $password = $config['password'];
    $toEmail = $config['email'];
    $mail = new PHPMailer(true);
    $mail->CharSet = "utf-8";
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    try {
        // Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                   //Send using SMTP
        $mail->Host = $host;                              //Set the SMTP server to send through
        $mail->SMTPAuth = true;                           //Enable SMTP authentication
        $mail->Username = $username;                      //SMTP username
        $mail->Password = $password;                      //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

        //Recipients
        $mail->setFrom($username, 'Mailer');
        $mail->addAddress($toEmail);

        //Attachments
        if ($attachments != null) {
            foreach ($attachments['files']['tmp_name'] as $key => $file) {
                $mail->addAttachment($file, $attachments['files']['name'][$key]);
            }
        }

        //Content
        $mail->isHTML(true);        //Set email format to HTML
        $mail->Subject = 'Заявка с сайта';
        $mail->Body = $message;

        $mail->send();
        return true;
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        return false;
    }
}


if (!empty($_POST['name']) && !empty($_POST['email'])) {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);
    $content = "Имя: " . $name . "\nE-mail: " . $email . "\nСообщение: " . $message;
    $files = null;

    if (upload() != false) {
        $files = upload();
    }

    $isMailed = send($files, $content);
    if ($isMailed) {
        echo json_encode(array('success' => true,
            'response' => 'Письмо успешно отправлено!'));
    } else echo json_encode(array('success' => false,
        'response' => 'Не удалось отправить письмо'));

} else echo json_encode(array('success' => false,
    'response' => 'Empty request!'));
