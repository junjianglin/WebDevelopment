function showPic(whichPic) {
	if (!document.getElementById("placeholder")) return false;
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
}

function countBodyChildren() {
	var body_element = document.getElementsByTagName("body")[0];
}

function showDescription(whichPic) {
	if (!document.getElementById("description")) return false;
	var picDesc = whichPic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = picDesc;
}

function prepareGallery() {

	if (!document.getElementById) return false;
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById("imagegallery")) return false;
	
	var gallery = document.getElementById("imagegallery");
	var links = document.getElementsByTagName("a");
	for (i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			return !showPic1(this);
		}
	}
}


function showPic1(whichpic) {

	if (!document.getElementById("placeholder")) return false; 

	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder"); 
	placeholder.setAttribute("src",source);

	if (document.getElementById("description")) {

		var text = whichpic.getAttribute("title");
		var description = document.getElementById("description"); description.firstChild.nodeValue = text;
	}
	return true;
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
	window.onload = func; } else {
		window.onload = function() { oldonload();
		func();
		} 
	}
}

addLoadEvent(prepareGallery);
//window.onload = prepareGallery;