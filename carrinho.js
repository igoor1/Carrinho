function add(item){
     let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
     carrinho.push(item);
     localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function remove(itemID){
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter((item) => item.id !== itemID)
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
}

function getcar(){
    return JSON.parse(localStorage.getItem('carrinho'))
}

function clear(){
    localStorage.removeItem('carrinho');
}