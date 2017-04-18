var groceryList = [
    {
        name:'wine',
        price:35.88,
    },{
        name:'cheese',
        price:2.19,
    },{
        name:'eggs',
        price:1.89,
    },{
        name:'butter',
        price:1.29,
    },{
        name:'bacon',
        price:4.99,
    },{
        name:'bread',
        price:2.39,
    },{
        name:'rice',
        price:3.09,
    },{
        name:'potatoes',
        price:2.79,
    },{
        name:'water',
        price:3.39,
    },{
        name:'apples',
        price:11.99,
    }
];
var subtotal=0;

groceryList.forEach(function(item){
    subtotal +=item.price;
    console.log(item.name);
});
var tax= subtotal* 0.06;
var total=subtotal + tax;
console.log('Subtotal = '+ subtotal);
console.log('Tax = '+ tax.toFixed(2));

console.log('Total = '+ total.toFixed(2)); 
console.log('Thank you for shopping at Meijer!')