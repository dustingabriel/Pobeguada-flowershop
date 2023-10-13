const createNav = () => {
    let nav = document.querySelector('.navbar');
    
    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search product"> 
                    <a href="search.html"><input type="submit" class="search-btn" value="Search"></a>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">Anniversary</a></li>
            <li class="link-item"><a href="#" class="link">birthdays</a></li>
            <li class="link-item"><a href="#" class="link">Plants</a></li>
            <li class="link-item"><a href="#" class="link">Gift set</a></li>
        </ul>
    `;
    
}
createNav();
