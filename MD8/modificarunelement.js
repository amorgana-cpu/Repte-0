let primeraParticipant = {
  nom: "Regina",
  llinatge1: "Santorini",
  llinatge2: "de la Cierva"
};
primeraParticipant.localitat = "Cangas del Narcea";


primeraParticipant.nom = "Maria Angustias";


console.log(primeraParticipant);


for (let clau in primeraParticipant) {
  console.log(primeraParticipant[clau]);
}
