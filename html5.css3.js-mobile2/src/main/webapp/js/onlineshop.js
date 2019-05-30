
/** enables drop-down for mobile devices only:
 * 
 * @returns
 */
function enableDropDownForMobile(elem){
	
	// https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript:
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

	if (w > 600){ //do not execute function on devices where window width < 600
		return;
	}
//	 var i;	
//	 
//	 var mainMenus = document.querySelectorAll(".dropdown .dropdownEntry"); 
//	 for (i = 0; i <mainMenus.length; i++){
//		 mainMenus[i].style = "background-color: #f9f9f9;"
//	 }
//	
//	 var submenuContainers = document.querySelectorAll(".dropdown .dropdown-content"); 
//	 for (i = 0; i <submenuContainers.length; i++){
//		 submenuContainers[i].style = "#f9f9f9;";
//	 }
//
//	 var submenus = document.querySelectorAll(".dropdown-content a"); 
//	 for (i = 0; i <submenus.length; i++){
//		 submenus[i].style = "background-color: #f1f1f1; text-decoration: none;";
//	 }
	
	
	 var dropDownContentDisplay = elem.nextElementSibling.style.display;
	 
	 if (dropDownContentDisplay == "none" || dropDownContentDisplay == ""){
		 elem.style.background = "#f9f9f9"; // this is the dropdownEntry .element
		 elem.nextElementSibling.style.display="block";
//		 for (i = 0; i <elem.nextElementSibling.children.length; i++){ // @see https://stackoverflow.com/questions/7935689/what-is-the-difference-between-children-and-childnodes-in-javascript
//			 elem.nextElementSibling.children[i].style.background = "#f1f1f1";
//		 }
	 } else  if (dropDownContentDisplay == "block"){
		 elem.style.background = "#f1f1f1";
		 elem.nextElementSibling.style.display="none";
		 
	 }
	
	
}


/**
 * sets the default values on the contact.html page
 * 
 */
function setContactDefaults() {
	document.getElementById("contactEMailRadioId").checked = true;
	document.getElementById("phoneInputId").style.display = "none";
}

/**
 * hides the contact option that is not selected on the contact.html page
 * 
 * @see https://www.w3schools.com/cssref/pr_class_display.asp
 * 
 */
function setPrefContact() {

	if (document.getElementById("contactEMailRadioId").checked) {
		document.getElementById("phoneInputId").style.display = "none";
		document.getElementById("eMailInputId").style.display = "table-row"; // Let the element behave like a <tr> element
		return;
	}

	if (document.getElementById("contactTelRadioId").checked) {
		document.getElementById("eMailInputId").style.display = "none";
		document.getElementById("phoneInputId").style.display = "table-row"; // Let the element behave like a <tr> element
		return;
	}
}

/**
 * shows the detail image of the product (called when mouse is over the product chosen)
 * 
 */

function showDetailImage(elem){
	// https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript:
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

	if (w < 600){ //do not execute function on devices where window width < 600
		return;
	}
	
	var productDetailsImage = document.getElementById("chosenProductDetailsImageId");
	if (productDetailsImage!=null){
		productDetailsImage.src = elem.firstElementChild.src;
	}
	var beachWearDetailsImage = document.getElementById("chosenBeachWearDetailsImageId");
	if (beachWearDetailsImage!=null){
		beachWearDetailsImage.src = elem.firstElementChild.src;
	}
}

/**
 * hides the detail image of the product (called when mouse is out of the product chosen)
 * 
 */
function hideDetailImage(){
	var productDetailsImage = document.getElementById("chosenProductDetailsImageId");
	if (productDetailsImage!=null){
		productDetailsImage.src = "";
	}
	var beachWearDetailsImage = document.getElementById("chosenBeachWearDetailsImageId");
	if (beachWearDetailsImage!=null){
		beachWearDetailsImage.src = "";
	}
}


/**
 * @param elem
 * @returns
 */
function setAddedToCart(elem) {
	if (elem.checked) {
		elem.nextElementSibling.innerHTML = "Added to cart!"; // the first sibling of the checkbox is the <span> element
		elem.nextElementSibling.classList.add("addedToCart"); // add a css class to an element, @see https://stackoverflow.com/a/16283612/1925356
	} else {
		elem.nextElementSibling.innerHTML = "Add to cart"; // the first sibling of the checkbox is the <span> element
		elem.nextElementSibling.classList.remove("addedToCart"); // remove a css class to an element, @see https://stackoverflow.com/a/16283612/1925356
	}

	addOrRemoveCartItem(elem);
}

/**
 * @returns
 */
function addOrRemoveCartItem(elementToAddOrRemove) {

	var cartTable = document.getElementById("cartTableId");
	var rowNo = cartTable.rows.length;

	if (elementToAddOrRemove.checked) {
		var cartTableRow1 = document.createElement("tr");
		cartTableRow1.id = "cartTableId_" + elementToAddOrRemove.id;
		cartTable.appendChild(cartTableRow1);

		var cartTableTD0 = document.createElement("td");
		cartTableTD0.innerHTML = (rowNo + 1);
		cartTableRow1.appendChild(cartTableTD0);

		var productName = document.createTextNode(elementToAddOrRemove.value);
		var cartTableTD1 = document.createElement("td");
		cartTableTD1.appendChild(productName);
		cartTableRow1.appendChild(cartTableTD1);

		var cartTableTD2 = document.createElement("td");
		var priceValue = elementToAddOrRemove.nextElementSibling.nextElementSibling.firstElementChild.innerHTML;

		var priceNode = document.createTextNode(priceValue);
		cartTableTD2.appendChild(priceNode);
		cartTableRow1.appendChild(cartTableTD2);

	} else {
		var rowToRemove = document.getElementById("cartTableId_" + elementToAddOrRemove.id);
		var rowToRemoveIndex = parseInt(rowToRemove.firstElementChild.innerHTML, 10);
		cartTable.deleteRow(rowToRemoveIndex - 1);
		var i;
		for (i = 0; i < cartTable.rows.length; i++) {
			cartTable.rows[i].firstElementChild.innerHTML = (i + 1);
		}
	}
};