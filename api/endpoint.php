<?php
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

function getorder($email, $pass){
    $conf = include('configuration.php');
    $servername = $conf['hostname'];
    $username = $conf['username'];
    $password = $conf['password'];
    $dbname = $conf['dbname'];
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    global $cfTemp;
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    if($email != null){
        $sql = "SELECT sys.Ordini.PK_ID, sys.Ordini.Nome, sys.Ordini.Cognome, sys.Ordini.Indirizzo, sys.Ordini.CAP, sys.Ordini.Domicilio, sys.Ordini.Email, sys.Utenti.PK_CF, sys.Utenti.Telefono
        FROM  sys.Ordini CROSS JOIN
                 sys.Utenti
        WHERE (sys.Ordini.Email = N'$email')";
        $ordini = array();
        if ($result = mysqli_query($conn, $sql)) {
            while ($row = mysqli_fetch_row($result)) {
                array_push($ordini, json_encode((object) [
                    'cf' => str_decryptaesgcm($row[7], $pass, "base64"),
                    'email' => $email,
                    'id' => $row[0],
                    'nome' => str_decryptaesgcm($row[1], $pass, "base64"),
                    'cognome' => str_decryptaesgcm($row[2], $pass, "base64"),
                    'indirizzo' => str_decryptaesgcm($row[3], $pass, "base64"),
                    'cap' => str_decryptaesgcm($row[4], $pass, "base64"),
                    'domicilio' => $row[5],
                    'telefono' => str_decryptaesgcm($row[8], $pass, "base64")
                ]));
              }
              return '[' . implode(",", array_unique($ordini,SORT_REGULAR)) . ']';
            mysqli_free_result($result);
          }
          

    }else{
        return "0";
    }
    mysqli_close($conn);
}

function putorder($id, $nome, $cognome, $indirizzo, $cap, $domicilio, $email){
    $conf = include('configuration.php');
    $servername = $conf['hostname'];
    $username = $conf['username'];
    $password = $conf['password'];
    $dbname = $conf['dbname'];
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    $sql = "INSERT INTO Ordini
    VALUES ('$id', '$nome', '$cognome', '$indirizzo', '$cap', '$domicilio', '$email')";

    if (mysqli_query($conn, $sql)) {
        echo "1";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>