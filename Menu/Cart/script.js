let cart = JSON.parse(localStorage.getItem('cart')) || {};

function addToCart(product, price) {
    if (cart[product]) {
        cart[product].quantity++;
    } else {
        cart[product] = { name: product, quantity: 1, price: price };
    }
    updateCartQuantity();
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartQuantity() {
    const totalQuantity = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-quantity').innerText = totalQuantity;
}

function redirectToCart() {
    window.location.href = 'cart.html';
}

// Initialize cart quantity on page load
document.addEventListener('DOMContentLoaded', updateCartQuantity);
