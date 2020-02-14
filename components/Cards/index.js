// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// {/* <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div> */}
//
// Create a card for each of the articles and add the card to the DOM.
const container = document.querySelector('.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles').then( response => {
const javascript = response.data.articles.javascript; 
const bootstrap = response.data.articles.bootstrap; 
const technology = response.data.articles.technology; 
const jquery = response.data.articles.jquery; 
const node = response.data.articles.node; 

javascript.forEach(item => container.appendChild(cardCreatior(item)))
bootstrap.forEach(item => container.appendChild(cardCreatior(item)))
technology.forEach(item => container.appendChild(cardCreatior(item)))
jquery.forEach(item => container.appendChild(cardCreatior(item)))
node.forEach(item => container.appendChild(cardCreatior(item)))


}).catch(err => console.log(err))

function cardCreatior(obj){
    //creating elements and assign variables for those elements and assigning classes
    let card = document.createElement('div')
    card.classList.add('card');
    let headline = document.createElement('div');
    headline.classList.add('headline');
    let author = document.createElement('div');
    author.classList.add('author');
    let imageBox = document.createElement('div');
    imageBox.classList.add('img-container')
    let image = document.createElement('img');
    let spanName = document.createElement('span');


    // nesting elements 
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageBox);
    author.appendChild(spanName);
    imageBox.appendChild(image);

    //assigning content for object 
    headline.textContent = obj.headline;
    spanName.textContent = obj.authorName;
    image.src = obj.authorPhoto;

    return card

}