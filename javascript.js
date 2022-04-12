//text over image//

var textOverImages = document.getElementsByClassName("onClickTextOverImage");
var previousTextOverImage;
for (var i = 0; i < textOverImages.length; i++) {
  textOverImages[i].onclick = function() {
    var classes = this.classList;
    if (classes.contains("show")) {
      classes.remove("show");
    } else {
      if (previousTextOverImage != null)
        previousTextOverImage.classList.remove("show");
      previousTextOverImage = this;
      classes.add("show");
    }
  }
}

function stopPropagation(event){
  event.stopPropagation();
}

/*Array*/
			function go(value){
let Dublin=["Howth","Raheny", "Malahide", "Smithfield"];
let Galway= ["Salthill", "Spanish Arch", "Barna"];
let Cork = ["Cobh", "Spike Island", "The Quays"];
if (value==='Dublin')
	document.getElementById("marketvalue").innerHTML=Dublin;
		else if(value==='Cork')
	document.getElementById("marketvalue").innerHTML=Cork;
		else if	(value==='Galway')
	document.getElementById("marketvalue").innerHTML=Galway;

}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function validate() {
 var name = document.forms["myform"]["name"].value;
 if(name==""){
 alert("Please enter the name");
 return false;
 }
 
 var email = document.forms["myform"]["email"].value;
 if(email==""){
 alert("Please enter the email");
 return false;
 }else{
 var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
 var x=re.test(email);
 if(x){
 }else{
 alert("Email id not in correct format");
 return false;
 } 
 } 
 var mobile = document.forms["myform"]["mobile"].value;
 if(mobile==""){
 alert("Please enter the mobile");
 return false;
 }else{
 if(isNaN(mobile)){
 alert("Mobile number not valid");
 return false;
 }
 } 
}
 
 //buttons
 function go(value){
let Dublin=["Howth","Raheny", "Malahide", "Smithfield"];
let Galway= ["Salthill", "Spanish Arch", "Barna"];
let Cork = ["Cobh", "Spike Island", "The Quays"];
if (value==='Dublin')
	document.getElementById("marketvalue").innerHTML=Dublin[1];
		else if(value==='Cork')
	document.getElementById("marketvalue").innerHTML=Cork;
		else if	(value==='Galway')
	document.getElementById("marketvalue").innerHTML=Galway;
 }