<?php
    // Error reporting, turn off when we launch
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    // to check if the form is submitted
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        //This page should not be accessed directly. Need to submit the form.
        // echo "error; you need to submit the form!";
        $recipent = "notmyemail@example.com";// put your email address here
        $subject = "inquiry from mydomain.com website";
        // test to see if form data is being received from the form in the contact.php page
        $first_raw = $_POST['first_name'] ?? '';// ??'' is used to check for null coalescing operator to prevent undefined index notice
        $last_raw = $_POST['last_name'] ?? '';
        $email_raw = $_POST['email'] ?? '';
        $message_raw = $_POST['message'] ?? '';

        // for testing purposes, echo the data to the screen
        echo "<p> First Name: " . $first_raw . "</p>";
        echo "<p> Last Name: " . $last_raw . "</p>";
        echo "<p> Email: " . $email_raw . "</p>";
        echo "<p> Message: " . $message_raw . "</p>";

        $first = trim(strip_tags($first_raw));// sanitize the input to remove wide space and html tags 
        $last = trim(strip_tags($last_raw));
        $visitor_name = trim($first . " " . $last);// concatenate first and last name
        $email_clean = str_replace(["\r", "\n", "%0a", "%0d"], '', trim($email_raw));// prevent email header injection (\r \n %0a %0d old and new line breaks)
        $visitor_email = filter_var($email_clean, FILTER_VALIDATE_EMAIL);// validate email address format to check if its writen correctly
        $message = trim(strip_tags($message_raw));

        $fail = [];// initialize an array to hold validation error messages
        // validate the form data is empty or not
        if($first === '') {
            $fail[] = "Please enter your first name.";
        }
        if($last === '') {
            $fail[] = "Please enter your last name.";
        }
        if(!$visitor_email) {//to check if email is valid and not empty
            $fail[] = "Please enter a valid email address.";
        }
        if($message === '') {
            $fail[] = "Please enter your message.";
        }
        if(!empty($fail)) {
            // there are validation errors
            echo "<p><strong>Please fill out the the form:</strong></p>";
            echo "<p>Please fix :" . htmlspecialchars(implode(", ", $fail), ENT_QUOTES, 'UTF-8') . "</p>";// output the errors safely 
            exit;// stop further execution if tthe above validation fails or run stops the script here
        }

        $emailBody = "you recived a new inquiry : \r\n\r\n";
        $emailBody .= "Name: {$visitor_name}\r\n";// .= is used to concatenate or add to the strings and {} can also be used to parse variables to add or embed variables within double quoted strings
        $emailBody .= "Email: {$visitor_email}\r\n\r\n";
        $emailBody .= "Message: \r\n{$message}\r\n";

        $fromAddress = "no-reply@example.com";// put your domain name here to avoid being marked as spam or use the visitor email address

        $headers = "From: your domain name <{$fromAddress}>\r\n"; // Sender name and address
        $headers .= "Reply-To: {$visitor_email}\r\n"; // Where replies will go
        $headers .= "MIME-Version: 1.0\r\n"; // Email standard version
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n"; // Plain text email
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n"; // Identifies PHP mailer

        $sent = mail($recipent, $subject, $emailBody, $headers);// send the email

        if($sent) {
            $thankyou = urlencode("thankyou you for contacting me I will get back to you shortly." . htmlspecialchars($visitor_name, ENT_QUOTES, 'UTF-8') . "you'll get a response soon!");
            header("Location: ../contact.php?msg=$thankyou");
            exit();
        }else {
            $thankyou = urlencode("sorry there was a problem sending your message. Please try again later.");
            header("Location: ../contact.php?msg=$thankyou");
            exit();
        }

        


    }else{
        // add redirect to thank you page
        // header("Location: ../thankyou.php");
        // exit();
        echo "<p> these are not the droids you are looking for ....</p>";
    }

    // retrieve the form data

    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // create the email

    $to = "
?>