// function getRepositories() {
//     const req = new XMLHttpRequest();
//     req.addEventListener('load', showRepositories);
//     req.open('GET', 'https://api.github.com/users/octocat/repos');
//     req.send();
// }
// YT code along
// const myCat = {
//     "name": "Meowsalot",
//     "species":  "cat",
//     "favFood": "tuna"
// }
// //Objects
// // if we wanted to access the object
// // myCat.favFood

// //Arrays
// // const myFavColors = ["blue", "green", "purple"];
// //Access by myFavColors[1]
// //arrays are zero based 

// //Both: array of objects [JSON] - Java, Script, Object, Notation
// const thePets = [
//     {
//         "name": "Meowsalot",
//         "species":  "cat",
//         "favFood": "tuna"
//     },
//     {
//         "name": "Barky",
//         "species":  "dog",
//         "favFood": "carrots"
//     }
// ]

// //Acess
// //thePets[1].favFood
//________________________________________________________________________________________________________//
//The process of sending and receiving data without reloading is called AJAX
//Web browsers have a built in tool called XMLHttpRequest - establish a connection with the URL specified, and let us send and receive data
// let pageCounter = 1;
// let animalContainer = document.getElementById('animal-info');
// let btn = document.getElementById('btn');

// btn.addEventListener('click', function() {
//     var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
// ourRequest.onload = function() {
//     let ourData = JSON.parse(ourRequest.responseText);
//     // console.log(ourData);
//     renderHTML(ourData);

//     //console.log(ourData[0]) ==> [
//         //by default the browser doesn't know that our data is a JSON object
// };
// ourRequest.send();
// pageCounter++;
// // if (pageCounter > 3) {
// //     btn.classList.add("hide-me");
// // } --add css, class named hide-me and set display value to none or hidden

// //AJAX Asynchronous, JavaScript, And XML. But we will be using JSON instead of XML.

// //Respond to button click event
// //Add new HTML to the page 
// })


// function renderHTML(data) {
//     let htmlString = "";

//     for (i = 0; i < data.length; i++) {
//         htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>"
        
//     };

//     animalContainer.insertAdjacentHTML('beforeend', htmlString)
    
// }
//_______________________________________________________________________________

function getRepositories() {
    const req = new XMLHttpRequest();
    req.addEventListener('load', showRepositories);
    req.open('GET', 'https://api.github.com/users/octocat/repos');
    req.send();
}

function showRepositories(event, data) {
    const repos = JSON.parse(this.responseText);
    const src = document.getElementById('repository-template').innerHTML;
    const template = Handlebars.compile(src);
    const repoList = template(repos);
    document.getElementById('repositories').innerHTML = repoList; 
}
