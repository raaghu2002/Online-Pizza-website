const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});

let cart = [];
let total = 0;

function addToCart(pizzaName, price) {
  cart.push({ name: pizzaName, price: price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  total = 0;

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name}: ${item.price} Rupees`;
    cartList.appendChild(listItem);
    total += item.price;
  });

  document.getElementById('total').textContent = total;
}

function checkout() {
  // Implement checkout functionality, e.g., sending order details to a server
  alert(`Total amount: ${total} Rupees. Order placed!`);
  cart = [];
  total = 0;
  updateCart();
}
