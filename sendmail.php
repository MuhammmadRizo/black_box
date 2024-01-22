<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set the recipient email address
$to = 'odilovadiyora52@gmail.com';

// Set the email subject
$subject = 'New message from ' . $name;

// Build the email content
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Message:\n$message\n";

// Set the email headers
$email_headers = "From: $name <$email>";

// Send the email
mail($to, $subject, $email_content, $email_headers);

// Redirect to a confirmation page
header('Location: confirm.html');
?>
