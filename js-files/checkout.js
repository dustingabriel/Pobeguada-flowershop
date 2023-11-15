// Function to get cart items from the DOM
function getCartItems() {
  const cartItems = document.querySelectorAll(".listCart .item");
  const itemsArray = [];

  cartItems.forEach((item) => {
    const nameElement = item.querySelector(".info .name");
    const priceElement = item.querySelector(".info .price");
    const imageElement = item.querySelector(".itemImage");
    console.log("image", imageElement)
    const quantityElement = item.querySelector(".quantity .value");

    // Check if all required elements are found
    if (nameElement && priceElement && quantityElement && imageElement) {
      const name = nameElement.textContent.trim();
      const image = imageElement.getAttribute('src');
      console.log("imagevalue", image)
      const price = parseFloat(
        priceElement.textContent.replace(/\$/g, "").trim()
      );
      const quantity = parseInt(quantityElement.textContent.trim());

      itemsArray.push({
        name,
        image,
        price,
        quantity,
      });
    }
  });

  return itemsArray;
}


function calculateTotalQuantity(cartItems) {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

function calculateTotalPrice(cartItems) {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}


function updateCheckoutSummary() {
  const totalQuantityElement = document.getElementById("totalQuantity");
  const totalPriceElement = document.getElementById("totalPrice");

  if (!totalQuantityElement || !totalPriceElement) {
    console.error("Total quantity or total price elements not found.");
    return;
  }

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const totalQuantity = calculateTotalQuantity(cartItems);
  const totalPrice = calculateTotalPrice(cartItems);

  totalQuantityElement.textContent = totalQuantity;
  totalPriceElement.textContent = `₱${totalPrice.toFixed(2)}`;
}

// Function to handle the checkout process
function checkout() {
  // Perform your checkout logic here
  // For demonstration purposes, we'll log the cart items to the console
  const cartItems = getCartItems();
  console.log("Checkout - Cart Items:", cartItems);

  //checker if cartItems array is present, then set the data to the local storage
  if (cartItems.length) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  // After checkout, you may want to clear the cart or perform other actions
  // Clearing the cart is just an example, you need to implement your own logic
  const cartItemsContainer = document.querySelector(".listCart");
  cartItemsContainer.innerHTML = ""; // Clear the cart items

  // Update the checkout summary after checkout
  updateCheckoutSummary();

  // You can redirect the user or perform other actions based on your application's logic
  // For example:
  // window.location.href = "/thank-you.html";
}
// Function to create HTML for a cart item and append it to the container
function createCartItemElement(item) {
  const cartItem = document.createElement("div");
  cartItem.className = "item";

  // Assuming you have an 'image' property in your cart items
  cartItem.innerHTML = `
    <img src="${item.image}">
    <div class="info">
      <div class="name">${item.name}</div>
      <div class="price">$${item.price.toFixed(2)}</div>
    </div>
    <div class="quantity">${item.quantity}</div>
    <div class="returnPrice">₱${(item.price * item.quantity).toFixed(2)}</div>
  `;

  return cartItem;
}

// Function to render cart items in the specified container
function renderCartItems(container, cartItems) {
  // Clear the existing content of the container
  container.innerHTML = "";

  // Iterate through each item in cartItems and append it to the container
  cartItems.forEach((item) => {
    const cartItemElement = createCartItemElement(item);
    container.appendChild(cartItemElement);
  });
}
updateCheckoutSummary();
// Example usage:
document.addEventListener("DOMContentLoaded", function () {
  const returnCartContainer = document.querySelector(".list");
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Render the cart items in the specified container
  renderCartItems(returnCartContainer, storedCartItems);
});

function clearLocalStorageCartItems() {
  localStorage.removeItem("cartItems");
}

// Function to get cart items from the DOM
function getCartItems() {
  const cartItems = document.querySelectorAll(".listCart .item");
  const itemsArray = [];

  cartItems.forEach((item) => {
    const nameElement = item.querySelector(".info .name");
    const priceElement = item.querySelector(".info .price");
    const imageElement = item.querySelector(".itemImage");
    console.log("image", imageElement)
    const quantityElement = item.querySelector(".quantity .value");

    // Check if all required elements are found
    if (nameElement && priceElement && quantityElement && imageElement) {
      const name = nameElement.textContent.trim();
      const image = imageElement.getAttribute('src');
      console.log("imagevalue", image)
      const price = parseFloat(
        priceElement.textContent.replace(/\$/g, "").trim()
      );
      const quantity = parseInt(quantityElement.textContent.trim());

      itemsArray.push({
        name,
        image,
        price,
        quantity,
      });
    }
  });

  return itemsArray;
}


function calculateTotalQuantity(cartItems) {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

function calculateTotalPrice(cartItems) {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}


function updateCheckoutSummary() {
  const totalQuantityElement = document.getElementById("totalQuantity");
  const totalPriceElement = document.getElementById("totalPrice");

  if (!totalQuantityElement || !totalPriceElement) {
    console.error("Total quantity or total price elements not found.");
    return;
  }

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const totalQuantity = calculateTotalQuantity(cartItems);
  const totalPrice = calculateTotalPrice(cartItems);

  totalQuantityElement.textContent = totalQuantity;
  totalPriceElement.textContent = `₱${totalPrice.toFixed(2)}`;
}

// Function to handle the checkout process
function checkout() {
  // Perform your checkout logic here
  // For demonstration purposes, we'll log the cart items to the console
  const cartItems = getCartItems();
  console.log("Checkout - Cart Items:", cartItems);

  //checker if cartItems array is present, then set the data to the local storage
  if (cartItems.length) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  // After checkout, you may want to clear the cart or perform other actions
  // Clearing the cart is just an example, you need to implement your own logic
  const cartItemsContainer = document.querySelector(".listCart");
  //cartItemsContainer.innerHTML = ""; // Clear the cart items

  // Update the checkout summary after checkout
  updateCheckoutSummary();

  // You can redirect the user or perform other actions based on your application's logic
  // For example:
  // window.location.href = "/thank-you.html";
}
// Function to create HTML for a cart item and append it to the container
function createCartItemElement(item) {
  const cartItem = document.createElement("div");
  cartItem.className = "item";

  // Assuming you have an 'image' property in your cart items
  cartItem.innerHTML = `
    <img src="${item.image}">
    <div class="info">
      <div class="name">${item.name}</div>
      <div class="price">₱${item.price.toFixed(2)}</div>
    </div>
    <div class="quantity">${item.quantity}</div>
    <div class="returnPrice">₱${(item.price * item.quantity).toFixed(2)}</div>
  `;

  return cartItem;
}

// Function to render cart items in the specified container
function renderCartItems(container, cartItems) {
  // Clear the existing content of the container
  container.innerHTML = "";

  // Iterate through each item in cartItems and append it to the container
  cartItems.forEach((item) => {
    const cartItemElement = createCartItemElement(item);
    container.appendChild(cartItemElement);
  });
}
updateCheckoutSummary();
// Example usage:
document.addEventListener("DOMContentLoaded", function () {
  const returnCartContainer = document.querySelector(".list");
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Render the cart items in the specified container
  renderCartItems(returnCartContainer, storedCartItems);
});

function clearLocalStorageCartItems() {
  localStorage.removeItem("cartItems");
}

function buyNow(flowerId, quantity = 1) {
  const selectedFlower = flowerData.find((flower) => flower.id === flowerId);
  const existingCartItem = Array.from(cartContainer.children).find(
    (item) => item.dataset.flowerId === String(flowerId)
  );

  if (existingCartItem) {
    incrementQuantity(existingCartItem);
  } else {
    const cartItem = createCartItem(selectedFlower, flowerId, quantity);
    cartContainer.appendChild(cartItem);
    const cartItems = getCartItems();
  console.log("Checkout - Cart Items:", cartItems);

  //checker if cartItems array is present, then set the data to the local storage
  if (cartItems.length) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  // After checkout, you may want to clear the cart or perform other actions
  // Clearing the cart is just an example, you need to implement your own logic
  const cartItemsContainer = document.querySelector(".listCart");
  //cartItemsContainer.innerHTML = ""; // Clear the cart items

  // Update the checkout summary after checkout
  updateCheckoutSummary();
  }
  
  
}
