var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemPrice = Math.floor(Math.random()*100)
 cart.push(new Object({[item]: itemPrice}))
console.log(`${item} has been added to your cart.`)
return cart
}

function viewCart() {
  // write your code here
  if (cart.length >= 1) {
    var list = []
    var pretext = "In your cart, you have"
    if (cart.length === 1) {
console.log(`${pretext} ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`);
        return (`${pretext} ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`)
    } if (cart.length === 2) {
      console.log(`${pretext} ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`)
      return (`${pretext} ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`)
      } else {
          for (let i = 0; i < cart.length; i++) {
            if (i < cart.length - 1) {
         list.push(` ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`)
          } else {
          list.push(` and ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}.`)
          }
        }
           console.log(`${pretext}${list}`)
          return (`${pretext}${list}`)
      }

    } else {
    console.log(`Your shopping cart is empty.`)
    return `Your shopping cart is empty.`
  }
}
function total() {
  // write your code here
  var list = []
  for (let i = 0; i < cart.length; i++) {
    list.push(cart[i][Object.keys(cart[i])[0]])
  }
  list.reduce((a, b) => a + b, 0);
  console.log(list[0])
  return list[0]
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
