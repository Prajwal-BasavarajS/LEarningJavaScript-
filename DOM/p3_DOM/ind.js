let currmode  = "light"
let mode = document.querySelector(".mode");

console.log(currmode);
 
mode.addEventListener("click", () => {
    if (currmode == "light") {
        currmode = "dark ";
       document.querySelector( "body").style.backgroundColor = "red";
    }
    else
    {
        currmode = "dark ";
        document.querySelector( "body").style.backgroundColor = "black";

    }
});









let muud = document.querySelector("button");

let changemode = "light";

muud.addEventListener("click", ()=>{
    if (changemode == "light"){
        changemode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        muud.classList.add("dark");
        muud.classList.remove("light");
    }
    else{
        changemode = "light";
        muud.classList.add("light");
        muud.classList.remove("dark ");
    }   
});