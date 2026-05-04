let cart = [];

function addToCart(name, price) {
  let existing = cart.find(item => item.name === name);
  if (existing) { existing.qty += 1; }
  else { cart.push({ name, price, qty: 1 }); }
  renderCart();
  toggleCart(true);
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
      <li>${item.name} x${item.qty} - Rs ${item.price * item.qty}
      <button onclick="removeFromCart(${i})">✖</button></li>`;
  });
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById('total').innerText = 'Total: Rs ' + total;
  document.getElementById('cart-count').innerText = cart.reduce((sum, item) => sum + item.qty, 0);
}

function toggleCart(open) {
  const panel = document.getElementById('cart-panel');
  if (open) panel.classList.add('active');
  else panel.classList.remove('active');
}

document.querySelector('.close-btn').addEventListener('click', () => toggleCart(false));

function checkoutWhatsApp() {
  if (cart.length === 0) { alert("Cart is empty!"); return; }
  let message = cart.map(item => `${item.name} (x${item.qty}) - Rs ${item.price * item.qty}`).join("\n");
  let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  let notes = document.getElementById('order-notes').value;
  let finalMessage = `🛍️ GlowBabe Order\n\n${message}\n\n💰 Total: Rs ${total}\n📝 Notes: ${notes}`;
  let phoneNumber = "923146604294"; // apna WhatsApp number
  let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
  window.open(url, "_blank");
}
