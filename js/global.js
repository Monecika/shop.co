function loadHeader() {
  let nav = document.getElementById("nav__bar");
  nav.innerHTML = `
  <ul class="nav">
  <li>
  <i class="fa-solid fa-bars burger"></i>
    <ul class="pages-dropdown">
        <li>
        <a href="shop.html">Shop</a>
        </li>
        <li>
        <a href="shop.html">On Sale</a>
        </li>
        <li>
        <a href="shop.html">New Arrivals</a>
        </li>
        <li>
        <a href="shop.html">Brands</a>
        </li>
    </ul>

  <a href="home.html" class="integralCF">SHOP.CO</a>
  </li>
  <li>
      <ul class="pages">
          <li>
              <a href="shop.html">Shop</a>
              <img src="../assets/images/header/dropdown.svg" alt="" class="dropdown-arrow">

              <ul class="dropdown-menu">
                  <li><a href="shop.html">Pants</a></li>
                  <li><a href="shop.html">Shoes</a></li>
                  <li><a href="shop.html">T-Shirt</a></li>
                  <li><a href="shop.html">Jacket</a></li>
                  <li><a href="shop.html">Socks</a></li>
              </ul>
          </li>
          <li>
              <a href="shop.html">On Sale</a>
          </li>
          <li>
              <a href="shop.html">New Arrivals</a>
          </li>
          <li>
              <a href="shop.html">Brands</a>
          </li>
      </ul>
  </li>
  <li class="search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input id="searchInput" type="search" placeholder="Search for products..." >
  </li>
  <li>
      <ul class="profile">
            <li>
                <i class="fa-solid fa-magnifying-glass low-magnify"></i>
            </li>
          <li>
              <a href="cart.html">
                  <i class="fa-solid fa-cart-shopping"></i>
              </a>
          </li>
          <li>
              <a href="">
                  <i class="fa-regular fa-user"></i>
              </a>
          </li>
      </ul>
  </li>
</ul>
  `;
}

function loadFooter() {
  let footer = document.getElementById("footer");
  footer.innerHTML = `
    <div class="up-to-date">
    <h2 class="integralCF">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
    <div>
        <form action="">
            <label for="search">
                <i class="fa-solid fa-magnifying-glass"></i>
            </label>
            <input type="search" id="search" placeholder="Enter your email address">
        </form>
        <a href="">Subscribe to Newsletter</a>
    </div>
</div>

<section class="footer__list">
    <div class="footer">
        <div>
            <a href="home.html">Shop.Co</a>
            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <div class="social-icons">
                <a href="">
                    <i class="fa-brands fa-twitter"></i>
                </a>

                <a href=""><i class="fa-brands fa-facebook-f"></i></a>

                <a href="">
                    <i class="fa-brands fa-instagram"></i>
                </a>

                <a href="">
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
        </div>
        <ul>
            <li>
                <h4>COMPANY</h4>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Features</a>
            </li>
            <li>
                <a href="">Works</a>
            </li>
            <li>
                <a href="">Career</a>
            </li>
        </ul>
        <ul>
            <li>
                <h4>HELP</h4>
            </li>
            <li>
                <a href="">Customer Support</a>
            </li>
            <li>
                <a href="">Delivery Details</a>
            </li>
            <li>
                <a href="">Terms & Conditions</a>
            </li>
            <li>
                <a href="">Privacy Policy</a>
            </li>
        </ul>
        <ul>
            <li>
                <h4>FAQ</h4>
            </li>
            <li><a href="">Account</a></li>
            <li><a href="">Manage Deliveries</a></li>
            <li><a href="">Orders</a></li>
            <li><a href="">Payments</a></li>
        </ul>
        <ul>
            <li>
                <h4>RESOURCES</h4>
            </li>
            <li><a href="">Free eBooks</a></li>
            <li><a href="">Development Tutorial</a></li>
            <li><a href="">Howo to - Blog</a></li>
            <li><a href="">Youtube Playlist</a></li>
        </ul>
    </div>

    <hr size="1" width="90%" color="gray">

    <div class="card-icons__container">
        <h5>© 2000-2021, All rights reserved</h5>
        <div class="card-icons">
            <img src="../assets/images/footer/Visa-Logo-High-Quality-PNG.png" alt="">
            <img src="../assets/images/footer/mastercard-icon-1024x793-xinze39n.png" alt="">
            <img src="../assets/images/footer/paypal-logo-2.png" alt="">
            <img src="../assets/images/footer/ap43fa74-apple-pay-logo-file-apple-pay-logo-svg-wikimedia-commons.png"
                alt="">
            <img src="../assets/images/footer/google-pay.png" alt="">
        </div>
    </div>
</section>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
  loadHeader();
  loadFooter();
});
