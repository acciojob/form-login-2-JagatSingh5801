//your JS code here. If required.
function myfunction(){
	var fname=document.getElementById("firstname").value;
	var lname=document.getElementById("lastname").value;
	var pno=document.getElementById("phone").value;
	var email=document.getElementById("mail").value;
	cost btn=document.getElementById("btn");
	btn.style.backgroundColor='blue';
	alert(`First Name: ${fname}\nLast Name: ${lname}\nPhone Number: ${pno}\nEmail ID: ${email}`);
}