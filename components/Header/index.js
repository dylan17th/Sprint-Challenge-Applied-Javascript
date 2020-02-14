// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    //creating variables for the elements 
    let root = document.createElement('div');
    root.classList.add('header');
    let spanDate = document.createElement('span');
    spanDate.classList.add('date');
    title = document.createElement('h1');
    let spanTemp = document.createElement('span');
    spanTemp.classList.add('temp');

    //appending the elements
    root.appendChild(spanDate);
    root.appendChild(title);
    root.appendChild(spanTemp);

    //assign content to the elements 
    spanDate.textContent = 'SMARCH 28, 2019';
    title.textContent ='Lambda Times'; 
    spanTemp.textContent= '98°';

    //returning the head element 
    return root
}
//creating a varible for the element im going to append to 
let rooter = document.querySelector('.header-container');

rooter.appendChild(Header());

