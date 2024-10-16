const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse()
console.log("Esercizio n°1= " + reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

for (let i = 0; i < teachers.length; i++) {
  const longNames = teachers[i]

  if (longNames.length >= 5) {
    console.log(longNames)
  }
}

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(5, 1)
console.log("Esercizio n°3= " + teachers)
