const colors_arr = [
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
const sizes_arr = [
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

function createObject() {
  let detail = JSON.parse(localStorage.getItem("productDetail"));
  let name = detail.name;
  let img = detail.img;
  let star = detail.star;
  let price = detail.price;
  let prop = detail.prop.split(", ");
  let loremIpsumText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  let doc = document.querySelector("#product_detail");
  doc.innerHTML = `
    <div class="image__container">
        <div class="image--secondary">
            <div>
                <img src="${img}"></img>
            </div>
            <div>
                <img src="${img}"></img>
            </div>
            <div>
                <img src="${img}"></img>
            </div>
        </div>
        <div class="image--main">
            <img src="${img}"></img>
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
    </div>
  `;
}

function generateColors(prop) {
  let div = "";

  colors_arr.forEach((element) => {
    if (prop.includes(element))
      div += `
    <div style="background-color: ${element};" class="color">
    </div>
    `;
  });
  console.log(colors_arr);
  return div;
}

function generateSizes(prop) {
  let div = "";

  sizes_arr.forEach((element) => {
    if (prop.includes(element))
      div += `
      <a href="#" class="sizes">
      ${element}
      </a>
      `;
  });
  return div;
}

function getTick(event) {
  console.log(event);
}

let colors_el = document.getElementsByClassName("color");
Array.from(colors_el).forEach((element) => {
  element.addEventListener("click", () => {
    getTick(element);
  });
});

window.onload = () => {
  createObject();
};
