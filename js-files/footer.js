const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">about us</li>
            <li><a href="#" class="footer-link">Facebook page</li>
            <li><a href="#" class="footer-link">Twitter</li>
            <li><a href="#" class="footer-link">LinkedIn</li>
            </ul>
            
        </div>
    </div>
    <p class="footer-title">about Group</p>
    <p class="info">We are the Pobeguada group from NU fairview.The creator of this website for the final requirements of our Software Design course.</p>
    `;
}

createFooter();