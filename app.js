document.getElementById('formulario').addEventListener('submit', addProduct);

function addProduct () {

  let name = document.getElementById('name').value.toLowerCase();
  let brand = document.getElementById('brand').value.toLowerCase();
  let model = document.getElementById('model').value.toLowerCase();
  let price = document.getElementById('price').value;
  let count = document.getElementById('count').value;
  let id = document.getElementById('id').value;
  //alert('el id es ' + id);

  const product = {
    name : name,
    brand,
    model,
    price,
    count,
    id,
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
  
  if (products) {
    productView.innerHTML = "";
    
    for (let i = 0; i < products.length; i++) {

      let now = products[i];  
      productView.innerHTML += '<div class="card mb-1">' + 
        '<div class="card-body">'+
          '<div class="row">'+
            '<button class="col-md-1 btn btn-info btn-sm" onclick="updateProduct(\'' + now.id + '\')">Editar</button>' +

            '<span class="col-md-2 text-center">' + now.name + '</span>' +
            '<span class="col-md-2 text-center">' + now.brand + '</span>' +
            '<span class="col-md-2 text-center">' + now.model + '</span>' +
            '<span class="col-md-2 text-center">S/. ' + now.price + '</span>' +
            '<span class="col-md-2 text-center">' + now.count + '</span>' +

            '<button class="col-md-1 btn btn-danger btn-sm" onclick="deleteProduct(\'' + now.id + '\')">Borrar</button>' +

          '</div>'+
        '</div>'+
      '</div>';


    }
  }
}

getProduct();


function deleteProduct(id) {
  let products = JSON.parse(localStorage.getItem('products'));
  
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products.splice(i, 1);
    }
  }

  localStorage.setItem('products', JSON.stringify(products));
  getProduct();
  
}


document.getElementById('boton-buscar').addEventListener('click', searchProduct);


function searchProduct(e) {
  //alert('pls?');
  
  let products = JSON.parse(localStorage.getItem('products'));
  let name = document.getElementById('nombre-buscar').value.toLowerCase();
  let productView = document.getElementById('list');
  
  if (localStorage.getItem('search') != null) {
    localStorage.removeItem('search');
  } 

  let search = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].name === name) {
      search.push(products[i]);
    }
  }
  localStorage.setItem('search', JSON.stringify(search));

  productView.innerHTML = "";
  if (search.length == 0) {
    productView.innerHTML = "Lo sentimos no encontramos ese producto";
  } else {
    for (let i = 0; i < search.length; i++) {
      productView.innerHTML += `<div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-1"><button class="btn btn-info btn-sm" onclick="updateProduct(${search[i].name})">Editar</button></div>
            <div class="col-md-2">${search[i].name}</div>
            <div class="col-md-2">${search[i].brand}</div>
            <div class="col-md-2">${search[i].model}</div>
            <div class="col-md-2">${search[i].price}</div>
            <div class="col-md-2">${search[i].count}</div>
            <div class="col-md-1"><button class="btn btn-danger btn-sm" onclick="deleteProduct(${search[i].id})">Borrar</button></div>
          </div>
        </div>
      </div>`
    }
  }

  e.preventDefault();
}



function updateProduct(id) {

  alert('actualizando');
}

function counterId() {
  let next

  if (localStorage.getItem('counter') === null) {
    next = 0;
    let counter = [next];
    localStorage.setItem('counter', JSON.stringify(counter));
  } else {
    let counter = JSON.parse(localStorage.getItem('counter'));
    next = counter.length;
    counter.push(next);
    localStorage.setItem('counter', JSON.stringify(counter));
  }

  let tag = document.getElementById('id');
  tag.value = next;

}
