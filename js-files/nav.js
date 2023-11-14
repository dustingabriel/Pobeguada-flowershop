const createNav = () => {
    let nav = document.querySelector('.navbar');
    
    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="search" class="search-box" placeholder="search product" onkeyup="search()"> 
                    <a href="search.html"><input type="submit" class="search-btn" value="Search"></a>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <div class="iconCart">
                <img src="img/cart.png">
                <div class="totalQuantity">0</div>
            </div>
        
            <div class="cart">
                <h2>
                    CART
                </h2>
                <div class="listCart">
                <div class="item">
                    <img src="img/booklover.png">
                        <div class="content">
                            <div class="name">CoPilot / Black / Automatic</div>
                            <div class="price">$550 / 1 product</div>
                        </div>
                        <div class="quantity">
                            <button>-</button>
                            <span class="value">3</span>
                            <button>+</button>
                        </div>
                </div>
        
        
                </div>
        
                <div class="buttons">
                    <div class="close">
                        CLOSE
                    </div>
                    <div class="checkout">
                        <a href="checkout.html">CHECKOUT</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">home</a></li>
            <div class="dropdown">
                <button class="dropbtn">Shop
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                <a href="allproducts.html">All Products</a>
                <a href="flowercollection.html">Bouquet Collection</a>
                <a href="plantscollection.html">Plants Collection</a>
                <a href="giftset.html">Gift Set</a>
                </div>
            </div>
            <li class="link-item"><a href="aboutus.html" class="link">About Us</a></li>
        </ul>
    `;

const scriptElement = document.createElement('script');
// Set the src attribute
scriptElement.src = 'js-files/app.js';
    
}
createNav();
