let pronoun = ["La", "Nuestra"];
let adj = ["Mejor", "Gran"];
let noun = ["Pagina", "Falla"];
let extension = [".com", ".es", ".ve"];

for (let pronouns in pronoun) { /// en numeros
  for (let adjs in adj) {
    for (let nouns in noun) {
      for (let extensions in extension) {
        console.log(pronoun[pronouns] + adj[adjs] + noun[nouns] + extension[extensions]);
      }
    }
  }
}
for (let i = 0 ; i < pronoun.length; i++) {
  for(let j = 0; j < adj.length; j++) {
    for(let k = 0; k < noun.length; k++)
      for (let l = 0; l < extension.length; l++) {
        console.log(pronoun[i] + adj[j] + noun[k] + extension[l])
      }
  }
}