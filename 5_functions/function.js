function calcArea(height, width)
{
    
    let result = height * width;
    console.log(result);
}

calcArea(200,200);
calcArea(3,4);


// // anonymous function

function printmessgae(message,callback)
{
    console.log(message);
    callback();
}
function saysmtg(){
    console.log("Prajwal");
}
printmessgae("Hello",saysmtg());


// // IIFE Immediately Invoked Function Expression 
(function auto_called_function(){
    console.log("THis is called");
})();


// Arrow Functions
// are same the old normal functions just they dont need return a value 


const my_name =  (name) =>{
    console.log("my name is ", name);
}

my_name("Prajwal");

const area =(height,width) =>{
    return height * width;
}
console.log(area(200,200));

const area1=(height1,width1) => height1*width1;

console.log(area1(200,30));