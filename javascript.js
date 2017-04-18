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
var total=0;
groceryList.forEach(function(item){
    total +=item.price;
    console.log(item.name);
});

console.log('subtotal = '+ total);

console.log('Total='+ total * 1.06); 