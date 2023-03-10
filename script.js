
const emptyDiv=document.createElement('div');//empty div
document.body.appendChild(emptyDiv);
emptyDiv.classList.add('empt');
emptyDiv.setAttribute('style','width:100%;');

//div to hold the two buttons
const btnHolder=document.createElement('div');
btnHolder.setAttribute('style','margin:10px 5vw 10px;height:100px;width:100vw;margin:auto;padding:auto;display:inline-block;');
document.body.insertBefore(btnHolder,emptyDiv);

//button to reset the screen before insertion of a new number
const rstBtn=document.createElement('button');
rstBtn.setAttribute('style','width:80px;height:40px;margin:5px;padding:auto;border-radius:5px;color:white;background-color:crimson');
rstBtn.textContent="RESET";
btnHolder.appendChild(rstBtn);

//button to enter a number to be squared
const setBtn=document.createElement('button');//adding button to our div
setBtn.textContent="INSERT";//adding text content to our button
setBtn.setAttribute('style','width:80px;height:40px;margin:5px;padding:auto;border-radius:5px;color:white;background-color:teal;');//styling our button
btnHolder.appendChild(setBtn);

//div to hold initial grid squares
let container=document.createElement("div");//create a new div to contain the grid squares
container.classList.add('container');//gave the div a class
document.body.appendChild(container);//adding our container to the div

 //container styling
container.setAttribute('style','display:grid;grid-template-columns:repeat(16,10px);grid-template-rows:repeat(16,10px);');

//generating the initial square divs and add event listener for color sketching
for(let i=0;i<256;i++){
    const initSquare=document.createElement('div');
    initSquare.classList.add('init');
    initSquare.setAttribute('style','border:0.01px solid grey;');
    container.appendChild(initSquare);
    initSquare.addEventListener('mouseover',()=>{
        changeColor(initSquare);
    });   
}

//new container to hold inserted divsquares
let newContainer=document.createElement('div');
document.body.appendChild(newContainer);
 
 //function to generate the new divSquares
function noOfSquare(number){
    newContainer.setAttribute('style',`display:grid; grid-template-columns:repeat(${number},10px); grid-template-rows:repeat(${number},10px);`);
  for(let i=0;i<(number*number);i++){
       let divSquare=document.createElement('div');
       divSquare.classList.add('box');
        newContainer.appendChild(divSquare);
        divSquare.setAttribute('style','border:0.01px solid grey;');
        //adding event listener to add color to the new divsquares
        divSquare.addEventListener('mouseover',()=>{
            changeColor(divSquare);
        }); 
          
                 
    }    
}

//function to change element color
function changeColor(element){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    element.setAttribute('style',`background-color:rgb(${red},${green},${blue});`);
}

//function to return color on mouse leave
function returnColor(element){
    element.setAttribute('style','background-color:;border:1px black solid;')
}

//function to take and return a number to be squared
function enterSquare(){    
    let userInput=prompt('ENTER A SQUARE VALUE');
    clrInitContainer();    
    noOfSquare(userInput);
}

//function to clear the initial container
function clrInitContainer(){
    container.setAttribute('style','height:0;width:0;background-color;margin:-10px;');
 }
 
 //function to clear new container
 function clrNewContainer(){
     newContainer.innerHTML='';
 }

 //adding event listener to our reset button
 rstBtn.addEventListener('click',clrNewContainer);


//adding event listener to run the entersquare function when the button is clicked
setBtn.addEventListener('click',enterSquare);


