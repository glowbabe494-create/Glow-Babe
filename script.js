let cart = [];

// Add item to cart
function addToCart(name, price, image) {
  let existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1, image: image });
  }
  renderCart();
  toggleCart(true);
}

// Remove item
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

// Render cart
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach((item, i) => {
    cartItems.innerHTML += `
