function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity = Number(existingItem.quantity || 1) + 1;
    } else {
        cart.push({ name: name, price: price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " added to cart!");
}

function goToCart() {
    window.location.href = "cart.html";
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartCount = document.getElementById("cart-count");

    if (cartCount) {
        const quantityTotal = cart.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0);
        cartCount.innerText = quantityTotal;
    }
}

function showCategory(category, btn){
    let foods = document.querySelectorAll(".food");
    let buttons = document.querySelectorAll(".peel");
    let sectionTitles = {
        meals: "Meals",
        fastfood: "Fast Food",
        drinks: "Drinks",
        desserts: "Desserts"
    };

    foods.forEach(food => {
        if (food.classList.contains(category)) {
            food.style.display = "block";
        } else {
            food.style.display = "none";
        }
    });

    if (btn) {
        buttons.forEach(button => {
            button.classList.remove("active");
        });

        btn.classList.add("active");
    }

    const headingText = sectionTitles[category];
    if (headingText) {
        const targetSection = Array.from(document.querySelectorAll(".section-title")).find(title => title.textContent.trim() === headingText);

        if (targetSection) {
            const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
    }
}


function logout(){
    alert("Logged out!");

}
    updateCartCount();
