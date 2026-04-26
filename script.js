let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
  toggleCart(true); // open cart when item added
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach((item, i) => {
    cartItems.innerHTML += `
      <li>
        ${item.name} - Rs ${item.price}
        <button onclick="removeFromCart(${i})">X</button>
      </li>
    `;
  });
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('total').innerText = 'Total: Rs ' + total;
  document.getElementById('cart-count').innerText = cart.length;
}

function toggleCart(open) {
  const panel = document.getElementById('cart-panel');
  if (open) {
    panel.classList.add('active');
  } else {
    panel.classList.remove('active');
  }
}

function goToCart() {
  alert("Go to cart page (future implementation).");
}

function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  const message = cart.map(item => `${item.name} - Rs ${item.price}`).join("\n");
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const notes = document.getElementById('order-notes').value;
  const finalMessage = `🛍️ My Cart:\n${message}\n\nTotal: Rs ${total}\nNotes: ${notes}`;
  const phoneNumber = "923146604294"; // apna WhatsApp number likho
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
  window.open(url, "_blank");
}
