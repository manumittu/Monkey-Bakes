document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || {};
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');

    function updateCartDisplay() {
        cartItemsDiv.innerHTML = '';
        const ul = document.createElement('ul');
        let total = 0;

        for (const [product, details] of Object.entries(cartItems)) {
            const li = document.createElement('li');
            li.classList.add('cart-item');
            li.innerHTML = `
                <span>${details.name}</span>
                <span class="quantity-controls">
                    <button onclick="decreaseQuantity('${product}')">-</button>
                    <span>${details.quantity}</span>
                    <button onclick="increaseQuantity('${product}')">+</button>
                </span>
                <span>Price: $${details.price}</span>
                <span>Total: $${(details.quantity * details.price).toFixed(2)}</span>
            `;
            ul.appendChild(li);
            total += details.quantity * details.price;
        }
        cartItemsDiv.appendChild(ul);
        cartTotalDiv.innerHTML = `<p>Total: $${total.toFixed(2)}</p>`;
    }

    window.increaseQuantity = function(product) {
        cartItems[product].quantity++;
        localStorage.setItem('cart', JSON.stringify(cartItems));
        updateCartDisplay();
    }

    window.decreaseQuantity = function(product) {
        if (cartItems[product].quantity > 1) {
            cartItems[product].quantity--;
        } else {
            delete cartItems[product];
        }
        localStorage.setItem('cart', JSON.stringify(cartItems));
        updateCartDisplay();
    }

    function checkout() {
        alert('Proceeding to checkout...');
        localStorage.removeItem('cart');
        window.location.href = '/Users/kanishkrungta/Desktop/Monkey Bakes/Review/review.html'; 
    }

    window.checkout = checkout;
    
    updateCartDisplay();
});
