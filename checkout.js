function confirmOrder() {
  // Collect customer info
  let email = document.getElementById("email").value;
  let newsletter = document.getElementById("newsletter").checked ? "Yes" : "No";
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let postal = document.getElementById("postal").value;
  let phone = document.getElementById("phone").value;
  let payment = document.getElementById("payment").value;

  // Order summary (from cart)
  let summaryItems = cart.map(item => `${item.name} (x${item.qty}) - Rs ${item.price * item.qty}`).join("\n");
  let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // WhatsApp message
  let finalMessage = 
    `🛍️ GlowBabe Order\n\n` +
    `👤 Customer: ${fname} ${lname}\n📧 Email: ${email}\n📱 Phone: ${phone}\n` +
    `🏠 Address: ${address}, ${city}, ${postal}\n` +
    `📰 Newsletter: ${newsletter}\n💳 Payment: ${payment}\n\n` +
    `📦 Order:\n${summaryItems}\n\n💰 Total: Rs ${total}`;

  let phoneNumber = "923146604294";
  let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
  window.open(url, "_blank");

  alert("✅ Thank you for shopping with GlowBabe! Your order has been confirmed and sent to WhatsApp.");
}
