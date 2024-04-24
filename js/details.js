import { colors_arr } from "./parameters.js";
import { sizes_arr } from "./parameters.js";

const productDetail = "productDetail";
let properties = {};
let itemKey = {};

function createObject() {
  let itemInfo = JSON.parse(localStorage.productDetail);
  let name = itemInfo.name;
  let image = itemInfo.img;
  let star = itemInfo.star;
  let price = itemInfo.price;
  let prop = itemInfo.prop.slice(1).trim().split(", ");

  let loremIpsumText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  let doc = document.getElementById("product_detail");
  doc.innerHTML = `
        <div class="image__container">
            <div class="image--secondary">
                <div>
                    <img src="${image}"></img>
                </div>
                <div>
                    <img src="${image}"></img>
                </div>
                <div>
                    <img src="${image}"></img>
                </div>
            </div>
            <div class="image--main">
                <img src="${image}"></img>
            </div>
        </div>
        <div>
            <div class="properties">
                <h2>${name}</h2>
                <h4 class="star">${star}</h4>
                <h3 class="price">${price}</h3>
                <p class="details">${loremIpsumText}</p>
            </div>
            <hr size="1" width="90%" color="gray">
            <div class="colors__container">
                <h5>Select Colors</h5>
                <div>
                    ${generateColors(prop)}
                </div>
            </div>
            <hr size="1" width="90%" color="gray">
            <div class="sizes__container">
                <h5>Choose Size</h5>
                <div>
                    ${generateSizes(prop)}
                </div>
            </div>
            <hr size="1" width="90%" color="gray">
            <div class="cartChange">
                <div class="amount">
                    <a href="#" class="minus">-</a>
                    <h5 class="counter">1</h5>
                    <a href="#" class="plus">+</a>
                </div>
                <a href="cart.html" class="addCart">Add to Cart</a>
            </div>
        </div>
    `;
}

function generateColors(prop) {
  let div = "";

  colors_arr.forEach((element) => {
    if (prop.includes(element))
      div += `
                <div style="background-color: ${element}" class="div_color"></div>
            `;
  });
  return div;
}

function generateSizes(prop) {
  let div = "";

  sizes_arr.forEach((element) => {
    if (prop.includes(element))
      div += `
        <a href="#" class="sizes">${element}</a>
    `;
  });
  return div;
}

function getTick(event) {
  console.log(123);
}

function changeCount(operatorion) {
  let count = document.getElementsByClassName("counter")[0];
  if (operatorion == "minus") {
    if (count.innerHTML > 1) {
      count.innerHTML = parseInt(count.innerHTML) - 1;
    }
  } else {
    count.innerHTML = parseInt(count.innerHTML) + 1;
  }
  properties["count"] = count.innerHTML;
}

function addTick(event) {
  Array.from(
    document.querySelectorAll(".colors__container > div > div")
  ).forEach((element) => {
    element.innerHTML = "";
  });

  let inner = event.target;
  let bgc = event.target.style.backgroundColor;
  if (bgc != "white")
    inner.innerHTML === ""
      ? (inner.innerHTML = `<i class="fa-solid fa-check tick" style="color: #ffffff;"></i>`)
      : (inner.innerHTML = "");
  else
    inner.innerHTML === ""
      ? (inner.innerHTML = `<i class="fa-solid fa-check tick" style="color: #000;"></i>`)
      : (inner.innerHTML = "");

  properties["color"] = bgc;
}

function addSize(element) {
  let size = element.target.classList;
  if (!size.contains("black--color")) {
    size.add("black--color");
  } else {
    size.remove("black--color");
  }
  properties["size"] = element.target.innerHTML;
}

function sendToLocal() {
  let name = document.querySelector(".properties > h2").innerHTML;
  let star = document.querySelector(".star").innerHTML;
  let price = document.querySelector(".price").innerHTML;
  properties["star"] = star;
  properties["price"] = price;

  let cartObjects = {};
  if (localStorage.getItem("cartObject"))
    cartObjects = JSON.parse(localStorage.getItem("cartObject"));
  cartObjects[name] = properties;
  localStorage.setItem("cartObject", JSON.stringify(cartObjects));

  let cart_add = [];
  if (localStorage.getItem("cart_add")) {
    cart_add = localStorage.getItem("cart_add").split(", ");
  }
  console.log(cart_add);
  cart_add.push(name);
  localStorage.setItem("cart_add", cart_add.toString());
}

function eventSelector() {
  let colorsContainer = document.querySelector(".colors__container > div");
  colorsContainer.addEventListener("click", addTick);

  let sizesContainer = document.querySelector(".sizes__container > div");
  sizesContainer.addEventListener("click", addSize);

  let addToCart = document.querySelector(".addCart");
  addToCart.addEventListener("click", sendToLocal);
}

function counterChange() {
  const minusButton = document.querySelector(".minus");
  const plusButton = document.querySelector(".plus");

  minusButton.addEventListener("click", function () {
    changeCount("minus");
  });

  plusButton.addEventListener("click", function () {
    changeCount("plus");
  });
}

window.onload = () => {
  createObject();
  eventSelector();
  counterChange();
};

