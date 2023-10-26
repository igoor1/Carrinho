const mysql = require('mysql2')

const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "loja"  
})

function isertPedido(){
    const query = 'INSERT INTO pedidos SET ?';
    connection.query(query, pedido);

}

function insertItem(itens){
    const query = 'INSERT INTO itenPedido (qntd,subtotal pedidoID, vinilID) VALUES ?';
    connection.query(query,[itens]);
}

connection.connect()


