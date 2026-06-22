const menu = [
    { name: "Orange Juice", price: 40 },
    { name: "Mango Shake", price: 50 },
    { name: "Mix Fruit", price: 60 }
];

function renderMenu() {
    const container = document.getElementById('product-container');
    container.innerHTML = menu.map((item, index) => `
        <div class="card">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button class="add-btn" onclick="addToCart('${item.name}')">Add +</button>
        </div>
    `).join('');
}
renderMenu();

let cart = [];
function addToCart(name) {
    cart.push(name);
    document.getElementById('cart-count').innerText = cart.length + " items";
    // Blinkit animation effect
    event.target.innerText = "Added!";
    setTimeout(() => event.target.innerText = "Add +", 1000);
}

function openCheckout() {
    window.location.href = `https://wa.me/917827543597?text=Order: ${cart.join(', ')}`;
}
