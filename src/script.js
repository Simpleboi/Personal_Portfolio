// Control the rotation of the cube
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    const cubeWrapper = document.querySelector(".cube-wrapper");
    const cube = document.querySelector(".cube");

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

  // link.addEventListener("mouseleave", () => {
  //   const cubeWrapper = document.querySelector(".cube-wrapper");
  //   const cube = document.querySelector(".cube");

  //   cubeWrapper.style.transform = "scale(1)";
  //   cube.style.transform = "rotateX(-30deg) rotateY(45deg)";
  // });
});

