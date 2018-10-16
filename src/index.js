const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// YOUR CODE HERE


addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener
    let addToy = document.querySelector(".add-toy-form")
    addToy.addEventListener("submit", function(event){
      // event.preventDefault()

    let data = {
      name: event.target.name.value,
      image: event.target.image.value,
      likes: 0
    }
    
      postData(`http://localhost:3000/toys`,data)
    })
    
  } else {
    toyForm.style.display = 'none'
  }
})


// parentNode, previuseSibling

// OR HERE!
document.addEventListener("DOMContentLoaded", () => {
  getData()
});

function addToyToPage(toy){
  // for (let i = 0; i < toyObjects.length; i++){
    likes = toy.likes
    let slot = document.getElementById("toy-collection")
    slot.innerHTML += `<div class="card">
      <h2>${toy.name}</h2>
      <img src=${toy.image} class="toy-avatar"></img>
      <p>${likes}<p>
      <button type="button" onclick="${likes += 1}" class="like-btn">Like <3</button></div>`
}

function getData(){
  fetch('http://localhost:3000/toys')
  .then(resp => resp.json())
  .then(toys => toys.forEach(toy => addToyToPage(toy)))
}


function postData(url = `http://localhost:3000/toys`, data = {"name": "Jessie",
  "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
  "likes": 0}) {
    return fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
    body: JSON.stringify(data), 
  })
}




