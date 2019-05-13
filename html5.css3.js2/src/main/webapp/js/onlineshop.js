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
		elem.firstElementChild.nextElementSibling.style.display = "block"; // the next sibling of the image element - this is the checkbox
		elem.getElementsByTagName("span")[0].style.display = "block"; // the tag <span> together with the text "Add to cart"
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
			elem.getElementsByTagName("span")[0].style.display = "none"; // the tag <span> together with the text "Add to cart"
		} else {
			elem.getElementsByTagName("span")[0].innerHTML = "Added to cart!" // we change the text to "Added to cart"
		}
	}
}