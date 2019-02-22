function next(){
	let img = document.getElementById("imtag");
	let csrc = img.src;
	let i = 1;
	let n = csrc[51];
	if(i<3)
		i++;
	switch(n){
	case "1":
		i = 2;
		break;
	case "2":
		i = 3;
		break;
	case "3":
		i = 4;
		break;
	case "4":
		i = 5;
		break;
	case "5":
		i = 1;
		break;
	}
	img.src = "pic" + i + ".jpg";
}

function prev(){
let img = document.getElementById("imtag");
	let csrc = img.src;
	let i = 1;
	let n = csrc[51];
	switch(n){
	case "5":
		i = 4;
		break;
	case "4":
		i = 3;
		break;
	case "3":
		i = 2;
		break;
	case "2":
		i = 1;
		break;
	case "1":
		i = 5;
		break;
	}
	img.src = "pic" + i + ".jpg";
}
