const cartStorage = "cartObject";
const colors = [
  "Green",
  "Red",
  "Yellow",
  "Orange",
  "Cyan",
  "Blue",
  "Purple",
  "Pink",
  "White",
  "Black",
];
const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];

function localStorageExtract() {
  if (
    localStorage.getItem(cartStorage) !== "{}" &&
    localStorage.getItem(cartStorage) !== null
  ) {
    addAll();
    loadItems();
    loadSummary();
  } else {
    document.getElementById("cart-products").innerHTML =
      "<h1>You have no products</h1>";
    removeAll();
  }
}

function loadItems() {
  let cartObject = JSON.parse(localStorage.getItem(cartStorage));

  let products = document.getElementById("cart-products");
  products.innerHTML = "";

  Object.entries(cartObject).forEach((element) => {
    products.innerHTML += `
    <div class="product" id="${element[0]}">
        <div class="item-info">
            <img src="../assets/images/shop/${element[0]}.png"></img>
            <div>
                <h4>${element[0]}</h4>
                <h6>Size: <span>${element[1].size}</span></h6>
                <h6>Color: <span>${element[1].color}</span></h6>
                <h3 class="price">${element[1].price}</h3>
            </div>    
        </div>
        <div>
            <a href="#" onclick="deleteItem('${element[0]}')">
                <i class="fa-solid fa-trash" style="color: #ff3333;"></i>        
            </a>  
            <div onclick="stockChange(event)">
                <a href="#" class="minus">-</a>
                <h5 class="counter">1</h5>
                <a href="#" class="plus">+</a>
            </div>
        </div>
    </div>
    `;
  });
}

function loadSummary() {
  let delivery = 15;
  let totalPrice = 0;
  document
    .querySelectorAll(".price")
    .forEach(
      (element) => (totalPrice += parseFloat(element.innerHTML.slice(1).trim()))
    );

  let discount = totalPrice * 0.2;

  let summary = (document.getElementById("summary").innerHTML = `
        <h3>Order Summary</h3>
        <div class="calc">
            <div>
                <h4>Subtotal</h4>
                <h4>$${totalPrice}</h4>
            </div>
            
            <div>
                <h4>Discount (-20%)</h4>
                <h4>-$${discount}</h4>
            </div>

            <div>
                <h4>Delivery fee</h4>
                <h4>$${delivery}</h4>
            </div>
            <hr size="1" width="100%" color="gray">
            <div>
                <h4>Total</h4>
                <h4>$${totalPrice - discount}</h4>
            </div>
        </div>
        <a href="#">Go to Checkout &rarr;</a>
    `);
}

function removeAll() {
  document.getElementById("all").innerHTML = `
  <h1>You have no products</h1>
  `;

  document.getElementById("all").style.justifyContent = "center";
}

function addAll() {
  document.getElementById("all").innerHTML = `
    <section id="cart-products"></section>
    <section id="summary"></section>
    `;
}

function deleteItem(name_tag) {
  let cartObject = JSON.parse(localStorage.getItem(cartStorage));
  delete cartObject[name_tag];

  let cart_add = localStorage.getItem("cart_add").split(",");
  cart_add.splice(cart_add.indexOf(name_tag), 1);

  localStorage.setItem(cartStorage, JSON.stringify(cartObject));
  localStorage.setItem("cart_add", cart_add.toString());

  localStorageExtract();
}

function stockChange(event) {
  targetClass = event.target.classList;
  if (targetClass.contains("plus") || targetClass.contains("minus")) {
    let counter = event.target.parentNode.querySelector("div .counter");
    let price =
      event.target.parentNode.parentNode.parentNode.querySelector(
        ".item-info .price"
      );
    if (targetClass.contains("plus")) {
      counter.innerHTML = parseInt(counter.innerHTML) + 1;
      price.innerHTML = `$${
        parseFloat(price.innerHTML.slice(1)) * parseInt(counter.innerHTML)
      }`;
    } else if (targetClass.contains("minus")) {
      if (parseInt(counter.innerHTML) > 1) {
        counter.innerHTML = parseInt(counter.innerHTML) - 1;
        price.innerHTML = `$${
          parseFloat(price.innerHTML.slice(1)) /
          (parseInt(counter.innerHTML) + 1)
        }`;
      }
    }
  }

  loadSummary();
}

window.onload = () => {
  localStorageExtract();
};
