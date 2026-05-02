// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("glowbabeCart")) || [];

// Render order summary
function renderSummary() {
  const summaryItems = document.getElementById("summary-items");
  summaryItems.innerHTML = '';
  cart.forEach(item => {
    summaryItems.innerHTML += `
      <li>
        <span>${item.name} (x${item.qty})</span>
        <span>Rs ${item.price * item.qty}</span>
      </li>
    `;
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById("summary-total").innerText = 'Total: Rs ' + total;
}

// Confirm order and send to WhatsApp
function confirmOrder() {
  let email = document.getElementById("email").value;
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let postal = document.getElementById("postal").value;
  let phone = document.getElementById("phone").value;
  let payment = document.getElementById("payment").value;

  let message = cart.map(item => `${item.name} (x${item.qty}) - Rs ${item.price * item.qty}`).join("\n");
  let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  let finalMessage = 
    `🛍️ GlowBabe Order\n\n` +
    `👤 Customer: ${fname} ${lname}\n📧 Email: ${email}\n📱 Phone: ${phone}\n` +
    `🏠 Address: ${address}, ${city}, ${postal}\n💳 Payment: ${payment}\n\n` +
    `📦 Order:\n${message}\n\n💰 Total: Rs ${total}`;

  let phoneNumber = "923194455289";
  let url = `https://wa.me/${923194455289}?text=${encodeURIComponent(finalMessage)}`;
  window.open(url, "_blank");

  alert("✅ Thank you for shopping with GlowBabe! Your order has been confirmed and sent to WhatsApp.");
}

// Render summary on page load
renderSummary();
