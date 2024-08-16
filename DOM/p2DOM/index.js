let newbtn = document.createElement("button");
newbtn.innerHTML = "Click Me!";
newbtn.style.borderRadius = "10px";
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";


let body = document.querySelector("body");

body.prepend(newbtn);