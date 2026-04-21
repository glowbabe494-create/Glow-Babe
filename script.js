function sendOrder() {
  let orderText = document.getElementById("orderDetails").value;
  let whatsappUrl = "https://wa.me/923146604294?text=" + encodeURIComponent(orderText);
  window.open(whatsappUrl, "_blank");
}
