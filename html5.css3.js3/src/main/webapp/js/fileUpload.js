 
/** Zum Datei Upload mit HTML5 sieh https://wiki.selfhtml.org/wiki/JavaScript/File_Upload#Auswahl_mit_Drag_und_Drop **/

var fileList = []; // an array of objects representing all the files in the HTML table and a comment to each file
      
/**
 * 
 * @sieh https://wiki.selfhtml.org/wiki/JavaScript/File_Upload#Auswahl_mit_Drag_und_Drop
 * 
 * event listener for the event drop, @see init() function below
 * @param evt
 * @returns
 */
function dateiauswahl(evt) {
	evt.stopPropagation();
	evt.preventDefault();
	if (!evt){
		return;
	}
	var gewaehlteDateien = null;
	if (evt.dataTransfer){
		gewaehlteDateien = evt.dataTransfer.files;
	} else {
		gewaehlteDateien = evt.target.files; // https://stackoverflow.com/questions/15201071/how-to-get-full-path-of-selected-file-on-change-of-input-type-file-using-jav
	}
	// FileList Objekt
	var output = [];
	var selectBox = document.getElementById('flist');
	for (var i = 0, f; f = gewaehlteDateien[i]; i++) {
		fileList.push(f);
		var NeuerEintrag = new Option(f.name + f.size + ' bytes', f, false,
				true);
		selectBox.options[selectBox.length] = NeuerEintrag;
		addArrayElement(output, f);
	}

	if (gewaehlteDateien.length > 0) {
		selectBox.selectedIndex = 0;
		previewFile();
	}
}

function addArrayElement(output, f) {
	output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a',
			') - ', f.size, ' bytes, last modified: ', f.lastModifiedDate
					.toLocaleDateString(), '</li>');
}

function printFileDetails(output) {
	document.getElementById('list').innerHTML = '<ul>' + output.join('')
			+ '</ul>';
}

/**
 * @see https://stackoverflow.com/questions/42348917/drag-and-drop-input-file
 * 
 * @returns
 */
function previewFile() {

	var selectBox = document.getElementById('flist');
	var f = fileList[selectBox.selectedIndex];

	if (!f) {
		return;
	}
	
	console.log(f);
	console.log(f.size);
	
	var output = [];
	addArrayElement(output, f);
	printFileDetails(output);

	var reader = new FileReader();

	if (f && f.type.match('image.*')) {
		reader.addEventListener("load", function() {
			var pview = document.getElementById('fileUploadPreview');
			pview.src = reader.result;
			console.log('fileUploadPreview updated!');
		}, false);
		reader.readAsDataURL(f);
	}
}

/* event listener for the event dragover, @see init() function below */
function handleDragOver(evt) {
	evt.stopPropagation();
	evt.preventDefault();
	evt.dataTransfer.dropEffect = 'copy';
}

function initFileUpload() {
	var dropZone = document.getElementById('dropzone');
	dropZone.addEventListener('dragover', handleDragOver, false);
	dropZone.addEventListener('drop', dateiauswahl, false);
	
	var inputFile = document.getElementById('fileInput');
	inputFile.addEventListener('change', dateiauswahl, false);
}

