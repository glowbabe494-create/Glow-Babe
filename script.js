let cart = [];

function addToCart(product, price) {
  cart.push({product, price});
  alert(product + " added to cart!");
}

function checkout() {
  let message = "Order:\n";
  cart.forEach(item => {
    message += item.product + " - Rs." + item.price + "\n";
  });
  window.open("https://wa.me/923001234567?text=" + encodeURIComponent(message));
}
