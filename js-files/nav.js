// Function to filter and display matching items in a list based on user input
function myFunction() {
  // Get the input element and user input
  var input = document.getElementById("myInput");
  var filter = input.value.toUpperCase();

  // Get the unordered list and list items
  var ul = document.getElementById("myUL");
  var li = ul.getElementsByTagName("li");

  // Toggle the visibility of the list based on input
  ul.style.display = filter === "" ? "none" : "block";

  // Loop through each list item, hide or display based on the filter
  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName("a")[0];
    var txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// Function to check if the Enter key is pressed and take action accordingly
function checkEnter(event) {
  if (event.key === "Enter") {
    // Get the user input and convert it to uppercase
    var filter = document.getElementById("myInput").value.toUpperCase();

    // Redirect to 404 page if there are no matching results and input is not empty
    if (!hasMatchingResults(filter) && filter !== "") {
      window.location.href = "404.html";
    }
  }
}

// Function to check if there are matching results in the list
function hasMatchingResults(filter) {
  // Get the unordered list and list items
  var ul = document.getElementById("myUL");
  var li = ul.getElementsByTagName("li");

  // Loop through each list item, return true if a match is found
  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName("a")[0];
    var txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      return true;
    }
  }

  // Return false if no match is found
  return false;
}

function createNav() {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" id="myInput" oninput="myFunction()" onkeydown="checkEnter(event)" placeholder="Search for product" title="Type in a name">
                    <ul id="myUL">
                      <li><a href="product-6.html">Bonsai Tree</a></li>
                      <li><a href="product-11.html">Book Lover Gift Set</a></li>
                      <li><a href="product-7.html">Fiddle leaf</a></li>
                      <li><a href="product-12.html">Gourmet Gift Set</a></li>
                      <li><a href="product-1.html">Hydrangea</a></li>
                      <li><a href="product-13.html">New Parent Gift Set</a></li>
                      <li><a href="product-8.html">Orchid</a></li>
                      <li><a href="product-2.html">Roses</a></li>
                      <li><a href="product-9.html">Snake Plant</a></li>
                      <li><a href="product-14.html">Spa Gift Set</a></li>
                      <li><a href="product-10.html">Succulent</a></li>
                      <li><a href="product-4.html">Sunflower</a></li>
                      <li><a href="product-15.html">Travel Gift Set</a></li>
                      <li><a href="product-3.html">Tulip</a></li>
                      <li><a href="product-5.html">Wildflower</a></li>
                    </ul>
                </div>
                <a href="login.html"><img src="img/user.png" alt=""></a>
                <div class="iconCart">
                    <a ><img src="img/cart.png"></a>
                    <div class="totalQuantity">0</div>
                </div>
                <div class="cart">
                <h2>
                    CART
                </h2>
        
                <div class="listCart" id="cartItems">
        
        
                    <div class="item">
                        
                        <div class="content">
                            
                        </div>
                        <div class="quantity">
                            
                           
                            
                        </div>
                    </div>
        
        
                </div>
        
                <div class="buttons">
                    <div class="close">
                        CLOSE
                    </div>
                    <div class="checkout">
                        <a href="checkout.html" onclick="checkout()">CHECKOUT</a>
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
                    <a href="flowercollection.html">Flowers Collection</a>
                    <a href="plantscollection.html">Plants Collection</a>
                    <a href="giftset.html">Gift Set</a>
                </div>
            </div>
            <li class="link-item"><a href="aboutus.html" class="link">About Us</a></li>
        </ul>
    `;
}

createNav();
