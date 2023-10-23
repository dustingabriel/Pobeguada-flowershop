const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">about us</li>
            <li><a href="#" class="footer-link">facebook page</li>
            <li><a href="#" class="footer-link">Twitter</li>
            <li><a href="#" class="footer-link">LinkedIn</li>
            <li><a href="#" class="footer-link"></li>
            </ul>
            
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Omnis praesentium esse neque, ipsum dolorum blanditiis quos suscipit voluptatem facilis. 
    Suscipit libero repudiandae nemo est ut dolor rem eligendi voluptatibus quod.</p>
    `;
}

createFooter();