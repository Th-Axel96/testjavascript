// faire apparaitre un boutton  fucntion() = =>

const btn = document.querySelector("#btn");
const img = document.getElementById("img");

btn.addEventListener("click", () => {
  img.classList.toggle("show");
});


// (e) = event // serie d'évenement

const mouseEvent = document.querySelector(".mouseEvent");
const Horizontal = document.querySelector(".Horizontal");
const Vertical = document.querySelector(".Vertical");

// injecté de valeur dynamique

mouseEvent.addEventListener("mousemove", (e) => {
  Horizontal.innerHTML = e.x;
  Vertical.innerHTML = e.y;
  mouseEvent.style.left = (e.x / window.innerWidth) * 100 + "%";

  // mettre un filtre blur avec if , si la condition n'est pas remplie else redevient normal
  // if else commande comune!!!!

  if (e.x > 500) {
    document.body.style.filter = "blur(3px)";
  } else {
    document.body.style.filter = "none";
  }
});

//*********************************************************** */
// modifier la valeur de l'input

document.getElementById("input").addEventListener("input", (e) => {
  Vertical.innerHTML = e.target.value;
});

// forEach (chacun des élements) / bouton pour changer la couleur d'un theme
// bouton pour switch de couleur de theme , (e)= event / remove pour retirer le theme en trop!!!

const theme = document.querySelectorAll(".theme");

theme.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.id);
    document.body.classList.remove("darkTheme", "blueTheme", "greyTheme");
    switch (e.target.id) {
      case "dark":
        document.body.classList.add("darkTheme");
        break;
      case "blue":
        document.body.classList.add("blueTheme");
        break;
      case "grey":
        document.body.classList.add("greyTheme");
        break;
      default:
        null;
    }
  });
});
