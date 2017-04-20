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
//    console.log(item.name);
});
var tax= subtotal* 0.06;
var total=subtotal + tax;

var heading = document.createElement('div');
heading.className=('heading');
document.body.appendChild(heading);

var myFood = document.createElement('div');
myFood.className=('myFood');
document.body.appendChild(myFood);

var grocItems =
document.createElement('ul');
grocItems.className=('grocItems');
myFood.appendChild(grocItems);

var grocPrice=
document.createElement('ul');
grocPrice.className=('grocPrice');
myFood.appendChild(grocPrice);

groceryList.forEach(function(item){
    var itemName=document.createElement('li');
    itemName.innerText=item.name;
    itemName.className=('itemName')
    grocItems.appendChild(itemName);
});

groceryList.forEach(function(item){
    var itemPrice=document.createElement('ul');
    itemPrice.innerText=item.price;
    itemPrice.className=('itemPrice')
    grocPrice.appendChild(itemPrice);
});

