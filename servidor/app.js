const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.post('/login', (req, res) => {
    console.log('chegou requisição')
    const userLogin = req.body;
    const accounts = [{username:"isaac.medeiros.704" , password:"123456",name: "Isaac Lopes de Medeiros"},{username: "fernanda.127" , password: "654321" , name:"Fernanda Gonçalves"}]
    const user = accounts.find(function (account){
        return account.username == userLogin.username && account.password == userLogin.password
    })
    console.log(user)
    if(user){
        res.send({name: user.name , username: user.username})
        return
    }
    res.status(401).send({message: "Usuario ou senha invalido"})
})

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})