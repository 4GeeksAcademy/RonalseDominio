/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

function dominio() {
  let pronoun = ["La", "Nuestra"];
  let adj = ["Mejor", "Gran"];
  let noun = ["Pagina", "Falla"];
  let extension = [".com", ".es", ".ve"];

  for (let pronounx in pronoun) {
    for (let adjx in adj) {
      for (let nounx in noun) {
        for (let extensionx in extension) {
          console.log(
            pronoun[pronounx] + adj[adjx] + noun[nounx] + extension[extensionx]
          );
          return dominio;
        }
      }
    }
  }
}
domini;
