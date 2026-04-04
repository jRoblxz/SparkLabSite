<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

require __DIR__ . '/vendor/autoload.php';


if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Método não permitido"]);
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$subject = trim($_POST['Subject'] ?? 'Contato do Portfólio');
$message = trim($_POST['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Preencha todos os campos obrigatórios."]);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Configurações do Servidor
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'joaoroblez76@gmail.com';
    
    // AQUI VAI A SENHA DE APP DO GOOGLE (Não é a senha de login!)
    $mail->Password   = 'tnpc bdcd ihrr sxcv'; 
    
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Destinatários
    $mail->setFrom('joaoroblez76@gmail.com', 'Portfólio Contato');
    $mail->addReplyTo($email, $name); // Quem preencheu o formulário
    $mail->addAddress('joaoroblez@sparklab.dev.br'); // Para onde vai o email

    // Conteúdo
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = $subject;
    $mail->Body    = "
        <h2>Novo contato do Portfólio</h2>
        <p><strong>Nome:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Assunto:</strong> {$subject}</p>
        <hr>
        <p><strong>Mensagem:</strong><br>{$message}</p>
    ";

    $mail->send();

    echo json_encode(["success" => true, "message" => "Email enviado com sucesso!"]);

} catch (Exception $e) {
    http_response_code(500);
    // Retorna o erro real do PHPMailer para ajudar no debug
    echo json_encode([
        "success" => false, 
        "message" => "Erro ao enviar: " . $mail->ErrorInfo
    ]);
}
?>