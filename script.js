// Importing module
// import { addToCart, totalPrice as price, qt } from './shoppingCart';
// // ('./shoppingCart.js');
// addToCart('bread', 5);
// console.log(price, qt);
/*
console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, qt }from './shoppingCart.js';
// add('pizza', 2);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// console.log('Start Fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);


import shoppingCart from './shoppingCart';

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPric = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
  };

  const orderStock = function (product, quantity) {
    cart.push(`${quantity} ${product} order from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPric,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(shoppingCart2.shippingCost);


//Export
export.addToCart = function (product, quantity) {
    cart.push(`${quantity, product});
    console.log(added to cart (shipping cost is ${shippingCost})`
    );
  };
*/
// import { cloneDeep } from './node_modules/loadash-es/cloneDeep.js';

import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  gretting = 'HEY';
  constructor(name) {
    this.name = name;
    console.log(`${this.gretting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find((el = el.quantity >= 2)));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

import 'regenerator-runtime/runtime';
