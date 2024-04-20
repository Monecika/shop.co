const arrow = `<img src="../assets/images/header/dropdown.svg" alt="">`;
const div_color = [
  "00c12b",
  "f50606",
  "f5dd06",
  "f57906",
  "06caf5",
  "063af5",
  "7d06f5",
  "f506a4",
  "ffffff",
  "000000",
];
const product_object = {
  "Gradient Graphic T-shirt": {
    stars: 3.5,
    price: 145,
    properties: ["", "T-shirt", "White", "Medium", "Large", "Casual"],
  },
  "Polo with Tipping Details": {
    stars: 4.5,
    price: 180,
    properties: ["", "Shirt", "Pink", "Medium", "Large", "Formal"],
  },
  "Black Striped T-shirt": {
    stars: 5.0,
    price: 150,
    sale: 30,
    properties: ["", "T-shirt", "White", "Black", "Medium", "Large", "Gym"],
  },
  "SKINNY FIT JEANS": {
    stars: 3.5,
    price: 260,
    sale: 20,
    properties: ["", "Jeans", "Blue", "Medium", "Large", "Casual"],
  },
  "CHECKERED SHIRT": {
    stars: 4.5,
    price: 180,
    properties: ["", "Shirt", "Purple", "Blue", "Medium", "Large", "Formal"],
  },
  "SLEEVE STRIPED T-SHIRT": {
    stars: 4.5,
    price: 160,
    sale: 30,
    properties: ["", "T-shirt", "Black", "Orange", "Medium", "Large", "Gym"],
  },
  "VERTICAL STRIPED SHIRT": {
    stars: 5.0,
    price: 232,
    sale: 20,
    properties: ["", "Shirt", "Green", "Medium", "Large", "Formal"],
  },
  "COURAGE GRAPHIC T-SHIRT": {
    stars: 4.0,
    price: 145,
    properties: ["", "T-shirt", "Orange", "Medium", "Large", "Casual"],
  },
  "LOOSE FIT BERMUDA SHORTS": {
    stars: 3.0,
    price: 80,
    properties: ["", "Shorts", "Blue", "Medium", "Large", "Casual"],
  },
};

function loadArrows() {
  let image = Array.from(document.getElementsByClassName("dropdown-arrow"));

  image.forEach((element) => {
    element.innerHTML += arrow;
  });
}

function loadColors() {
  let colors = document.getElementById("color-assign");
  div_color.forEach((element) => {
    colors.innerHTML += `
        <div style="background-color: #${element}" class="filter-property" onclick="getTick(this)"></div>
        `;
  });
}

function applyStyle(element) {
  element.classList.contains("arrow_rotate")
    ? element.classList.remove("arrow_rotate")
    : element.classList.add("arrow_rotate");
}

function getTick(element) {
  element.innerHTML === ""
    ? (element.innerHTML = `<i class="fa-solid fa-check" style="color: #ffffff;"></i>`)
    : (element.innerHTML = "");
}

function loadObjects() {
  let store = document.getElementById("store");

  let element = createObject("");
  store.innerHTML = element;
}

function createObject(filter) {
  let element = "";
  Object.entries(product_object).forEach(([productName, productDetails]) => {
    const { stars, price, sale, properties } = productDetails;
    if (properties.includes(filter)) {
      element += `
      <div>
        <img src="../assets/images/shop/${productName}.png"></img>
        <h4>${productName}</h4>
        <h3 class="star">${starCreator(stars)}</h3>
        <h3>$${sale ? price - sale : price}</h3>
      </div>
    `;
    }
    console.log(filter);
  });

  return element;
}

function starCreator(object) {
  let star = `&#9733;`;
  let element = star.repeat(parseInt(object));
  let digit = (object / 10).toString();
  if (digit.length - digit.indexOf(".") - 1 == 2) {
    element += `
    <span class="half">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
      <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
      </svg>
    </span>
    `;
  }

  return element;
}

function handleFilter(event) {
  if (event.target.classList.contains("filter-property")) {
    event.preventDefault();
    filterElements(event.target.textContent.trim());
  }
}

function filterElements(filter) {
  let store = document.getElementById("store");
  store.innerHTML = createObject(filter);
}

// function 

window.onload = () => {
  loadArrows();
  loadColors();
  loadObjects();
};
