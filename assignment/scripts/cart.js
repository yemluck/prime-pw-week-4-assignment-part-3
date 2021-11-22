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


