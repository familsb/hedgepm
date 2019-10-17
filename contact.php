<?php

/*
 * Script for sending E-Mail messages.
 * 
 * Note: Please edit $sendTo variable value to your email address.
 * 
 */

// please change this to your E-Mail address
$sendTo = "info@pixel-industry.com";
$recaptcha = true; // set to false to disable captcha
$secret_key = "6Ld4VykTAAAAALBRKS-4W13baxelLMjkFOOIytyS";

$action = $_POST['action'];

if ( $action == 'request-quote' ) {

    $firstname = strip_tags( $_POST['form_data'][0]['First Name'] );
    $lastname = strip_tags( $_POST['form_data'][0]['Last Name'] );
    $phone = strip_tags( $_POST['form_data'][0]['Phone'] );
    $email = strip_tags( $_POST['form_data'][0]['Email'] );

    // you can change default subject for Contact E-Mail here
    $subject = 'E-Mail from: ' . $firstname . ' ' . $lastname;

    $message = "First Name: " . $firstname . "\r\n"
    		. "Last Name: " . $lastname . "\r\n"
    		. "Phone: " . $phone . "\r\n"
                . "Email: " . $email . "\r\n";

    if ( $firstname == "" || $lastname == "" || $phone == "" || $email == "" ) {
        echo "There was problem while sending E-Mail. Please verify entered data and try again!";
        exit();
    }

    $headers = 'From: ' . $firstname . ' ' . $lastname . '<' . $email . ">\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

} else if ( $action == 'newsletter' ) {

	$recaptcha = false; // set to false to disable captcha
	$email = strip_tags( $_POST['form_data'][0]['Email'] );

	// you can change default subject for Contact E-Mail here
    $subject = 'Newsletter subscription: ' . $email;

    $message = "Email: " . $email . "\r\n";

    if ( $email == "") {
        echo "There was problem while sending E-Mail. Please verify entered data and try again!";
        exit();
    }

    $headers = 'From: Newsletter subscription<' . $email . ">\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

} else if ( $action == 'contact-us' ) {

    $name = strip_tags( $_POST['form_data'][0]['Name'] );
    $email = strip_tags( $_POST['form_data'][0]['Email'] );
    $phone = strip_tags( $_POST['form_data'][0]['Phone'] );
    $subject = strip_tags( $_POST['form_data'][0]['Subject'] );
    $message = strip_tags( $_POST['form_data'][0]['Message'] );

    $message = "Name: " . $name . "\r\n"
            . "Email: " . $email . "\r\n"
            . "Phone: " . $phone . "\r\n"
            . "Message: " . $message . "\r\n";

    if ( $name == "" || $email == "" || $phone == "" || $subject == "" || $message == "" ) {
        echo "There was problem while sending E-Mail. Please verify entered data and try again!";
        exit();
    }

    $headers = 'From: ' . $name . '<' . $email . ">\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

} else if ( $action == 'contact-us-2' ) {

    $name = strip_tags( $_POST['form_data'][0]['Name'] );
    $email = strip_tags( $_POST['form_data'][0]['Email'] );
    $phone = strip_tags( $_POST['form_data'][0]['Phone'] );
    $subject = strip_tags( $_POST['form_data'][0]['Subject'] );
    $message = strip_tags( $_POST['form_data'][0]['Message'] );

    $message = "Name: " . $name . "\r\n"
            . "Email: " . $email . "\r\n"
            . "Phone: " . $phone . "\r\n"
            . "Message: " . $message . "\r\n";

    if ( $name == "" || $email == "" || $phone == "" || $subject == "" || $message == "" ) {
        echo "There was problem while sending E-Mail. Please verify entered data and try again!";
        exit();
    }

    $headers = 'From: ' . $name . '<' . $email . ">\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

} else if ( $action == 'job-application' ) {

    $firstname = strip_tags( $_POST['form_data'][0]['First Name'] );
    $lastname = strip_tags( $_POST['form_data'][0]['Last Name'] );
    $email = strip_tags( $_POST['form_data'][0]['Email'] );
    $address = strip_tags( $_POST['form_data'][0]['Address'] );
    $city = strip_tags( $_POST['form_data'][0]['City'] );
    $zip = strip_tags( $_POST['form_data'][0]['Zip'] );
    $state = strip_tags( $_POST['form_data'][0]['State'] );
    $country = strip_tags( $_POST['form_data'][0]['Country'] );
    $message = strip_tags( $_POST['form_data'][0]['Message'] );

    // you can change default subject for Contact E-Mail here
    $subject = 'Job application: ' . $email;

    $message = "First Name: " . $firstname . "\r\n"
    		. "Last Name: " . $lastname . "\r\n"
            . "Email: " . $email . "\r\n"
            . "Address: " . $address . "\r\n"
            . "City: " . $city . "\r\n"
            . "Zip: " . $zip . "\r\n"
            . "State: " . $state . "\r\n"
            . "Country: " . $country . "\r\n"
            . "Message: " . $message . "\r\n";

    if ( $firstname == "" || $lastname == "" || $email == "" || $address == "" || $city == "" || $zip == "" || $state == "" || $country == "" || $message == "" ) {
        echo "There was problem while sending E-Mail. Please verify entered data and try again!";
        exit();
    }

    $headers = 'From: ' . $firstname . ' ' .$lastname . '<' . $email . ">\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

} else if ( $action == 'comment-form' ) {

    $name = strip_tags( $_POST['form_data'][0]['Name'] );
    $email = strip_tags( $_POST['form_data'][0]['Email'] );
    $message = strip_tags( $_POST['form_data'][0]['Message'] );

    $message = "Name: " . $name . "\r\n"
            . "Email: " . $email . "\r\n"
            . "Message: " . $message . "\r\n";

    if ( $name == "" || $email == "" || $message == "" ) {
        echo "There was problem while sending E-Mail. Please verify entered data and try again!";
        exit();
    }

    // you can change default subject for Comment E-Mail
    $subject = 'New page comment from: ' . $name;

    $headers = 'From: ' . $name . '<' . $email . ">\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

} 

// reCaptcha
if ( $recaptcha ) {
    if ( isset( $_POST['form_data'][0]['Recaptcha'] ) )
        $captcha = strip_tags( $_POST['form_data'][0]['Recaptcha'] );

    if ( !$captcha ) {
        echo 'Please check the the captcha form.';
        exit;
    }

    $request_url = "https://www.google.com/recaptcha/api/siteverify?secret={$secret_key}&response=" . $captcha . "&remoteip=" . $_SERVER['REMOTE_ADDR'];
    $response = json_decode(file_get_contents($request_url), true);

    if ( $response['success'] == false ) {
        echo 'Captcha is not correct. Are you human?';
        exit;
    }
}

/**
 * Validate form email
 * @param  email
 * @return filtered data, or FALSE if the filter fails
 */
function valid_email($email) {
    return !!filter_var($email, FILTER_VALIDATE_EMAIL);
}

if ( valid_email( $email ) ) {
	if ( mail( $sendTo, $subject, $message, $headers ) ) {
	    echo "Message sent succesfully.";
	} else {
	    echo "There was problem while sending E-Mail.";
	}
} else {
	echo "Please enter valid email address.";
}

?>