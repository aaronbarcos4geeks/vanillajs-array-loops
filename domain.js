let pronouns = ["the", "our"];
let adjs = ["great", "big"];
let nouns = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".io"];

for (let pronoun of pronouns) {
  for (let adj of adjs) {
    for (let noun of nouns) {
      let pronounAdj = "";
      for (let extension of extensions) {
        pronounAdj = pronoun + adj;
        console.log("Domain:", pronounAdj + noun + extension);
      }
      console.log(
        "Domain hack:",
        pronounAdj + noun.slice(0, -2) + "." + noun.slice(-2)
      );
    }
  }
}
