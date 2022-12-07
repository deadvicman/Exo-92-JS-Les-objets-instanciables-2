let Personne = function (lastName, firstName, dateOfBirth, placeOfBirth) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.dateOfBirth = dateOfBirth;
    this.placeOfBirth = placeOfBirth;

    this.getFullInfo = function () {
        return`La personne s'appelle ${this.firstName} ${this.lastName}, est né(e) le ${this.dateOfBirth} à ${this.placeOfBirth}`
    }
    this.setBirth = function (date,place) {
        this.dateOfBirth = date;
        this.placeOfBirth = place;

    }
}

let tablePersonnes = [];

let Noa = new Personne("Bail", "Noa", "27/07/2011","Cateau-Cambrésis.");
let Enzo = new Personne("Bail", "enzo","26/11/2008","Eclaibes.");
let Abygaelle = new Personne("Bail","Abygaelle","21/05/2007", "Avesnes sur Helpe.");
let Lorie = new Personne("Owczarczak","Lorie","02/02/2002","Fourmie.");
let Coralie = new Personne("Bail","Coralie","27/05/1988","Cambrai.");

tablePersonnes[0] = Noa;
tablePersonnes[1] = Enzo;
tablePersonnes[2] = Abygaelle;
tablePersonnes[3] = Lorie;
tablePersonnes[4] = Coralie;

for (let i = 0; i < tablePersonnes.length; i++) {
    let divPersonne = document.createElement("div");
    divPersonne.innerText = tablePersonnes[i].getFullInfo();
    document.body.append(divPersonne);
}