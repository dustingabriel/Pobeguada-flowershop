const flowerData = [
    {
        "id": 1,
        "name": "Roses",
        "price": 2000,
        "image": "img/redrose.png"
    },
    {
        "id": 2,
        "name": "Sunflower",
        "price": 2220,
        "image": "img/sunflower.png"
    },
    {
        "id": 3,
        "name": "Product 3",
        "price": 250,
        "image": "images/3.webp"
    }
    ,
    {
        "id": 4,
        "name": "Product 4",
        "price": 420,
        "image": "images/4.webp"
    },
    {
        "id": 5,
        "name": "Product 5",
        "price": 120,
        "image": "images/5.webp"
    },
    {
        "id": 6,
        "name": "Product 6",
        "price": 120,
        "image": "images/6.webp"
    },
    {
        "id": 7,
        "name": "Product 6",
        "price": 120,
        "image": "images/6.webp"
    },
    {
        "id": 8,
        "name": "Product 6",
        "price": 120,
        "image": "images/6.webp"
    }
]


const productContainers = [...document.querySelectorAll('.product-container')]
const nxtBtn = [...document.querySelectorAll('.nxt-btn')]
const preBtn = [...document.querySelectorAll('.pre-btn')]

function addToCart(flowerId) {
    const selectedFlower = flowerData.find(flower => flower.id === flowerId);
    if (selectedFlower) {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${selectedFlower.name} - ${selectedFlower.price} INR`;
        cartContainer.appendChild(cartItem);
    }
}
// Function to render flower data
function renderFlowers() {
    // Target the flower-card div
    const flowerContainer = document.getElementById('flower-card');

    // Check if the container exists
    if (flowerContainer) {
        // Map through the JSON data and create HTML for each flower item
        const flowerHTML = flowerData.map((flower) => `
            <div class="product-card">
                <div class="product-image">
                    <a href="product-${flower.id}.html">
                        <img src="${flower.image}" class="product-thumb" alt="" />
                    </a>
                    <button class="card-btn" onclick="addToCart(${flower.id})">Add to Cart</button>
                </div>
                <div class="product-info">
                    <h2>${flower.name}</h2>
                    <span class="price">₱${flower.price}</span>
                </div>
            </div>
            `
        ).join('');

        // Set the inner HTML of the flower-card div with the generated HTML
        flowerContainer.innerHTML = flowerHTML;
    }
}


productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// Call the renderFlowers function to render the flowers on page load
document.addEventListener('DOMContentLoaded', function () {
    console.log("panget si dacio")
    renderFlowers()
});

