<?php
     $name = $_POST["name"];
    $visitor_email= $_POST["email"];
    $message= $_POST["message"];
    $subject= $_POST["subject"];

    $emial_from = "infosuper90@gmail.com"
    $email_subject = "New from submission";
    $emial_body = "User Name: $name \r\n",
                    "User Email: $visitor_email.\n)",
                    "Subject: $subject.\n",
                    "User Message: $message .\n";

     
     $to = 'sumantpandit993127@gmail.com';
    
     $headers = "From: $email_from \r\n";
     $headers .= "Reply-To: $visitor_email \r\n";\


     $message ='<table style="width:100%">
        <tr>
            <td>'.$name.'  '.$subject.'</td>
        </tr>
        <tr><td>Email: '.$email.'</td></tr>
        <tr><td>phone: '.$subject.'</td></tr>
        <tr><td>Text: '.$message.'</td></tr>
    </table>';

     if (@mail($to, $email, $message, $headers))
    {
         echo 'Your message has been sent.';
    } else {
         echo 'failed';
    }
?>
