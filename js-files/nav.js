const createNav = () => {
    let nav = document.querySelector('.navbar');
    
    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search product" onkeyup="myFunction()"> 
                    <a href="search.html"><input type="submit" class="search-btn" value="Search"></a>
                    <ul id="myUL">
                        <li><a href="https://www.twitch.tv/jaunueldota2">Adele</a></li>
                        <li><a href="#">Agnes</a></li>
                        <li><a href="#">Billy</a></li>
                        <li><a href="#">Bob</a></li>
                        <li><a href="#">Calvin</a></li>
                        <li><a href="#">Christina</a></li>
                        <li><a href="#">Cindy</a></li>
                    </ul>
                    </div>
                <a href="login.html"><img src="img/user.png" alt=""></a>
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

    function myFunction() {
        // Declare variables
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementsByClassName('search-box');
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName('li');
      
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }
}
createNav();

