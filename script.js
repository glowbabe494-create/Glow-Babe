let cart = [];

// Add item to cart (with quantity system)
function addToCart(name, price) {
  let existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1; // agar same item hai to qty increase
  } else {
    cart.push({ name, price, qty: 1 });
  }
  renderCart();
  toggleCart(true);
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

// Render cart items with premium look
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach((item, i) => {
    cartItems.innerHTML += `
      <li class="cart-item">
        <div class="item-info">
          <span class="item-name">${item.name}</span>
          <span class="item-qty">x${item.qty}</span>
        </div>
        <div class="item-price">Rs ${item.price * item.qty}</div>
        <button class="remove-btn" onclick="removeFromCart(${i})">✖</button>
      </li>
    `;
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById('total').innerText = 'Total: Rs ' + total;

  const cartCount = document.getElementById('cart-count');
  cartCount.innerText = cart.reduce((sum, item) => sum + item.qty, 0);

  // bounce animation
  cartCount.classList.add("bounce");
  setTimeout(() => cartCount.classList.remove("bounce"), 500);
}

// Toggle cart panel
function toggleCart(open) {
  const panel = document.getElementById('cart-panel');
  if (open) {
    panel.classList.add('active');
  } else {
    panel.classList.remove('active');
  }
}

// Checkout via WhatsApp
function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  let message = cart.map(item => `${item.name} (x${item.qty}) - Rs ${item.price * item.qty}`).join("\n");
  let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  let notes = document.getElementById('order-notes').value;
  let finalMessage = `🛍️ GlowBabe Order\n\n${message}\n\n💰 Total: Rs ${total}\n📝 Notes: ${notes}`;
  let phoneNumber = "923146604294";
  let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
  window.open(url, "_blank");

  alert("✅ Thank you for shopping with GlowBabe! Your order has been sent to WhatsApp.");
}
