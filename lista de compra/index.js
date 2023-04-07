const inputItem = document.getElementById("inputItem");
const inputQuantidade = document.getElementById("inputQuantidade");
const inputPreco = document.getElementById("inputPreco");
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");
const lista = document.getElementById("lista");

let listaItems = [];

const formatarMoeda = (valor) => {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const redesenhaLista = (lista, listaItems) => {
  lista.querySelector("tbody").innerHTML = "";
  for (let index = 0; index < listaItems.length; ++index) {
    const item = listaItems[index];
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `<td>${item.nome}</td><td>${item.quantidade}</td><td>${formatarMoeda(item.preco)}</td> <td>${formatarMoeda(item.preco * item.quantidade)}</td>`;
    lista.querySelector("tbody").appendChild(novaLinha);
  }
};

const handleBtAdicionarClick = () => {
  const item = inputItem.value;
  const quantidade = parseInt(inputQuantidade.value);
  const preco = parseFloat(inputPreco.value);

  if (!item || !quantidade || !preco ) {
    alert("digite o item");
    return;
  }

  const novoItem = {
    nome: item,
    quantidade: quantidade,
    preco: preco
  };

  listaItems.push(novoItem);
  redesenhaLista(lista, listaItems);

  inputItem.value = "";
  inputQuantidade.value = "";
  inputPreco.value = "";
  inputItem.focus();
};

const handleBtLimparClick = () => {
  listaItems = [];
  redesenhaLista(lista, listaItems);
  inputItem.focus();
};

btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;

const hndBtnAddItem = () =>{

    const item = {
        name: itemImput.value,
        amont: amountInput.value,
        price: priceInput.value
    };

    if(!item.name || !item.amont || !item.price){
        alert("Algum campo deve estar vazio!");
        return
    }
    products.push(item);
    console.log(products);
    itemImput.value = "";
    amountInput.value = "";
    priceInput.value = "";

    createListItem(products);
    itemImput.focus();
};

const hndBtnClearList = () =>{
    itemImput.value = "";
    amountInput.value = "";
    priceInput.value = "";
    products = [];
    const rows = tbody.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        tbody.removeChild(rows[i]);
    }
    itemImput.focus();
};

addItem.onclick = hndBtnAddItem;
clearList.onclick = hndBtnClearList;