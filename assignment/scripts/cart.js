console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

//function to add items to the basket
function addItem(item){
    item = String(item);
    let output = true;
    if (isFull() === false ){
        newBasket = basket.push(item); // add new items to basket
    } else {
        output = false;
        console.log('Basket is full'); // check to make sure else statement runs when basket is filled
    }
    return output;
}

//function to empty basket
function empty(){
    basket = [];  // reset the 'basket' to an empty array
    return basket;
 }
console.log('Check to see if the basket is empty', basket);


// function to check if basket is full or not
function isFull() {
    let basketSize = true;
    if ( basket.length < maxItems){ 
        basketSize = false;
    }
    return basketSize;
}

// function to list items in basket
function listItems(){
    for(x of basket){
       console.log(x);
   }
   return basket;
}

// Checks
console.log('Expect to see "true";', addItem('novel'));
console.log('Expect to see "true";', addItem('textbook'));
console.log('Expect to see "true";', addItem(4));
console.log('Expect to see "true";', addItem(true)); // couldn't figure out how to reject non-string parameters


/* Create a function called `removeItem`. It should:
  - Take an input parameter for a string `item`
  - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
  - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
  - Return the item removed or `null` if the item was not found 
  */

