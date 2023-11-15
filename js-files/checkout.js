// Function to get cart items from the DOM
function getCartItems() {
  const cartItems = document.querySelectorAll(".listCart .item");
  const itemsArray = [];

  cartItems.forEach((item) => {
    const nameElement = item.querySelector(".info .name");
    const priceElement = item.querySelector(".info .price");
    const quantityElement = item.querySelector(".quantity .value");

    // Check if all required elements are found
    if (nameElement && priceElement && quantityElement) {
      const name = nameElement.textContent.trim();
      const price = parseFloat(
        priceElement.textContent.replace(/\$/g, "").trim()
      );
      const quantity = parseInt(quantityElement.textContent.trim());

      itemsArray.push({
        name,
        price,
        quantity,
      });
    }
  });

  return itemsArray;
}

// Function to calculate total quantity of items in the cart
function calculateTotalQuantity() {
  const cartItems = getCartItems();
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

// Function to calculate the total price of items in the cart
function calculateTotalPrice() {
  const cartItems = getCartItems();
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

// Function to update the checkout summary on the page
function updateCheckoutSummary() {
  const totalQuantityElement = document.querySelector(".totalQuantity");
  const totalPriceElement = document.querySelector(".totalPrice");

  const totalQuantity = calculateTotalQuantity();
  const totalPrice = calculateTotalPrice();

  totalQuantityElement.textContent = totalQuantity;
  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
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
