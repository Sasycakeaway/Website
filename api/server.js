
// Import library
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import fs from 'fs';
import express from 'express';
import hpp from 'hpp';
const port = 80;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors());
app.use(hpp());
app.use(helmet());
app.use(compression());

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
        connection.query(
            `CALL sys.GetUserbyEmail('${req.params.id}')`,
            function(err, results, fields) {
                if(err){
                    console.log(err);
                }else{
                    res.send(results[0][0]);
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
        console.log(cf);
        let nascita = myCipher(req.body.nascita);
        console.log(nascita);
        let telefono = myCipher(req.body.telefono);
        console.log(telefono);
        let pass = req.body.password;
        console.log(pass);
        connection.query(
            `CALL Adduser('${cf}', '${nascita}', '${telefono}', '${req.body.email}', '${pass}', '${req.body.timestamp}')`,
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
            `CALL sys.GetUserbyEmail('${email}')`,
            function(err, results, fields) {
                if(err){
                    console.log(err);
                }else{
                    if(results[0].length == 0){
                        res.send(JSON.stringify({status: "0"}));
                    }else{
                        if(results[0][0].PK_Password == password){
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
            `CALL sys.GetUserbyEmail('${email}')`,
            function(err, results, fields) {
                if(err){
                    console.log(err);
                }else{
                    if(results[0][0].PK_Password == password){
                        let cf = myDecipher(results[0][0].PK_CF);
                        let nascita = myDecipher(results[0][0].Nascita);
                        let telefono = myDecipher(results[0][0].Telefono);
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
            `CALL sys.GetUserbyEmail('${email}')`,
            function(err, results, fields) {
                if(err){
                    res.send(JSON.stringify({status: 0}));
                    console.log(err);
                }else{
                    if(results[0].length != 0){
                    if(results[0][0].PK_Password == password){
                        connection.query(
                            `CALL GetOrderbyEmail('${req.body.email}')`,
                            function(err, results, fields) {
                                if(err){
                                    res.send(JSON.stringify({status: 0}));
                                    console.log(err);
                                }else{
                                    if(results[0].length == 0){
                                        res.send(JSON.stringify([]));
                                    }else{
                                        let orders = [];
                                        results[0].forEach(order => {
                                            orders.push({
                                                id: order.PK_ID,
                                                nome: myDecipher(order.Nome),
                                                cognome: myDecipher(order.Cognome),
                                                indirizzo: myDecipher(order.Indirizzo),
                                                cap: myDecipher(order.CAP),
                                                domicilio: myDecipher(order.Domicilio),
                                                totale: order.Totale,
                                                cart: order.Cart,
                                                timestamp: order.Timestamp
                                            })
                                        });
                                        res.send(JSON.stringify(orders));
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
    console.log(req.body);
    try {
        console.log(req.body);
        console.log(req.body.email);
        let email = req.body.email;
        let password = req.body.password;
        let id = req.body.id;
        let nome = myCipher(req.body.nome);
        let cognome = myCipher(req.body.cognome);
        let indirizzo = myCipher(req.body.indirizzo);
        let cap = myCipher(req.body.cap);
        let domicilio = myCipher(req.body.domicilio);
        let totale = req.body.totale;
        let cart = JSON.stringify(req.body.cart);
        let timestamp = req.body.timestamp;
        connection.query(
            `CALL sys.GetUserbyEmail('${email}')`,
            function(err, results, fields) {
                if(err){
                    res.send(JSON.stringify({status: 0}));
                    console.log(err);
                }else{
                    if(results[0].length == 0){
                        res.send(JSON.stringify({status: "0"}));
                    }else{
                        if(results[0][0].PK_Password == password){
                            connection.query(
                                `CALL Addorder('${id}', '${nome}', '${cognome}', '${indirizzo}', '${cap}', '${domicilio}', '${email}', '${totale}', '${cart}', '${timestamp}')`,
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
                            console.log("OKN");
                            res.send(JSON.stringify({status: "0"}));
                        }
                    }
                   
                }
              
            }
          );
    } catch (error) {
        res.send(JSON.stringify({status: "0"}));
        console.log(error);
    }
});

app.post("/newpass", (req, res) => {
    try {
        let email = req.body.email;
        let uuid = req.body.uuid;
        connection.query(
            `CALL sys.GetUserbyEmail('${email}')`,
            function(err, results, fields) {
                if(err){
                    console.log(err);
                }else{
                    if(results[0].length == 0){
                        res.send(JSON.stringify({status: "0"}));
                    }else{
                        connection.query(`CALL sys.NewPass('${email}', '${uuid}')`, function(err, results, fields){
                            if(err){
                                console.error(err);
                                res.send(JSON.stringify({status: "0"}));
                            }else{
                                res.send(JSON.stringify({status: "1"}))
                            }
                        });
                    }
                }
              
            }
          );
    } catch (error) {
        console.log(error);
        res.status(500).send(JSON.stringify({status: "0"}))
    }
 
});

app.post("/changepass", (req, res) => {
    let email = req.body.email;
    let pass = req.body.password;
    let uuid = req.body.uuid;
    connection.query(`SELECT * FROM sys.RecoveryPassword WHERE UUID = '${uuid}'`, function(err,results, fields) {
        if(err){
            res.send(JSON.stringify({status: "0"}));
        }else{
            connection.query(`CALL sys.GetPassChange('${uuid}', '${email}')`, function(err, results, fields) {
                if(err){
                    console.log(err);
                    res.send(JSON.stringify({status: "0"}));
                }else{
                    if(results[0].length == 0){
                        res.send(JSON.stringify({status: "0"}));
                    }else{
                        connection.query(`CALL sys.UpdatePass('${email}', '${pass}', '${uuid}')`, function(err, results, fields) {
                            if(err){
                                console.log(err);
                                res.send(JSON.stringify({status: "0"}));
                            }else{
                                if(results.affectedRows == 0){
                                    res.send(JSON.stringify({status: "0"}));
                                }else{
                                    res.send(JSON.stringify({status: "1"}));
                                }
                                
                            }
                        });
                    }
                    
                }
            });

        }
    })
});

app.post("/deleterequest", (req, res) => {
    let uuid = req.body.id;
    connection.query(`CALL RemoveRequest('${uuid}')`, function(err, results, fields) {
        if(err){
            console.log(err);
        }else{
            if(results.affectedRows != 0){
                res.send(JSON.stringify({status: "1"}));
            }else{
                res.send(JSON.stringify({status: "0"}));
            }
            
        }
    });
});

app.get("/allordertime", (req, res) => {
  connection.query(
    `CALL sys.GetOrderTime()`,
    function(err, results, fields) {
        if(err){
            console.log(err);
            res.send([]);
        }else{
            res.send(results[0]);
        }
      
    }
  );
});

app.get("/alluserstime", (req, res) => {
  connection.query(
    `CALL sys.GetUsersTime()`,
    function(err, results, fields) {
        if(err){
            console.log(err);
            res.send([]);
        }else{
            res.send(results[0]);
        }
      
    }
  );
});


app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(500).send('Server error');
});


app.use(function(req, res, next) {
  res.status(404).send('404 not found');
});

app.listen(port, () => console.log("Sasy's cake away server is running on port " + port))