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
 * shows the detail image of the product (called when mouse is over the product chosen); accesses some HTML elements as DOM elements
 * 
 * @see https://www.w3schools.com/jsref/prop_element_nextelementsibling.asp
 * @see https://www.w3schools.com/jsref/prop_element_firstelementchild.asp
 * 
 * @param elem
 *            the first <div> within the products table'
 *            <td> element
 * @returns void
 * 
 */

function showDetailImage(elem) {
	var productDetailsImage = document.getElementById("chosenProductDetailsImageId");
	if (productDetailsImage != null) {
		productDetailsImage.src = elem.firstElementChild.src; // the image element
		var checkBoxAddToCart = elem.firstElementChild.nextElementSibling; // the next sibling of the image element - this is the checkbox
		checkBoxAddToCart.style.display = "block";
		var spanElement = elem.getElementsByTagName("span")[0].style.display = "block"; // the tag <span> together with the text "Add to cart"
	}
}

/**
 * hides the detail image of the product (called when mouse is out of the product chosen)
 * 
 * @see https://www.w3schools.com/jsref/prop_element_nextelementsibling.asp
 * @see https://www.w3schools.com/jsref/prop_element_firstelementchild.asp
 * 
 * @param elem
 *            the first <div> within the products table'
 *            <td> element
 * @returns void
 * 
 */
function hideDetailImage(elem) {
	var productDetailsImage = document.getElementById("chosenProductDetailsImageId");
	if (productDetailsImage != null) {
		productDetailsImage.src = "";
		var checkBoxAddToCart = elem.firstElementChild.nextElementSibling; // the next sibling of the image element - this is the check-box
		if (!checkBoxAddToCart.checked) {
			checkBoxAddToCart.style.display = "none";
		}
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
function addOrRemoveCartItem(elementToAdd) {

	var cartTable = document.getElementById("cartTableId");
	var rowNo = cartTable.rows.length;

	if (elementToAdd.checked) {
		var cartTableRow1 = document.createElement("tr");
		cartTableRow1.id = "cartTableId_" + elementToAdd.id;
		cartTable.appendChild(cartTableRow1);

		var cartTableTD0 = document.createElement("td");
		cartTableTD0.innerHTML = (rowNo + 1);
		cartTableRow1.appendChild(cartTableTD0);

		var productName = document.createTextNode(elementToAdd.value);
		var cartTableTD1 = document.createElement("td");
		cartTableTD1.appendChild(productName);
		cartTableRow1.appendChild(cartTableTD1);

		var cartTableTD2 = document.createElement("td");
		var priceValue = elementToAdd.nextElementSibling.nextElementSibling.innerHTML;

		var priceNode = document.createTextNode(priceValue);
		cartTableTD2.appendChild(priceNode);
		cartTableRow1.appendChild(cartTableTD2);

	} else {
		var rowToRemove = document.getElementById("cartTableId_" + elementToAdd.id);
		var rowToRemoveIndex = parseInt(rowToRemove.firstElementChild.id, 10);
		cartTable.deleteRow(rowToRemoveIndex - 1);
		if (rowToRemoveIndex < cartTable.rows.length) {
			var i;
			for (i = 0; i < cartTable.rows.length; i++) {
				cartTable[0].firstElementChild.innerHTML = (i + 1);
			}
		}

	}
};