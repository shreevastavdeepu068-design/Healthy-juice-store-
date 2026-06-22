function orderViaWhatsApp(item, price) {
    let phone = "917827543597";
    let url = `https://wa.me/${phone}?text=Hello, I want to order ${item} for ₹${price}`;
    window.open(url, '_blank');
}
