let pronouns = ["the", "our"];
let adjs = ["great", "big"];
let nouns = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".io"];

// Domain extensions
console.log("Domain extensions");

for (let pronoun of pronouns) {
  for (let adj of adjs) {
    for (let noun of nouns) {
      for (let extension of extensions) {
        console.log(pronoun + adj + noun + extension);
      }
    }
  }
}

// Domain hacks
console.log("Domain hacks");

for (let pronoun of pronouns) {
  for (let adj of adjs) {
    for (let noun of nouns) {
      console.log(pronoun + adj + noun.slice(0, -2) + "." + noun.slice(-2));
    }
  }
}
