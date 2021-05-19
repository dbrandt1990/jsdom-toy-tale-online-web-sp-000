let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

window.onload = () => {
  const toyObj = {}
  fetch("http://localhost:3000/toys", toyObj)
    .then(resource => resource.json())
    .then(obj => {
      obj.forEach((toy) => {
        let container = document.getElementById("toy-collection")
        let toyCard = document.createElement("div")
        toyCard.class = "card"
        let likeBtn = document.createElement("button")
        likeBtn.innerText = "Like <3"

        let name = document.createElement("h2")
        let img = document.createElement("img")
        let likes = document.createElement("p")
        name.innerText = toy.name
        img.src = toy.image
        likes.innerText = `${toy.likes} likes`

        toyCard.appendChild(name)
        toyCard.appendChild(img)
        toyCard.appendChild(likes)
        toyCard.appendChild(likeBtn)

        container.appendChild(toyCard)
      })
    })
}
