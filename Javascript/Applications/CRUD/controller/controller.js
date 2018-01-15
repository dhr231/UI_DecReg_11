window.addEventListener("load", init);

var productName;
var productPrice;
var productDesc;

function init(){
    productName = document.querySelector("#box_1");
    productPrice = document.querySelector("#box_2");
    productDesc = document.querySelector("#box_3");

    document.getElementById("create").addEventListener("click", createProduct);
    document.getElementById("delete").addEventListener("click", deleteProducts);
}

function createProduct(){
    var ul = document.querySelector("#itemList");
    var li = document.createElement('li');

    obj.addProduct(productName.value,productPrice.value,productDesc.value);

    li.innerHTML = obj.id + " " + productName.value + " " + productPrice.value + " " + productDesc.value;
    li.className = 'list-group-item list-group-item-success';
    ul.appendChild(li);
    li.addEventListener("click", markProduct);
}

function markProduct(){
    event.srcElement.classList.toggle('list-group-item-danger');
    var currentElement = event.srcElement.innerHTML.split(" ")[0];
    // console.log(currentElement);
    obj.toggleProduct(currentElement);
}

function deleteProducts() {
    obj.deleteProduct();
    printProducts();
}

function printProducts(){
    var ul = document.querySelector("#itemList");
    ul.innerHTML = " ";
    obj.productList.forEach(function(p){
        var li = document.createElement("li");
        li.innerHTML = p.id + " " + p.name + " " + p.price + " "+ p.desc;
        li.className = 'list-group-item list-group-item-success';
        ul.appendChild(li);
        li.addEventListener("click", markProduct);
    })
}