/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */
let nome = prompt ('Come ti chiami?');
let cognome = prompt ("Com'è il tuo cognome?");
let colore = prompt ("Qual'è il tuo colore preferito?");
const numero = ('21');
let password = `
   <h3>
   La password scelta per te è : 
   </h3>
   <h2>
       ${nome}${cognome}${colore}${numero} 
     </h2> 
   `
   document.getElementById('title').innerHTML = password