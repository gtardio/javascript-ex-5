// ***OGGETTI***
// - *1* Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età. Stampare a
// schermo attraverso il for in tutte le proprietà.
// - *2* Creare un array di oggetti di cantanti. Ciclare su tutti i
// cantanti e stampare per ognuno nome e cognome
// - *3* Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell’ordine: nome, cognome e età.



// *** Esercizio 1 ***

 var studente = {
   nome : "Gianluca",
   cognome : "Tardio",
   età : 24
 }

 for (var key in studente)
 {
   document.writeln(studente[key] + "<br>"); // stampa a schermo tutte le proprietò dell'oggetto
 }


// *** Esercizio 2 ***

  var cantanti = [
    {
      nome : "Alex",
      cognome : "Britti",
      età : 50
    },
    {
      nome : "Francesco",
      cognome : "De Gregori",
      età : 67
    },
    {
      nome : "Francesco",
      cognome : "Gabbani",
      età : 36
    }
  ];

  for (var i = 0; i < cantanti.length; i++) {
    document.writeln(cantanti[i].nome + "<br>");
    document.writeln(cantanti[i].cognome + "<br>");
  }

// *** Esercizio 3 ***
  var nuovoStudente = {}

  nuovoStudente.nome = prompt("Inserisci il nome dello studente");
  nuovoStudente.cognome = prompt("Inserisci il cognomenome dello studente");
  nuovoStudente.età = parseInt(prompt("Inserisci l'età dello studente"));

  console.log(nuovoStudente);
