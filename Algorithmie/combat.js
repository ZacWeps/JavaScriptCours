class Personnage {
    constructor(nom, pointsDeVie, attaque, precision) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.attaque = attaque;
        this.precision = precision;
    }
  
    attaquer(adversaire) {
        if (this.verifierPrecision()) {
            adversaire.pointsDeVie -= this.attaque;
            console.log(this.nom + " a touché " + adversaire.nom + " et inflige " + this.attaque + " points de dégâts !");
        } else {
            console.log(this.nom + " a raté son attaque sur " + adversaire.nom + " !");
        }
    }
  
    verifierPrecision() {
        const chance = Math.random();
        return chance < this.precision;
    }
  }
  
  const combattant1 = new Personnage("Guerrier", 100, 15, 0.7);
  const combattant2 = new Personnage("Archer", 80, 20, 0.6);
  
  console.log("Le combat commence !");
  while (combattant1.pointsDeVie > 0 && combattant2.pointsDeVie > 0) {
    combattant1.attaquer(combattant2);
  
    if (combattant2.pointsDeVie <= 0) {
        console.log( combattant2.nom + " est KO !" + combattant1.nom + " remporte le combat !");
        break;
    }
  
    combattant2.attaquer(combattant1);
  
    if (combattant1.pointsDeVie <= 0) {
        console.log(combattant1.nom + " est KO !" + combattant2.nom + " remporte le combat !");
        break;
    }
  
    console.log(combattant1.nom + combattant1.pointsDeVie + "PV");
    console.log(combattant2.nom + combattant2.pointsDeVie + "PV");
  }
  
  console.log("Fin du combat !");
  