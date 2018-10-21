/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log('load');
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
  console.log('render');
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
//=========== try to get table body call =============
  // TODO: Find the table body
  // TODO: Iterate over the items in the cart
  for (var i = 0; i<cart.items.items.length; i++) {
    // TODO: Create a TR
    var trEl = document.createElement('tr');
    // TODO: Create a TD for the delete link, quantity,  and the item
    for (var f=0; f<3; f++){
      var tdEl= document.createElement('td');
      if (f === 0){
        tdEl.textContent=('X');
        trEl.appendChild(tdEl);
      }
      if (f === 1){
        tdEl.textContent = (cart.items.items[i].quantity);
        trEl.appendChild(tdEl);
      }else{
        tdEl.textContent = (cart.items.items[i].product.name);
        trEl.appendChild(tdEl);
      }
    }
    table.appendChild(trEl);
    console.log('show');
  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
