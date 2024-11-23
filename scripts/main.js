// Filtro de búsqueda
document.getElementById('search').addEventListener('input', function() {
    let searchQuery = this.value.toLowerCase();
    let products = document.querySelectorAll('.producto');
    
    products.forEach(function(product) {
        let productName = product.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(searchQuery)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Carrito de compras
let cart = [];
function addToCart(product) {
    cart.push(product);
    displayCart();
}
function displayCart() {
    let cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';
    cart.forEach(function(item, index) {
        cartContainer.innerHTML += `<p>${item.name} - S/ ${item.price} <button onclick="removeFromCart(${index})">Eliminar</button></p>`;
    });
}
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}
