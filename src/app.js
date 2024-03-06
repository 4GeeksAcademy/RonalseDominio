let pronoun = ["La", "Nuestra"];
let adj = ["Mejor", "Gran"];
let noun = ["Pagina", "Falla"];
let extension = [".com", ".es", ".ve"];

for (let pronouns in pronoun) {
  for (let adjs in adj) {
    for (let nouns in noun) {
      for (let extensions in extension) {
        console.log(pronoun[pronouns] + adj[adjs] + noun[nouns] + extension[extensions]);
      }
    }
  }
}
