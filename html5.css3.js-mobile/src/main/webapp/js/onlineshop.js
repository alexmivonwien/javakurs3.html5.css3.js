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
	var productDetailsImage = document.getElementById("chosenProductDetailsImageId");
	if (productDetailsImage!=null){
		productDetailsImage.src = elem.src;
	}
	var beachWearDetailsImage = document.getElementById("chosenBeachWearDetailsImageId");
	if (beachWearDetailsImage!=null){
		beachWearDetailsImage.src = elem.src;
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