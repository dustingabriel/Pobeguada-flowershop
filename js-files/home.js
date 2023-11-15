/*--Flower Data--*/
const flowerData = [
    {
        "id": 1,
        "name": "Hydrangea",
        "price": 1999,
        "image": "img/hydrangea.png",
        "shortDes":"The hydrangea flower is a symbol of appreciation, elegance, and beauty. The lavish amount of blooms and the spacious spherical shape also give off an aura of abundance. Its hues symbolize peace, harmony, and love. This stunning bouquet of hydrangea flowers is sure to make anyone smile, no matter the occasion!"
    },
    {
        "id": 2,
        "name": "Roses",
        "price": 2220,
        "image": "img/redrose.png",
        "shortDes":"A classic choice for expressing love and passion, red roses are often used to convey deep emotions on special occasions like anniversaries and Valentine's Day."
    },
    {
        "id": 3,
        "name": "Tulip",
        "price": 3299,
        "image": "img/tulip.png",
        "shortDes":"Tulips come in various colors, each carrying its own significance. For instance, red tulips convey love, while yellow tulips represent cheerful thoughts, making them versatile for different occasions."
    }
    ,
    {
        "id": 4,
        "name": "Sunflower",
        "price": 2199,
        "image": "img/sunflower.png",
        "shortDes":"Bright and cheerful, sunflowers symbolize happiness and adoration, making them an ideal gift for birthdays or to uplift someone's spirits"
    },
    {
        "id": 5,
        "name": "Wildflower",
        "price": 1499,
        "image": "img/wildflower.png",
        "shortDes":"Comprising a mix of wildflowers, this rustic bouquet is a symbol of simplicity and natural beauty, often used for outdoor weddings and casual gatherings."
    },
    {
        "id": 6,
        "name": "Bonsai Tree",
        "price": 9999,
        "image": "img/bonsai.png",
        "shortDes":"Bonsai trees are miniature versions of larger trees and are associated with patience and tranquillity. They're often gifted for their aesthetic and symbolic value."
    },
    {
        "id": 7,
        "name": "Fiddle Leaf Tree",
        "price": 750,
        "image": "img/fiddle.png",
        "shortDes":"Known for its large, violin-shaped leaves, this indoor plant adds a touch of elegance to any room, making it a popular choice for home decor."
    },
    {
        "id": 8,
        "name": "Orchid",
        "price": 650,
        "image": "img/orchid.png",
        "shortDes":"Orchids are renowned for their beauty and elegance. They are a popular choice for special occasions and can bloom for an extended period with proper care."
    },
    {
        "id": 9,
        "name": "Snake Plant",
        "price": 780,
        "image": "img/snake.png",
        "shortDes":"Also called \"mother-in-law's tongue,\" this hardy plant is known for its air-purifying qualities and striking vertical leaves, making it suitable for offices and homes"
    },
    {
        "id": 10,
        "name": "Succulent Collection",
        "price": 460,
        "image": "img/succulent.png",
        "shortDes":"Succulents are low-maintenance and come in various shapes and colors, making them perfect for those new to plant care or as desk decor."
    },
    {
        "id": 11,
        "name": "Book Lover's Gift Set",
        "price": 2499,
        "image": "img/booklover.png",
        "shortDes":"It may contain a collection of books, a reading lamp, and cosy blankets, making it a thoughtful gift for avid readers and bookworms"
    },
    {
        "id": 12,
        "name": "Gourmet Food Gift Set",
        "price": 1699,
        "image": "img/gourmet.png",
        "shortDes":"This gift set is filled with a selection of gourmet foods, such as chocolates, cheeses, and fine wines, perfect for food enthusiasts and special occasions."
    },
    {
        "id": 13,
        "name": "New Parent's Gift Set",
        "price": 2399,
        "image": "img/newparent.png",
        "shortDes":"Designed for new parents, it could include baby clothes, diapers, baby care products, and a heartfelt card to celebrate the arrival of a newborn plants"
    },
    {
        "id": 14,
        "name": "Spa Gift Set",
        "price": 1999,
        "image": "img/spagift.png",
        "shortDes":"A spa gift set typically includes bath salts, essential oils, scented candles, and other relaxation items, making it a great choice for someone in need of self-care."
    },
    {
        "id": 15,
        "name": "Travel Gift Set",
        "price": 1999,
        "image": "img/travel.png",
        "shortDes":"Ideal for travellers, this set includes items like a passport holder, travel-sized toiletries, and a stylish luggage tag, ensuring a smooth journey."
    }
]

// Function to render all flower data
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

// Call the renderFlowers function to render the flowers on page load
document.addEventListener('DOMContentLoaded', function () {
    renderFlowers()
});

// Function to render specific flower data

function renderFlowerDetailsById(flowerId) {
    const flower = flowerData.find(flower => flower.id === flowerId);
    const flowerDetailsContainer = document.getElementById('flower-detail');

    if (flowerDetailsContainer && flower) {
        const flowerHTML = `
            <section class="product-details">
                <div class="product-images">
                    <img src="${flower.image}" class="active" alt=""/>
                </div>
                <div class="details">
                    <h2 class="product-brand">${flower.name}</h2>
                    <p class="product-short-des">${flower.shortDes}</p>
                    <span class="product-price">₱${flower.price}</span>

                    <a href="checkout.html" class="btn cart-btn" onclick="buyNow(${flower.id})" >buy now</a>
                    <button class="btn" onclick="addToCart(${flower.id})">add to cart</button>
                </div>
            </section>
        `;

        flowerDetailsContainer.innerHTML = flowerHTML;
    }
}

// Function to render flower data by range 

function renderFlowersInRange(startId, endId) {
    const flowerDetailsContainer = document.getElementById('flower-details');

    if (flowerDetailsContainer) {
        // Filter flowerData based on the provided range
        const flowersInRange = flowerData.filter(flower => flower.id >= startId && flower.id <= endId);

        // Generate HTML for each flower in the specified range
        const flowerHTML = flowersInRange.map(flower => `    
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
        
        `).join('');

        // Set the inner HTML of the flower-details div with the generated HTML
        flowerDetailsContainer.innerHTML = flowerHTML;
    }
}

/* Function to render 7 random product card from the data */
function renderRandomProducts(numProducts) {
    const flowerContainer = document.getElementById('featured-products');

    if (flowerContainer) {
        // Shuffle the flowerData array to get random products
        const shuffledData = flowerData.sort(() => Math.random() - 0.5);

        // Take the first numProducts from the shuffled array
        const selectedProducts = shuffledData.slice(0, numProducts);

        // Generate HTML for each selected product
        const productHTML = selectedProducts.map(product => `
            <div class="product-card">
                <div class="product-image">
                    <a href="product-${product.id}.html"><img src="${product.image}" class="product-thumb" alt=""></a>
                    <button class="card-btn"onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">${product.name}</h2>
                    <span class="price">₱${product.price}</span>
                </div>
            </div>
        `).join('');

        // Set the inner HTML of the flower-details div with the generated HTML
        flowerContainer.innerHTML = productHTML;
    }
}

/*--------------------------------------------------------------------------------*/

