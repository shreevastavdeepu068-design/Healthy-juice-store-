);let cart = [];
function addToCart(item, price) {
    cart.push({item, price});
    document.getElementById('cart-count').innerText = cart.length;
    alert(item + " added to cart!");
}
function sendToWhatsApp() {
    if(cart.length === 0) { alert("Cart is empty!"); return; }
    let msg = "Hello, I want to order: " + cart.map(i => i.item).join(", ");
    let url = "https://wa.me/917827543597?text=" + encodeURIComponent(msg);
    window.open(url, '_blank');
}
