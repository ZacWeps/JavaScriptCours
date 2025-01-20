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
        if (adversaire.pointsDeVie < 0) adversaire.pointsDeVie = 0; 
        return `${this.nom} a touché ${adversaire.nom} et inflige ${this.attaque} points de dégâts !`;
      } else {
        return `${this.nom} a raté son attaque sur ${adversaire.nom} !`;
      }
    }
  
    verifierPrecision() {
      return Math.random() < this.precision;
    }
  }
  
  
  const combattant1 = new Personnage("Venus", 100, 15, 0.7);
  const combattant2 = new Personnage("Jesus", 80, 20, 0.6);
  
  
  const fighter1HealthBar = document.getElementById("fighter1-health");
  const fighter2HealthBar = document.getElementById("fighter2-health");
  const fighter1HPText = document.getElementById("fighter1-hp");
  const fighter2HPText = document.getElementById("fighter2-hp");
  const logContainer = document.getElementById("log-container");
  const startCombatBtn = document.getElementById("start-combat");
  
  
  function updateHealthBars() {
    fighter1HealthBar.style.width = `${(combattant1.pointsDeVie / 100) * 100}%`;
    fighter2HealthBar.style.width = `${(combattant2.pointsDeVie / 80) * 100}%`;
  
    fighter1HPText.textContent = `${combattant1.pointsDeVie} HP`;
    fighter2HPText.textContent = `${combattant2.pointsDeVie} HP`;
  }
  
  
  function logMessage(message) {
    const logEntry = document.createElement("p");
    logEntry.textContent = message;
    logContainer.appendChild(logEntry);
    logContainer.scrollTop = logContainer.scrollHeight;
  }
  
  
  startCombatBtn.addEventListener("click", () => {
    logContainer.innerHTML = ""; 
    combattant1.pointsDeVie = 100;
    combattant2.pointsDeVie = 80;
    updateHealthBars();
  
    const interval = setInterval(() => {
      logMessage(combattant1.attaquer(combattant2));
      updateHealthBars();
  
      if (combattant2.pointsDeVie <= 0) {
        logMessage(`${combattant2.nom} est KO ! ${combattant1.nom} remporte le combat !`);
        clearInterval(interval);
        return;
      }
  
      logMessage(combattant2.attaquer(combattant1));
      updateHealthBars();
  
      if (combattant1.pointsDeVie <= 0) {
        logMessage(`${combattant1.nom} est KO ! ${combattant2.nom} remporte le combat !`);
        clearInterval(interval);
      }
    }, 1000); 
  });
  