<?php

include('./aes.php');
include('endpoint.php');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

$type_request = $_GET["type"];

switch ($type_request) {
    case 'getuser':
        $email = $_GET["email"];
        echo getuser($email);
        break;
    case 'getuserbypass':
        $email = $_GET["email"];
        $pass = $_GET["password"];
        echo getuserbypass($email, $pass);
        break;
    case 'adduser':
        adduser();
        break;
    case 'login':
        $email = $_GET["email"];
        $passCheck = $_GET["password"];
        $userall = json_decode(getuser($email));
        if(is_null($userall->{'pass'})){
            echo "0";   
        }else{
            if (password_verify($passCheck, $userall->{'pass'})) {
                echo '1';
            } else {
                echo '0';
            }
        }
        break;
    case 'decrypt':
    
        $email = $_GET["email"];
        $key = $_GET["key"];
        echo decrypt($key, $email);
        break;
    case 'getorderbyid':
    
        $email = $_GET["email"];
        $passCheck = $_GET["password"];
        $id = $_GET["id"];
        echo getorderbyid($email, $passCheck, $id);
        break;
    case 'getorder':
    
        $email = $_GET["email"];
        $passCheck = $_GET["password"];
        echo getorder($email, $passCheck);
        break;
    case 'putorder':
    
        $conf = include('configuration.php');
        $rawdata = file_get_contents("php://input");
        $decoded = json_decode($rawdata);
        putorder($decoded->{"id"}, str_encryptaesgcm($decoded->{"nome"}, $conf['password'], "base64"), 
        str_encryptaesgcm($decoded->{"cognome"}, $conf['password'], "base64"), str_encryptaesgcm($decoded->{"indirizzo"},$conf['password'], "base64"), 
        str_encryptaesgcm($decoded->{"cap"}, $conf['password'], "base64"), $decoded->{"domicilio"}, $decoded->{"email"});
        break;
    default:
        echo "Route doesn't exist";
        break;
}
?>