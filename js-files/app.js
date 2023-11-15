const flowerItemsContainer = document.getElementById("flower-card");
const cartContainer = document.getElementById("cartItems");
const totalQuantityElement = document.querySelector(".totalQuantity");
const iconCart = document.querySelector(".iconCart");
const cart = document.querySelector(".cart");
const close = document.querySelector(".close");

iconCart.addEventListener("click", toggleCart);
close.addEventListener("click", closeCart);
document.addEventListener("DOMContentLoaded", loadCart);

function toggleCart() {
  const newPosition = cart.style.right === "-100%" ? "0" : "-100%";
  cart.style.right = newPosition;
  container.style.transform = `translateX(${newPosition === "0" ? -400 : 0}px)`;
}

function closeCart() {
  cart.style.right = "-100%";
  container.style.transform = "translateX(0)";
}

function saveCart() {
  const cartItems = Array.from(cartContainer.children).map(getCartItemData);
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

function getCartItemData(item) {
  const flowerId = item.dataset.flowerId;
  const quantity = parseInt(
    item.querySelector(".quantity span.value").textContent,
    10
  );
  return { flowerId, quantity };
}

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.forEach(({ flowerId, quantity }) => addToCart(flowerId, quantity));
  updateTotalQuantity();
}

function addToCart(flowerId, quantity = 1) {
  const selectedFlower = flowerData.find((flower) => flower.id === flowerId);
  const existingCartItem = Array.from(cartContainer.children).find(
    (item) => item.dataset.flowerId === String(flowerId)
  );

  if (existingCartItem) {
    incrementQuantity(existingCartItem);
  } else {
    const cartItem = createCartItem(selectedFlower, flowerId, quantity);
    cartContainer.appendChild(cartItem);
  }

  updateTotalQuantity();
  saveCart();
}

function createCartItem(selectedFlower, flowerId, quantity) {
  const cartItem = document.createElement("div");
  cartItem.className = "item";
  cartItem.dataset.flowerId = flowerId;
  cartItem.innerHTML = `
      <img class="itemImage" src="${selectedFlower.image}" alt="${selectedFlower.name}">
      <div class="info">
          <div class="name">${selectedFlower.name}</div>
          <div class="price">$${selectedFlower.price} / 1 product</div>
      </div>
      <div class="quantity">
          <button onclick="decrementQuantity(${flowerId})">-</button>
          <span class="value">${quantity}</span>
          <button onclick="incrementQuantity(${flowerId})">+</button>
      </div>
    `;
  return cartItem;
}

function incrementQuantity(flowerId) {
  const cartItem = Array.from(cartContainer.children).find(
      (item) => item.dataset.flowerId === String(flowerId)
  );
  const quantityElement = cartItem.querySelector(".quantity span.value");
  const quantity = parseInt(quantityElement.textContent, 10) + 1;
  quantityElement.textContent = quantity;

  updateTotalQuantity();
  saveCart();
}

function decrementQuantity(flowerId) {
  const cartItem = Array.from(cartContainer.children).find(
      (item) => item.dataset.flowerId === String(flowerId)
  );
  const quantityElement = cartItem.querySelector(".quantity span.value");
  let quantity = parseInt(quantityElement.textContent, 10);

  if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
  } else {
      cartContainer.removeChild(cartItem);
  }

  updateTotalQuantity();
  saveCart();
}

function updateTotalQuantity() {
  const totalQuantity = Array.from(
    document.querySelectorAll("#cartItems .quantity span.value")
  ).reduce(
    (total, quantityElement) =>
      total + parseInt(quantityElement.textContent, 10),
    0
  );
  totalQuantityElement.textContent = totalQuantity;
}
