document.getElementById('formulario').addEventListener('submit', addProduct)

function addProduct () {

  let name = document.getElementById('name').value;
  let brand = document.getElementById('brand').value;
  let model = document.getElementById('model').value;
  let price = document.getElementById('price').value;
  let count = document.getElementById('count').value;

  const product = {
    name : name,
    brand,
    model,
    price,
    count,
  }

  if (localStorage.getItem('products') === null) {
    let products = [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
  } else {
    let products = JSON.parse(localStorage.getItem('products'));
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
  }
 
getProduct();

}

function getProduct() {

  let products = JSON.parse(localStorage.getItem('products'));
  let productView = document.getElementById('list');
  console.log('hola')

}
getProduct();