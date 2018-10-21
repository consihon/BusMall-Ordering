/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tblEl = document.getElementsByTagName('tbody');
  // TODO: Iterate over the items in the cart
  for (var i = 0; i<cart.items.length; i++) {
    // TODO: Create a TR
    var trEl = document.createElement('tr');
    tblEl.appendChild(trEl);
    // TODO: Create a TD for the delete link, quantity,  and the item
    for (var f = 0; f < 3; f++) {
      var tdEl = document.createElement('td');
      // TODO: Add the TR to the TBODY and each of the TD's to the TR
      if (f === 0){
        tdEl.textContent = ('X');
        trEl.appendChild(tdEl);
      }
      if (f === 1){
        tdEl.textContent = (cart.items[i].Product.quantity);
        trEl.appendChild(tdEl);
      }
      if (f === 2){
        tdEl.textContent = (cart.items[i].Product.name);
        trEl.appendChild(tdEl);
      }
    }
  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
