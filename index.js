const express = require('express');
const path = require('path');
const carrinho = require('./carrinho.js');
const con = require('./conexao.js');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.sendFile("/index.html", {root: __dirname})
});

app.post('/add', (req,res)=>{
    const {vinilID, qntd} = req.body;

    const item = {
        id:vinilID,
        qntd,
    }

    carrinho.add(item);
});

app.get('/visualizar', (req, res) =>{
    const itemscar = carrinho.getcar();
    res.json(itemscar);
});
app.get('/telaFinal', (req, res)=>{
    res.sendFile("/finalizar.html", {root: __dirname})
});

app.post('/finalizar', (req, res) =>{
    const itenscar = carrinho.getcar();

    
    con.isertPedido();
    con.insertItem()

    carrinho.clear();
})


app.listen(3000);