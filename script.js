let cart = [];

function addToCart(name, price, image) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ name, price, image, quantity: 1 });
  }
  renderCart();
  toggleCart(true);
}

function updateQuantity(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach((item, i) => {
    cartItems.innerHTML += `
      <li>
        <div class="cart-item-info">
          <img src="${item.image}" alt="${item.name}">
          <span>${item.name} - Rs ${item.price}</span>
        </div>
        <div class="quantity-controls">
          <button onclick="updateQuantity(${i}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity(${i}, 1)">+</button>
        </div>
      </li>
    `;
  });
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById('total').innerText = 'Total: Rs ' + total;
  document.getElementById('cart-count').innerText = cart.length;
}

function toggleCart(open) {
  const panel = document.getElementById('cart-panel');
  if (open) panel.classList.add('active');
  else panel.classList.remove('active');
}
