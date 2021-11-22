console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

a = 3;




function addItem(item){
    basket = basket.push(item)
return true;
}

addItem('novel');
addItem('textbook');





/*
- Create a function called `addItem`. It should:
  - take an input parameter for a string `item`
  - add the new item to the global array `basket`. 
  - return `true` indicating the item was added
  */