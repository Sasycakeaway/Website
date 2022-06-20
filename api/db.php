<?php

include('./aes.php');

header("Access-Control-Allow-Origin: *");
function getuser($email){
    $conf = include('configuration.php');
    $servername = $conf['hostname'];
    $username = $conf['username'];
    $password = $conf['password'];
    $dbname = $conf['dbname'];
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    if($email != null){
        $sql = "SELECT * FROM sys.Utenti WHERE PK_Email = \"$email\"";
        if ($result = mysqli_query($conn, $sql)) {
          while ($row = mysqli_fetch_row($result)) {
            $user = (object) [
                'cf' => $row[0],
                'nascita' => $row[1],
                'telefono' => $row[2],
                'email' => $row[3],
                'pass' =>  $row[4]
            ];
            $userRsp = json_encode($user);
            return $userRsp;
          }
          mysqli_free_result($result);
        }
    }else{
        return "0";
    }
    mysqli_close($conn);
}

function adduser(){
    $conf = include('configuration.php');
    $servername = $conf['hostname'];
    $username = $conf['username'];
    $password = $conf['password'];
    $dbname = $conf['dbname'];
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    $rawdata = file_get_contents("php://input");
    $decoded = json_decode($rawdata);
    $pass = password_hash($decoded->{'password'}, PASSWORD_ARGON2I);    
    $email = $decoded->{'email'};
    $telefono = str_encryptaesgcm($decoded->{'telefono'}, $conf['password'], "base64");
    $cf = str_encryptaesgcm($decoded->{'cf'}, $conf['password'], "base64");
    $nascita = str_encryptaesgcm($decoded->{'nascita'}, $conf['password'], "base64");
    if(is_null(getuser($email))){
        $sql = "INSERT INTO Utenti
            VALUES ('$cf', '$nascita', '$telefono', '$email', '$pass')";
    
        if (mysqli_query($conn, $sql)) {
            echo "1";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }else{
        echo "0";
    }
}

function decrypt($pass, $email){
    $user = json_decode(getuser($email));
    $user_decrypt = (object) [
        'cf' => str_decryptaesgcm($user->{'cf'}, $pass, "base64"),
        'nascita' => str_decryptaesgcm($user->{'nascita'}, $pass, "base64"),
        'telefono' => str_decryptaesgcm($user->{'telefono'}, $pass, "base64"),
        'email' => $user->{'email'}
    ]; 
    return json_encode($user_decrypt);
}
$type_request = $_GET["type"];

switch ($type_request) {
    case 'get':
        $email = $_GET["email"];
        echo getuser($email);
        break;
    case 'put':
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
    default:
        echo "Route doesn't exist";
        break;
}
?>