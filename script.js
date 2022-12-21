const container=document.createElement("div");
container.classList.add('container');

for(let i=1;i<257;i++){
    const div=document.createElement("div");
    div.classList.add("box");
    div.classList.add(`square-${i}`);
    container.appendChild(div);
    

}
document.body.appendChild(container);
const div=document.querySelectorAll('.box');

function changeColor(element){
    element.setAttribute('style','background-color:aqua;');
}

div.forEach(element => {
    element.addEventListener('mouseover',()=>{
        changeColor(element);
    }

    );
    
});
const btn=document.createElement('button');
btn.textContent="CLICK HERE";
document.body.insertBefore(btn,container);
btn.setAttribute('style','margin:10px 40% 50px;width:200px;height:80px;')

function enterSquare(){
   let userInput=prompt('ENTER A SQUARE VALUE')
   return console.log(userInput);
}

btn.addEventListener('click',enterSquare);