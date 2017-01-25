
function multiply(num1,num2) { 
	var total = num1 * num2; 
	alert(total); 
	return total;
}
//alert(multiply("10",20))
/*
var beatles = Array("Lin", "Paul")
for (count = 0; count < beatles.length; count++) {
	alert(beatles[count])
}
*/
window.onload1 = function() {
	var testdiv = document.getElementById("testdiv"); 
	testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
}

window.onload2 = function() {
	var para = document.createElement("p"); var info = "nodeName: ";
	info+= para.nodeName;
	info+= " nodeType: ";
	info+= para.nodeType;
	alert(info);
}

window.onload3 = function() {
	var para = document.createElement("p");
	var testdiv = document.getElementById("testdiv"); testdiv.appendChild(para);
	var txt = document.createTextNode("Hello world"); para.appendChild(txt);
}

function positionMessage() {
if (!document.getElementById) return false;
if (!document.getElementById("message")) return false; var elem = document.getElementById("message"); elem.style.position = "absolute";
elem.style.left = "50px";
elem.style.top = "100px";
}

function moveMessage() {
if (!document.getElementById) return false;
if (!document.getElementById("message")) return false; var elem = document.getElementById("message");
var xpos = parseInt(elem.style.left);
var ypos = parseInt(elem.style.top);
if (xpos == 200 && ypos == 100) {
    return true;
  }
if (xpos < 200) { xpos++;
}
if (xpos > 200) {
xpos--;
}
if (ypos < 100) {
ypos++; }
if (ypos > 100) { ypos--;
}
elem.style.left = xpos + "px"; elem.style.top = ypos + "px";
movement = setTimeout("moveMessage()",10);
}

window.onload = function() {
	positionMessage();
	moveMessage();
}

function moveElement(elementID,final_x,final_y,interval) { if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false; 
	var elem = document.getElementById(elementID);
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == final_x && ypos == final_y) {
	    return true;
	 }
	if (xpos < final_x) xpos++;
	if (xpos > final_x) xpos--; 
	if (ypos < final_y) ypos++;
	if (ypos > final_y) ypos--;
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")"; 
	movement = setTimeout(repeat,interval);
}
