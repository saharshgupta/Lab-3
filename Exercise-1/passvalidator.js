function validate(){
let p1 = document.getElementById("pass1").value;
let p2 = document.getElementById("vpass").value;
	if( p1.length < 8 || p2.length <8)
		alert("Password needs to be at least 8 characters long");
	else{
		if( p1 === p2)
			alert("Passwords match");
		else
			alert("Passwords do not match");
	}
}
