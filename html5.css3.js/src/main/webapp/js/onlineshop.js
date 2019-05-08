
/**
 * sets the default values on the contact.html page
 * 
 */
function setContactDefaults(){
	document.getElementById("contactEMailRadioId").checked = true;
	document.getElementById("phoneInputId").style.display = "none";
}

/**
 * hides the contact option that is not selected on the contact.html page
 * 
 * @param elem
 * @returns
 */
function setPrefContact(elem){
	if (this.elem == null){
		return;
	}
	
	if (this.elem.value == "email"){
		document.getElementById("phoneInputId").style.display = "none";
		return;
	}

	if (this.elem.value == "tel"){
		document.getElementById("eMailInputId").style.display = "none";
		return;
	}

}