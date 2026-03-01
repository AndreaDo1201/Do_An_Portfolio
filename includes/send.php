<?php
ob_start();
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(0);


function send_json($data) {
    ob_end_clean();
    if (!headers_sent()) {
        header('Content-Type: application/json; charset=UTF-8');
    }
    echo json_encode($data);
    exit;
}


register_shutdown_function(function() {
    $err = error_get_last();
    if ($err && in_array($err['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR])) {
        ob_end_clean();
        if (!headers_sent()) {
            header('Content-Type: application/json; charset=UTF-8');
        }
        echo json_encode(['errors' => ['A server error occurred. Please try again.']]);
        exit;
    }
});

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send_json(['errors' => ['Method not allowed.']]);
}

require_once __DIR__ . '/db_connect.php';

$name    = trim(strip_tags($_POST['name']    ?? ''));
$email   = filter_var(trim($_POST['email']   ?? ''), FILTER_VALIDATE_EMAIL);
$message = trim(strip_tags($_POST['message'] ?? ''));

$errors = [];
if ($name === '')    $errors[] = 'Please enter your full name.';
if (!$email)         $errors[] = 'Please enter a valid email address.';
if ($message === '') $errors[] = 'Please enter a message.';

if (!empty($errors)) {
    send_json(['errors' => $errors]);
}

$stmt = mysqli_prepare($connection, 'INSERT INTO tbl_contact (username, email, message) VALUES (?, ?, ?)');
mysqli_stmt_bind_param($stmt, 'sss', $name, $email, $message);
$saved = mysqli_stmt_execute($stmt);
mysqli_stmt_close($stmt);
mysqli_close($connection);

send_json($saved
    ? ['message' => "Thank you, {$name}! Your message has been received."]
    : ['errors'  => ['Could not save your message. Please try again.']]
);