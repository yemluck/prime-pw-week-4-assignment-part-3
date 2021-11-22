console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function isFull() {
    let basketSize = true;
    if ( basket.length < maxItems){ 
        basketSize = false;
    }
    return basketSize;
}

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

console.log('Expect to see "true";', addItem('novel'));
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
console.log(basket);
