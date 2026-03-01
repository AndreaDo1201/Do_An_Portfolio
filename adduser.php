<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    $db_host = 'localhost:3306';
    $db_user = 'root';
    $db_pass = '';
    $db_name = 'da_portfolio';

    $connection = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
    $errors = array();


    $name = mysqli_real_escape_string($connection, $_POST['name']);
    if ($fname == NULL) {
        $errors[] = "Full name field is empty.";
    }

    $message = mysqli_real_escape_string($connection, $_POST['message']);
    if ($city == NULL) {
        $errors[] = "Message field is empty.";
    }

    $email = $_POST['email'];
    if ($email == NULL) {
        $errors[] = "Email field is empty.";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "\"" . $email . "\" is not a valid email address.";
    }

    $errcount = count($errors);
    if ($errcount > 0) {
        $errmsg = array();
        for ($i = 0; $i < $errcount; $i++) {
            $errmsg[] = $errors[$i];
        }
        echo json_encode(array("errors" => $errmsg));
    } else {
        $querystring = "INSERT INTO tbl_users(user_id,user_lname,user_fname,user_city,user_email) VALUES(NULL,'" . $lname . "','" . $fname . "','" . $city . "','" . $email . "')";
        $qpartner = mysqli_query($connection, $querystring);
        echo json_encode(array("message" => "Form submitted. Thank you for your interest!"));
    }
?>