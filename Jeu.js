const readline = require('readline-sync');

const mots = ['pendu', 'voiture', 'isitech', 'mounir', 'temel', 'bonjour'];

const motAleatoire = mots[Math.floor(Math.random() * mots.length)];

let motAffiche = '';
let lettresDevinees = [];
let essaisRestants = 8;

for (let i = 0; i < motAleatoire.length; i++) {
    motAffiche += '_';
  }

  while (essaisRestants > 0) {
    console.log(`Lettre déjà deviné: ${lettresDevinees.join(', ')}`);
    console.log(`Il te reste : ${essaisRestants} essai`);
    console.log(`MOT A DEVINER : ${motAffiche}`);
    
    const lettre = readline.question('Met une lettre : ');
  
    if (lettresDevinees.includes(lettre)) {
      console.log('Tu as déjà mis cette lettre.');
      continue;
    }
  
    let lettreTrouvee = false;
    for (let i = 0; i < motAleatoire.length; i++) {
      if (motAleatoire[i] === lettre) {
        motAffiche = motAffiche.substring(0, i) + lettre + motAffiche.substring(i + 1);
        lettreTrouvee = true;
      }
    }
  
    if (!lettreTrouvee) {
      essaisRestants--;
    }
  
    lettresDevinees.push(lettre);
  
    if (motAffiche === motAleatoire) {
      console.log(`Bravo, tu as gagné. Le mot est ${motAleatoire}`);
      break;
    }
  }
  
  if (essaisRestants === 0) {
    console.log(`Désolé, tu as perdu. Le mot c'est ${motAleatoire}`);
  }