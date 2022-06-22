// Import library
import mysql from 'mysql2';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import fs from 'fs';

// Init express app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors());
app.use(helmet());
app.use(compression());
const port = 3001;

// Read credential for SQL and cipher
let user, pass, host, dbname;
try {
    const data = fs.readFileSync('./config.json', 'utf8');
    let dati = JSON.parse(data);
    user = dati.username;
    pass = dati.password;
    dbname = dati.dbname;
    host = dati.host;
  } catch (err) {
    console.error(err);
  }

// Cipher part
const cipher = salt => {
    try {
        const textToChars = text => text.split('').map(c => c.charCodeAt(0));
        const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
        const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
    
        return text => text.split('')
          .map(textToChars)
          .map(applySaltToChar)
          .map(byteHex)
          .join('');
    } catch (error) {
        console.error(error);
        return "0"
    }

}
    
const decipher = salt => {
    try {
        const textToChars = text => text.split('').map(c => c.charCodeAt(0));
        const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
        return encoded => encoded.match(/.{1,2}/g)
          .map(hex => parseInt(hex, 16))
          .map(applySaltToChar)
          .map(charCode => String.fromCharCode(charCode))
          .join('');
    } catch (error) {
        console.log(error);
        return "";
    }

}
const myCipher = cipher(pass);
const myDecipher = decipher(pass);

// Connect to DB
const connection = mysql.createConnection({
  host: host,
  user: user,
  database: dbname,
  password: pass
});

// Get all user record with cipher
app.get("/getuser/:id", (req, res) => {
    try {
        console.log(req.params.id);
        connection.query(
            `SELECT * FROM sys.Utenti WHERE PK_Email = "${req.params.id}"`,
            function(err, results, fields) {
                if(err){
                    console.log(err);
                }else{
                    res.send(results);
                }
              
            }
          );
    } catch (error) {
        console.log(error);
        res.status(500).send(JSON.stringify({status: "0"}));
    }
   
});

// Add user to DB
app.post("/adduser", (req, res) => {

    try {
        let cf = myCipher(req.body.cf);
        let nascita = myCipher(req.body.nascita);
        let telefono = myCipher(req.body.telefono);
        let pass = req.body.password;
        connection.query(
            `INSERT INTO Utenti
            VALUES ('${cf}', '${nascita}', '${telefono}', '${req.body.email}', '${pass}')`,
            function(err, results, fields) {
                if(err){
                    console.log(err);
                    res.send(JSON.stringify({status: "0"}));
                }else{
                    res.send(JSON.stringify({status: "1"}));
                }
              
            }
          );
    } catch (error) {
        console.log(error);
        res.status(500).send(JSON.stringify({status: "1"}));
    }

});

// Login process endpoint
app.post("/login", (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        connection.query(
            `SELECT * FROM sys.Utenti WHERE PK_Email = "${email}"`,
            function(err, results, fields) {
                if(err){
                    console.log(err);
                }else{
                    if(results.length == 0){
                        res.send(JSON.stringify({status: "0"}));
                    }else{
                        if(results[0].PK_Password == password){
                            res.send(JSON.stringify({status: "1"}));
                        }else{
                            res.send(JSON.stringify({status: "0"}));
                        }
                    }
                
                }
              
            }
          );
    } catch (error) {
        console.log(error);
        res.status(500).send(JSON.stringify({status:"1"}))
    }
   
});

// Get user record decrypted if user pass is correct
app.post("/getuserbypass", (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        connection.query(
            `SELECT * FROM sys.Utenti WHERE PK_Email = "${email}"`,
            function(err, results, fields) {
                if(err){
                    console.log(err);
                }else{
                    if(results[0].PK_Password == password){
                        let cf = myDecipher(results[0].PK_CF);
                        let nascita = myDecipher(results[0].Nascita);
                        let telefono = myDecipher(results[0].Telefono);
                        res.send(JSON.stringify({
                            cf: cf,
                            nascita: nascita,
                            telefono: telefono
                        }))
                    }else{
                        res.send(JSON.stringify({status: "0"}));
                    }
                }
              
            }
          );
    } catch (error) {
        console.log(error);
        res.status(500).send(JSON.stringify({status: "0"}))
    }
 
})

// Get all orders from an email crypted
app.post("/getorders", (req, res) => {
    try {
        connection.query(
            `CALL GetOrderbyEmail('${req.body.email}')`,
            function(err, results, fields) {
                if(err){
                    console.log(err);
                    res.send(JSON.stringify({status: "0"}));
                }else{
                    console.log(results);
                    res.send(JSON.stringify(results));
                }
              
            }
          );
    } catch (error) {
        res.status(500).send(JSON.stringify({status:1}))
        console.log(error);
    }

});


// Get orders decrypted if pass is correct
app.post("/getordersbypass", (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        connection.query(
            `SELECT * FROM sys.Utenti WHERE PK_Email = "${email}"`,
            function(err, results, fields) {
                if(err){
                    res.send(JSON.stringify({status: 0}));
                    console.log(err);
                }else{
                    if(results.length != 0){
                    if(results[0].PK_Password == password){
                        connection.query(
                            `CALL GetOrderbyEmail('${req.body.email}')`,
                            function(err, results, fields) {
                                if(err){
                                    res.send(JSON.stringify({status: 0}));
                                    console.log(err);
                                }else{
                                    console.log(results[0][0]);
                                    if(results[0].length == 0){
                                        res.send(JSON.stringify({}));
                                    }else{
                                        res.send(JSON.stringify({
                                            id: results[0][0].PK_ID,
                                            nome: myDecipher(results[0][0].Nome),
                                            cognome: myDecipher(results[0][0].Cognome),
                                            indirizzo: myDecipher(results[0][0].Indirizzo),
                                            cap: myDecipher(results[0][0].CAP),
                                            domicilio: myDecipher(results[0][0].Domicilio),
                                            totale: results[0][0].Totale
                                        }));
                                    }

                                }
                              
                            }
                          );
                    }else{
                        res.send(JSON.stringify({status: "0"}));
                    }
                }else{
                    res.send(JSON.stringify({}));
                }
                }
            }
          );
    } catch (error) {
        res.send(JSON.stringify({status: "0"}));
        console.log(error);
    }
   

});

// Add order to DB
app.post("/addorder", (req, res) => {
    try {

        let email = req.body.email;
        let password = req.body.password;
        let id = req.body.id;
        let nome = myCipher(req.body.nome);
        let cognome = myCipher(req.body.cognome);
        let indirizzo = myCipher(req.body.indirizzo);
        let cap = myCipher(req.body.cap);
        let domicilio = myCipher(req.body.domicilio);
        let totale = req.body.totale;

        connection.query(
            `SELECT * FROM sys.Utenti WHERE PK_Email = "${email}"`,
            function(err, results, fields) {
                if(err){
                    res.send(JSON.stringify({status: 0}));
                    console.log(err);
                }else{
                    if(results[0].PK_Password == password){
                        connection.query(
                            `INSERT INTO Ordini
                            VALUES ('${id}', '${nome}', '${cognome}', '${indirizzo}', '${cap}', '${domicilio}', '${email}', '${totale}')`,
                            function(err, results, fields) {
                                if(err){
                                    res.send(JSON.stringify({status: "0"}));
                                    console.log(err);
                                }else{
                                    res.send(JSON.stringify({status: "1"}));
                                }
                              
                            }
                          );
                    }else{
                        res.send(JSON.stringify({status: "0"}));
                    }
                }
              
            }
          );
    } catch (error) {
        res.send(JSON.stringify({status: "0"}));
        console.log(error);
    }
});

app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(500).send('Server error');
  });

  
app.use(function(req, res, next) {
    res.status(404).send('404 not found');
});

app.listen(port, () => {
    console.log(`Sasy's cake away listening on port ${port}`);
});