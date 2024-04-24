import { colors_arr } from "./parameters.js";

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

function getTick(event) {
  console.log(event);
}

function addTick(event) {
  const colorDiv = event.target.closest(".div_color");
  if (colorDiv) {
    console.log("Clicked color:", colorDiv.style.backgroundColor);
    // Here you can add your logic to handle the click event on the color div
    // For example, you might want to add a class to indicate selection
    // colorDiv.classList.toggle('selected');
  }
}

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
          <div class="colors__container" onclick="addTick(event)">
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
      <div style="background-color: ${element};" class="div_color">
      </div>
      `;
  });
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

// Array.from(colors_el).forEach((element) => {
//   element.addEventListener("click", () => {
//     console.log("Clicked color:", element.style.backgroundColor); // Debugging: log the color that was clicked
//     getTick(element);
//   });
// });

window.onload = () => {
  createObject();
};
