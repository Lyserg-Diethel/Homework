const cartProducts = document.querySelector('.cartProducts');
const bodyVar = document.querySelector('body');
let localJsonStorage;
let cartObjStorage = [];

fetch("https://raw.githubusercontent.com/ProgressBG-WWW-Courses/JavaScript-Advanced/gh-pages/downloads/products.json")
.then(function(response) {
    responseText = response.text;
    return response.text();
})
.then(function(retRespText){
    localJsonStorage = JSON.parse(retRespText);
    populateStore(localJsonStorage);
})

const populateStore = function(localJsonStorage){
	for(obj of localJsonStorage){
	  CreateAndFillTile(obj);
	}
}

const CreateAndFillTile = function(obj, targetLocation = bodyVar){
	let newTile = document.createElement('div');
	let newNameHolder = document.createElement('div');
	let newPriceHolder = document.createElement('div');
	
	newTile.style.backgroundImage = `url(${obj.image.small})`;

	newPriceHolder.textContent = `Price: ${obj.price} BGN`;
	newNameHolder.textContent = obj.name;

	newTile.classList.add('product');
	newNameHolder.classList.add('product-title');
	newPriceHolder.classList.add('product-title');

	newTile.appendChild(newNameHolder);
	newTile.appendChild(newPriceHolder);
	targetLocation.appendChild(newTile);

	newTile.objPointer = obj;
	newTile.objPointer.inCart ? newTile.objPointer.inCart = true : newTile.objPointer.inCart = false; //Checks if the obj is in the cart, to know if to remove.
	
	newTile.addEventListener('click', ShoppingCartInteractionHandler);
}

const ShoppingCartInteractionHandler = function(){
	const productID = this.objPointer.id;

	if(isItemInCart(productID)){	//change to target via te .inCart true or false property?
		console.log('item present');
	}else{
		console.log(isItemInCart(productID));
		console.log('adding to cart');
		CreateAndFillTile(this.objPointer, cartProducts);
		cartObjStorage.push(this.objPointer); //add to in-cart array for comparison.
		this.classList.add('inCart');
	}

	console.log(this.objPointer);
}

const isItemInCart = function(id){
	for(let i=0; i<cartObjStorage.length; i+=1){
			console.log('id:' + id);
			console.log('obj.id:' + obj.id);

			if(cartObjStorage[i].id === id){
				console.log('item is in cart');
				return true;
			}		
	}
	return false;
		
		//Check, then return true or false
}

const addToCart = function(item){}