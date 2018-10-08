let newbutton = document.createElement("button");
let newinput = document.createElement("input");
let newText = document.createTextNode('NOOOOOOOO');
let newCamp = document.createElement('input')




newbutton.addEventListener('click', event => {
    crereateText();

});


// ejemplo de funcion pura
newCreateElement =()=>{
    let currentDiv = document.getElementById("div1");
    document.body.insertBefore(newbutton, currentDiv);
}
newCreateElement();

crereateText = () =>{
    let currentDiv = document.getElementById("texto");
    document.body.insertBefore(newText, currentDiv);
}

newbutton.innerHTML = 'hol &#9998;';
// document.body.onload = addElement;
// addElement = () => { 
//   // crea un nuevo div 
//   // y añade contenido 
//   var newDiv = document.createElement("div"); 
//   var newContent = document.createTextNode("Hola!¿Qué tal?"); 
//   newDiv.appendChild(newContent); //añade texto al div creado. 

//   // añade el elemento creado y su contenido al DOM 
//   var currentDiv = document.getElementById("div1"); 
//   document.body.insertBefore(newDiv, currentDiv);
// }
