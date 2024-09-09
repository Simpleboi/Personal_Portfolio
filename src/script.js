
// Cube elements
const cubeWrapper = document.querySelector(".cube-wrapper");
const cube = document.querySelector(".cube");

// Control the rotation of the cube
document.querySelectorAll("nav a").forEach((element) => {
  element.addEventListener("click", (event) => {
    cubeWrapper.style.transform = "scale(1.5)";
    cube.style.transition = "transform 1s";

    switch (event.target.id) {
      case "home":
        cube.style.transform = "rotateY(0deg)";
        break;
      case "projects":
        cube.style.transform = "rotateY(-90deg)";
        break;
      case "about me":
        cube.style.transform = "rotateY(90deg)";
        break;
      case "skills":
        cube.style.transform = "rotateX(-90deg)";
        break;
      case "resume":
        cube.style.transform = "rotateX(90deg)";
        break;
      case "contact":
        cube.style.transform = "rotateY(180deg)";
        break;
    }
  });
});


// To reset the cube back to scale
const header_name = document.getElementById('header_name');

header_name.addEventListener('click', () => {
  cubeWrapper.style.transform = "scale(1)";
  cube.style.transform = "rotateX(-30deg) rotateY(45deg)";
})


// Functionality for the Top Face (White)
const corner_a = document.getElementById('corner-a');
const corner_b = document.getElementById('corner-b');
const corner_d = document.getElementById('corner-d');
const corner_c = document.getElementById('corner-c');
const edge_a = document.getElementById('edge-a');
const edge_d = document.getElementById('edge-d');
const middle = document.getElementById('middle');
const edge_b = document.getElementById('edge-b');
const edge_c = document.getElementById('edge-c');

// When the user clicks on the 'skills' tab
const skills = document.getElementById('skills');

const squares = document.querySelectorAll('#skills .square-content');

// Have the Elements fade in when clicked on
skills.addEventListener('click', () => {
  squares.forEach(content => {
    content.style.opacity = '1';
  });
});