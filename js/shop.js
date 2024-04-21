const arrow = `<img src="../assets/images/header/dropdown.svg" alt="">`;
const div_color = [
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

const added_class = "added";
const full_cart = "../assets/images/shop/grocery-store.png";
const cart = "../assets/images/shop/shopping-cart.png";
const cart_local = "cart_add";

const noSort = "No Sort";
const bestR = "Best rated";
const worstR = "Worst rated";
const lowPr = "Low price";
const highPR = "High price";

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
    <div style="background-color: ${element}" class="filter__color-property" onclick="getTick(this)"></div>
    `;
  });
}

function loadCartImg() {}

function loadObjects() {
  let store = document.getElementById("store");

  let element = createObject("");
  store.innerHTML = element;

  document.getElementById("clothing-style--displayed").innerHTML = "All";
  document.getElementById("clothing--type").innerHTML = "All";
}

function searchProducts(searchTerm) {
  resetFilters();

  let products = document.querySelectorAll("#store > div");
  products.forEach((element) => {
    let productName = element.querySelector("h4").textContent.toLowerCase();

    if (!productName.includes(searchTerm)) {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  });
}

function createObject(filter) {
  let filter_arr = commitFilter(filter);

  localStorage.setItem("filter", filter_arr);
  let element = "";

  Object.entries(product_object).forEach(([productName, productDetails]) => {
    const { stars, price, sale, properties } = productDetails;
    if (
      filter_arr.split(",").some((element) => properties.includes(element)) ||
      filter == ""
    ) {
      element += `
        <div>
          <div class="addTo">
          ${createImgElement(productName)}
          </div>
          <img src="../assets/images/shop/${productName}.png"></img>
          <h4>${productName}</h4>
          <h3 class="star">${starCreator(stars)}</h3>
          <h3>$${sale ? price - sale : price}</h3>
        </div>
      `;
    }
  });

  return element;
}

function createImgElement(name) {
  let items = [];
  if (localStorage.getItem(cart_local))
    items = localStorage.getItem(cart_local).split(",");

  if (items.includes(name)) return `<img src=${full_cart}></img>`;
  else {
    return `<img src=${cart}></img>`;
  }
}

function commitFilter(filter) {
  let filter_arr = [];

  const existingFilter = localStorage.getItem("filter");
  if (existingFilter) {
    filter_arr = existingFilter.split(",");
  }

  if (!filter_arr.includes(filter)) filter_arr.push(filter);
  return filter_arr.toString();
}

function applyStyle(element) {
  element.classList.contains("arrow_rotate")
    ? element.classList.remove("arrow_rotate")
    : element.classList.add("arrow_rotate");
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

function getTick(element) {
  element.innerHTML === ""
    ? (element.innerHTML = `<i class="fa-solid fa-check" style="color: #ffffff;"></i>`)
    : (element.innerHTML = "");
}

function handleFilter(event) {
  if (event.target.classList.contains("filter-property")) {
    event.preventDefault();
    filterElements(event.target.textContent.trim());
  }
}

function handleColorFilter(event) {
  if (event.target.classList.contains("filter__color-property")) {
    event.preventDefault();
    let backColor = event.target.style.backgroundColor;
    backColor = backColor[0].toUpperCase() + backColor.slice(1);
    filterElements(backColor);
  }
}

function filterElements(filter) {
  let store = document.getElementById("store");
  store.innerHTML = createObject(filter);

  document.getElementById("clothing-style--displayed").innerHTML = filter;
  document.getElementById("clothing--type").innerHTML = filter;
}

function addCart(event) {
  let cart_added = [];
  if (localStorage.getItem(cart_local))
    cart_added = localStorage.getItem(cart_local).split(",");
  let newTarget;

  if (event.target.tagName === "IMG") {
    newTarget = event.target.parentNode.parentNode;
  } else if (
    event.target.tagName !== "DIV" ||
    event.target.classList.contains("addTo")
  ) {
    newTarget = event.target.parentNode;
  } else {
    newTarget = event.target;
  }

  const newEvent = new Event(event.type, event);

  Object.defineProperty(newEvent, "target", {
    value: newTarget,
    writable: false,
  });

  let query = newEvent.target;
  let div_query = query.querySelector("div");
  let img_query = query.querySelector("div img");
  let name_query = query.querySelector("h4").innerHTML;
  if (!div_query.classList.contains(added_class)) {
    div_query.classList.add(added_class);
    img_query.src = full_cart;

    if (!cart_added.includes(name_query)) {
      cart_added.push(name_query);
      localStorage.setItem(cart_local, cart_added.toString());
    }
  } else {
    div_query.classList.remove(added_class);
    img_query.src = cart;

    cart_added.pop(name_query);
    localStorage.setItem(cart_local, cart_added.toString());
  }
}

function getFilter(event) {
  let sort_item = "";
  let order = "";

  if (event == noSort) {
    loadObjects();
  } else {
    if (event == bestR) {
      sort_item = "stars";
      order = "desc";
    } else if (event == worstR) {
      sort_item = "stars";
      order = "asc";
    } else if (event == lowPr) {
      sort_item = "price";
      order = "asc";
    } else if (event == highPR) {
      sort_item = "price";
      order = "desc";
    }

    createFilteredObject(sort_item, order);
  }
}

function createFilteredObject(sort_item, order) {
  let sortedArray = Object.entries(product_object);
  let object = [];
  if (sort_item == "stars")
    sortedArray.forEach((element) => object.push(parseFloat(element[1].stars)));
  else
    sortedArray.forEach((element) =>
      object.push(
        parseFloat(
          element[1].sale
            ? element[1].price - element[1].sale
            : element[1].price
        )
      )
    );

  for (let i = 0; i < object.length - 1; i++) {
    for (let j = i + 1; j < object.length; j++) {
      if (object[i] > object[j]) {
        let aux = object[i];
        object[i] = object[j];
        object[j] = aux;

        let auxObj = sortedArray[i];
        sortedArray[i] = sortedArray[j];
        sortedArray[j] = auxObj;
      }
    }
  }
  if (order == "asc") generateFilteredObject(sortedArray);
  else generateFilteredObject(sortedArray.reverse());
}

function generateFilteredObject(object) {
  let store = document.getElementById("store");
  let inner = "";
  object.forEach((element) => {
    inner += `
    <div>
      <div class="addTo">
      ${createImgElement(element[0])}
      </div>
      <img src="../assets/images/shop/${element[0]}.png"></img>
      <h4>${element[0]}</h4>
      <h3 class="star">${starCreator(element[1].stars)}</h3>
      <h3>$${
        element[1].sale ? element[1].price - element[1].sale : element[1].price
      }</h3>
    </div>
  `;
  });

  store.innerHTML = inner;
}

function resetFilters() {
  localStorage.setItem("filter", "");
  loadObjects();
}

window.onload = () => {
  loadArrows();
  loadColors();
  loadObjects();
};

window.onbeforeunload = () => {
  localStorage.removeItem("filter");
};

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", function () {
    let search_term = this.value.toLowerCase();
    console.log(search_term);
    searchProducts(search_term);
  });
});
