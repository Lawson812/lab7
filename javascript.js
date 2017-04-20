/*list of groceries and prices inside of "groceryList" object. Subtotal variable defined*/
var groceryList = [
    {
        name:'Wine',
        price:35.88,
    },{
        name:'Cheese',
        price:2.19,
    },{
        name:'Eggs',
        price:1.89,
    },{
        name:'Butter',
        price:1.29,
    },{
        name:'Bacon',
        price:4.99,
    },{
        name:'Bread',
        price:2.39,
    },{
        name:'Rice',
        price:3.09,
    },{
        name:'Potatoes',
        price:2.79,
    },{
        name:'Water',
        price:3.39,
    },{
        name:'Apples',
        price:11.99,
    }
];
var subtotal=0;
/*forEach loop to iteration and add prices from "groceryList" object*/
groceryList.forEach(function(item){
    subtotal +=item.price;
});


var tax = subtotal *0.06;
var total=subtotal + tax;

/*heading*/

var heading = document.createElement('div');
heading.className=('heading');
document.body.appendChild(heading);
/*h1*/
var h1=document.createElement('h1');
h1.innerHTML='My Shopping List';
h1.className=('h1');
heading.appendChild(h1);
/* shopping list body div*/

var myFood = document.createElement('div');
myFood.className=('myFood');
document.body.appendChild(myFood);

/*Items list*/

var grocItems =
document.createElement('ul');
grocItems.className=('grocItems');
myFood.appendChild(grocItems);

/*price list*/

var grocPrice=
document.createElement('ul');
grocPrice.className=('grocPrice');
myFood.appendChild(grocPrice);

/* hr Element*/

var horizontalRule =
document.createElement('hr');
horizontalRule.className=('hr');
myFood.appendChild(horizontalRule);

/*grocery list from "groceryList" object*/

groceryList.forEach(function(item){
    var itemName=document.createElement('li');
    itemName.innerText=item.name;
    itemName.className=('itemName')
    grocItems.appendChild(itemName);
});

/*grocery prices from "groceryList" object*/

groceryList.forEach(function(item){
    var itemPrice=document.createElement('ul');
    itemPrice.innerText=item.price;
    itemPrice.className=('itemPrice')
    grocPrice.appendChild(itemPrice);
});

/*tax and total variables*/
/*tax and total variables*/
var tax= subtotal* 0.06;
var total=subtotal + tax;

var line1 = document.createElement('p');
line1.innerHTML ='Subtotal ';
line1.className=('line1');
myFood.appendChild(line1);

var itemSubtotal=document.createElement('p');
itemSubtotal.innerHTML=subtotal;
itemSubtotal.className=('subtotal');
myFood.appendChild(itemSubtotal);

var linebreak = document.createElement("br");
myFood.appendChild(linebreak); 

var line2 = document.createElement('p');
line2.innerHTML ='Tax ';
line2.className=('line2');
myFood.appendChild(line2);
                   

var salesTax = document.createElement('p');
salesTax.innerHTML=tax.toFixed(2);
salesTax.className=('salesTax')
myFood.appendChild(salesTax);


var linebreak = document.createElement("br");
myFood.appendChild(linebreak);

var line3 = document.createElement('p');
line3.innerHTML ='Total ';
line3.className=('line3');
myFood.appendChild(line3);



var finalTotal = document.createElement('p');
finalTotal.innerHTML=total.toFixed(2);
finalTotal.className=('finalTotal');
myFood.appendChild(finalTotal);