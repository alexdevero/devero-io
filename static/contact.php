<?php

    // Only process POST requests.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      // Get email address from '.env' file in the root
      $envFile = fopen(".env","r");
      $myEmail = fgets($envFile);

      // Get the form fields and remove whitespace.
      $name = strip_tags(trim($_POST["formName"]));
      $name = str_replace(array("\r","\n"),array(" "," "),$name);
      $email = filter_var(trim($_POST["formEmail"]), FILTER_SANITIZE_EMAIL);
      $message = trim($_POST["formAdditionalMessage"]);
      $checkboxApp = isset($_POST["checkboxApp"]);
      $checkboxConsultation = isset($_POST["checkboxConsultation"]);
      $checkboxDesign = isset($_POST["checkboxDesign"]);
      $checkboxElse = isset($_POST["checkboxElse"]);
      $checkboxFrontBack = isset($_POST["checkboxFrontBack"]);
      $checkboxNewsletter = isset($_POST["formNewsletter"]);

      // Check that data was sent to the mailer.
      if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        //http_response_code(400);
        echo "Oops! There was a problem with your submission. Please complete the form and try again.";
        exit;
      }

      // Set the recipient email address.
      $recipient = "$myEmail";

      // Set the email subject.
      $subject = "Contact via DEVERO Studio from $name";

      // Build the email content.
      $email_content = "Name: $name\n";
      $email_content .= "Email: $email\n\n";
      $email_content .= "Subject: Contact via DEVERO Studio\n\n";
      $email_content .= "Want app: $checkboxApp\n";
      $email_content .= "Want consultation: $checkboxConsultation\n";
      $email_content .= "Want design: $checkboxDesign\n";
      $email_content .= "Want something else: $checkboxElse\n";
      $email_content .= "Want frontend / backend: $checkboxFrontBack\n\n";
      $email_content .= "Additional message:\n$message\n\n";
      $email_content .= "Want newsletter: $checkboxNewsletter\n\n";

      // Build the email headers.
      $email_headers = "From: $name <$email>";

      // Send the email.
      if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        //http_response_code(200);
        echo "Thank You! Your message has been sent.";
      } else {
        // Set a 500 (internal server error) response code.
        //http_response_code(500);
        echo "Oops! Something went wrong and we couldn\"t send your message.";
      }

    } else {
      // Not a POST request, set a 403 (forbidden) response code.
      //http_response_code(403);
      echo "There was a problem with your submission, please try again.";
    }

?>
