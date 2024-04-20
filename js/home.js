var brands = [
  "../assets/images/home/versace.png",
  "../assets/images/home/zara.png",
  "../assets/images/home/gucci.png",
  "../assets/images/home/prada.png",
  "../assets/images/home/klain.png",
];

let arrivals = {
  item1: {
    img: "../assets/images/home/t-shirt-with-tape-details.jpg",
    h5: "T-shirt with Tape Details",
    stars: 4,
    p: "4.0 / 5",
    price: 120,
  },

  item2: {
    img: "../assets/images/home/SKINNY-FIT-JEANS.png",
    h5: "Skinny Fit Jeans",
    stars: 4,
    p: "4.0 / 5",
    price: 240,
    sale: 20,
  },

  item3: {
    img: "../assets/images/home/CHECKERED-SHIRT.jpg",
    h5: "Checkered Shirt",
    stars: 4,
    p: "4.0 / 5",
    price: 180,
  },

  item4: {
    img: "../assets/images/home/SLEEVE-STRIPED-T-SHIRT.jpg",
    h5: "Sleeve Striped T-Shirt",
    stars: 4,
    p: "4.0 / 5",
    price: 130,
    sale: 30,
  },
};

let feedback = {
  "Sarah M.": {
    stars: 5,
    p: "Excellent customer service! The staff was very helpful and knowledgeable about the products. I had a great shopping experience and will definitely be returning.",
  },
  "Alex K.": {
    stars: 5,
    p: "The quality of the items I purchased exceeded my expectations. The materials are durable, and the craftsmanship is top-notch. I highly recommend this store to anyone looking for high-quality products.",
  },
  "James L.": {
    stars: 5,
    p: "I'm extremely satisfied with my purchase! The website was easy to navigate, and the ordering process was seamless. The shipping was fast, and my items arrived in perfect condition. I will definitely be shopping here again in the future.",
  },
  "Jonathan M.": {
    stars: 5,
    p: "The quality of the items I purchased exceeded my expectations. The materials are durable, and the craftsmanship is top-notch. I highly recommend this store to anyone looking for high-quality products.",
  },
  "Anthony L.": {
    stars: 5,
    p: "Excellent customer service! The staff was very helpful and knowledgeable about the products. I had a great shopping experience and will definitely be returning.",
  },
};

function loadBrand() {
  let div = document.getElementById("brands");
  brands.forEach((Element) => {
    div.innerHTML += `<img src="${Element}"></img>`;
  });

  console.log(brands);
}

function loadArrivals() {
  let div_arr = document.getElementById("arrivals");
  let div_top = document.getElementById("top");

  for (let key in arrivals) {
    let value = arrivals[key];
    let element = `
    <div>
        <div>    
            <img src="${value.img}"></img>
        </div>
        <h4>${value.h5}</h4>
        <p class="star">&starf;&starf;&starf;&starf;&star; <span class="rate">${value.p}</span></p>
        <h3>$${value.price}</h3>
    </div>
    `;

    div_arr.innerHTML += element;
    div_top.innerHTML += element;
  }
}

function loadFeedback() {
  let div = document.getElementById("feedback");
  let star = `&starf;`;

  for (let key in feedback) {
    let value = feedback[key];
    div.innerHTML += `
            <div>
                <h3 class="star">${star.repeat(value.stars)}</h3>
                <h4>
                    ${key}
                    <i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>
                </h4>
                <p>${value.p}</p>
            </div>
        `;
  }
}

function slider() {
  let Left = document.querySelector(".m_left");
  let Right = document.querySelector(".m_right");
  let b = document.querySelectorAll("#feedback div")[0].offsetWidth;

  let feedback = document.querySelector("#feedback");
  let scroll = b;

  Left.addEventListener("click", () => {
    feedback.scrollLeft -= scroll;
  });

  Right.addEventListener("click", () => {
    feedback.scrollLeft += scroll;
  });
}

window.onload = () => {
  loadArrivals();
  loadBrand();
  loadFeedback();
  slider();
};
