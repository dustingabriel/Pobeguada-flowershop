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
                <a href="cart.html"><img src="img/cart.png" alt=""></a>
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
    
}
createNav();