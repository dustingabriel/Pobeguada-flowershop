const productImages = document.querySelectorAll(".product-images img");
const productImagesSlide = document.querySelector(".image slider");

let activeImageSlide = 0;

productImages.forEach((item, i) => {
    item.addEventListener.addEventListener('click',() => {
            productImages[activeImageSlide].classList.remove('active');
            item.classList.add('active');
            productImagesSlide.computedStyleMap.backgroundImage = url('${item.src}');
    })
})