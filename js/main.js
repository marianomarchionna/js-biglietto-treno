// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

var num_km = parseInt(prompt('Inserisci il numero di chilometri che devi percorrere: '));

var eta = parseInt(prompt('Inserisci la tua età: '));

var costo = num_km * 0.21;

if (eta < 18) {
    costo = costo * 0.8;
} else if (eta >= 65) {
    costo = costo * 0.6;
} 

console.log(costo.toFixed(2) + ' €');

document.getElementById('eta_ticket').innerHTML = eta;

document.getElementById('km_ticket').innerHTML = num_km + ' km';

document.getElementById('costo_ticket').innerHTML = costo + ' €';