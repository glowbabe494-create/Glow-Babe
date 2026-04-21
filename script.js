function sendOrder() {
  let email = document.getElementById("email").value;
  let newsletter = document.getElementById("newsletter").checked ? "Yes" : "No";
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let postal = document.getElementById("postal").value;
  let phone = document.getElementById("phone").value;

  let orderText =
    "New Order Details:%0A" +
    "Email: " + email + "%0A" +
    "Newsletter: " + newsletter + "%0A" +
    "Name: " + fname + " " + lname + "%0A" +
    "Address: " + address + ", " + city + "%0A" +
    "Postal: " + postal + "%0A" +
    "Phone: " + phone;

  let whatsappUrl = "https://wa.me/923146604294?text=" + orderText;
  window.open(whatsappUrl, "_blank");
}
