'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const md5 = require('md5')
const http = require('http');

const app = express();
const port = process.env.port || 3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const publicKey = '88d3405ee123d430b786d88fbee973e5'
const privateKey = 'd39f5680c5ba6caca9d7bcd547e86c2d'
const user = 'B_bank_uni_usr'
const password = 'WEHaeSvieyTkuSd2'
var formatted = Math.floor(new Date() / 1000)
var encrypt = md5(formatted + publicKey + privateKey)
var auth = 'Basic ' + new Buffer(user + ':' + password).toString('base64');



/*app.get('/Unibanca/:user', (req, res) => {
 
    info = traerInfo(`${req.params.user}`)
    //res.send({ message: `Hola ${req.params.user}!` })
    console.log(info);
    res.send(info)
})*/



app.get('/Unibanca/:id', (req, res) => {
    var direccion = '/AlphaBank/Data.svc/GetCustomerInfo/' + `${req.params.id}`;
    var options = {
        host: '192.190.42.100',
        port: 80,
        path: direccion,
        method: 'GET',
        headers: {
            'timestamp': formatted,
            'publicKey': publicKey,
            'hash': encrypt,
            'Authorization': auth
        }
    }
    var request = http.request(options, function (resq) {
        var buffer = "", 
        data,
        route;
        resq.on('data', function (chunk) {
            buffer += chunk
        })
        resq.on('end', function () {
            //console.log(buffer)
            //console.log("\n")
            if(buffer == undefined){
                res.send('sin datos')
            }else{
                data = JSON.parse(buffer)
                res.send(data)
            }
            
        })
        resq.on('err', function (err) {
            console.log('ocurrio un error' + err)
        })
    }).end()
    
})

app.listen(port, () =>{

})