console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
    item = String(item); // to enforce item added is a string
    let newBasket = basket.push(item);
    console.log(basket);
    if(newBasket.length > basket.length){
        newBasket = basket
    }
    return true; // only returns true if item was added to basket
}

addItem('novel');
addItem('textbook');
addItem(4);
addItem(false); // every item was added. Couldn't figure out how to reject
                // non string items

function listItems(){
     for(x of basket){
        console.log(x);
    }
    return basket;
 }

 function empty(){
    basket = [];  // reset the 'basket' to an empty array
    return basket;
 }
console.log(basket)


/*
- Create a function called `listItems`. It should:
  - loop over the items in the `basket` array
  - console.log each individual item on a new line

- Create a function called `empty`. It should:
  - reset the `basket` to an empty array
*/