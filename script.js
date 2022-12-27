const emptyDiv=document.createElement('div');//empty div
document.body.appendChild(emptyDiv);
emptyDiv.classList.add('empt');
emptyDiv.setAttribute('style','width:100%;');


const container=document.createElement("div");//create a new div to contain the grid squares
container.classList.add('container');//gave the div a class

document.body.appendChild(container);//adding our container to the div







//function to take and return a number to be squared
function enterSquare(){
    let userInput=prompt('ENTER A SQUARE VALUE');
    
    noOfSquare(userInput);
    
}

function noOfSquare(number){
    container.setAttribute('style',`display:grid; grid-template-columns:repeat(${number},10px); grid-template-rows:repeat(${number},10px);`);
    for(let i=0;i<(number*number);i++){
        const divSquare=document.createElement('div');
        divSquare.classList.add('box');
        
        container.appendChild(divSquare);
        divSquare.setAttribute('style','border:0.01px solid grey;');
        
            divSquare.addEventListener('mouseover',()=>{
                changeColor(divSquare);
            }); 
          
                 
    }    
}


const divSquare=document.querySelectorAll('.box');//selecting our div squares

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

const btnHolder=document.createElement('div');
btnHolder.setAttribute('style','height:100px;width:300px;margin:auto;padding:auto;display:inline-block;');
document.body.insertBefore(btnHolder,emptyDiv);

const rstBtn=document.createElement('button');
rstBtn.setAttribute('style','width:80px;height:40px;margin:5px;padding:auto;');
rstBtn.textContent="RESET";
btnHolder.appendChild(rstBtn);

const setBtn=document.createElement('button');//adding button to our div
setBtn.textContent="INSERT";//adding text content to our button
setBtn.setAttribute('style','width:80px;height:40px;margin:5px;padding:auto;');//styling our button
btnHolder.appendChild(setBtn);





//adding event listener to run the entersquare function when the button is clicked
setBtn.addEventListener('click',enterSquare);


