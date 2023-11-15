const flowerItemsContainer = document.getElementById('flower-card');
const cartContainer = document.getElementById('cartItems');
const totalQuantityElement = document.querySelector('.totalQuantity');
let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let close = document.querySelector('.close');



iconCart.addEventListener('click', function(){
    if(cart.style.right == '-100%'){
        cart.style.right = '0';
        container.style.transform = 'translateX(-400px)';
    }else{
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    }
})
close.addEventListener('click', function (){
    cart.style.right = '-100%';
    container.style.transform = 'translateX(0)';
})

// Load the cart from localStorage when the page loads
document.addEventListener('DOMContentLoaded', function () {
    loadCart();
});

// Save the cart to localStorage
function saveCart() {
    const cartItems = Array.from(cartContainer.children).map(item => {
        return {
            flowerId: item.dataset.flowerId,
            quantity: parseInt(item.querySelector('.quantity span.value').textContent, 10)
        };
    });

    localStorage.setItem('cart', JSON.stringify(cartItems));
}

// Load the cart from localStorage
function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartItems.forEach(item => {
        addToCart(item.flowerId, item.quantity);
    });

    updateTotalQuantity();
}

function addToCart(flowerId) {
    const selectedFlower = flowerData.find(flower => flower.id === flowerId);

    // Check if the selected flower is already in the cart
    const existingCartItem = Array.from(cartContainer.children).find(
        item => item.dataset.flowerId === String(flowerId)
    );

    if (existingCartItem) {
        // If the flower is already in the cart, increment the quantity
        const quantityElement = existingCartItem.querySelector('.quantity span.value');
        let quantity = parseInt(quantityElement.textContent, 10);
        quantity++;
        quantityElement.textContent = quantity;
    } else {
        // If the flower is not in the cart, add a new item
        const cartItem = document.createElement('div');
        cartItem.className = 'item';
        cartItem.dataset.flowerId = flowerId;
        cartItem.innerHTML = `
            <img src="${selectedFlower.image}" alt="${selectedFlower.name}">
            <div class="content">
                <div class="name">${selectedFlower.name}</div>
                <div class="price">$${selectedFlower.price} / 1 product</div>
            </div>
            <div class="quantity">
                <button onclick="decrementQuantity(${flowerId})">-</button>
                <span class="value">1</span>
                <button onclick="incrementQuantity(${flowerId})">+</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    }

    updateTotalQuantity(); // Call the function to update the total quantity
    saveCart();
}

// Function to increment the quantity
function incrementQuantity(flowerId) {
    const cartItem = Array.from(cartContainer.children).find(
        item => item.dataset.flowerId === String(flowerId)
    );

    if (cartItem) {
        const quantityElement = cartItem.querySelector('.quantity span.value');
        let quantity = parseInt(quantityElement.textContent, 10);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalQuantity(); // Call the function to update the total quantity
    }
}


// Function to decrement the quantity
function decrementQuantity(flowerId) {
    const cartItem = Array.from(cartContainer.children).find(
        item => item.dataset.flowerId === String(flowerId)
    );

    if (cartItem) {
        const quantityElement = cartItem.querySelector('.quantity span.value');
        let quantity = parseInt(quantityElement.textContent, 10);

        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
        } else {
            // If the quantity is 0, remove the item from the cart
            cartContainer.removeChild(cartItem);
        }

        updateTotalQuantity(); // Call the function to update the total quantity
    }
}

// Function to update the total quantity and display it
function updateTotalQuantity() {
    const totalQuantityElement = document.querySelector('.totalQuantity');
    const totalQuantity = Array.from(document.querySelectorAll('#cartItems .quantity span.value')).reduce(
        (total, quantityElement) => total + parseInt(quantityElement.textContent, 10),
        0
    );

    totalQuantityElement.textContent = totalQuantity;
}