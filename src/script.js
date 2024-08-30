
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



// Functionality for the Top Face
const corner_a = document.getElementById('corner-a');

const skills = document.getElementById('skills');
skills.addEventListener('click', () => {
  corner_a.style.backgroundColor = 'red';
  corner_a.style.transition = 'all 0.5s ease';
})