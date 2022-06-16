// functions
function FaireQuelqueChose() {
  console.log("je fais un truc");
}

const faireUneTache = (type) => {
  console.log("Je fais : " + type);
};

FaireQuelqueChose();
faireUneTache("la manche");
faireUneTache("les courses");
faireUneTache("");

// cliquer et écrire le texet sur la console.

const btn = document.querySelector("#btn");
const img = document.getElementById("img");

btn.addEventListener("click", () => {
  console.log("Oui , Puis je t'aider ?");
});
