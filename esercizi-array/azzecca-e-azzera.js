/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/
let array=new Array(100)
let newarray=array

for ( let i=0;i<array.length;i++){
    array[i]=Math.floor(Math.random()*101/2)
}console.log(array)
while(newarray.length>0){
let input=prompt("Inserisci un numero")
for (let i=0;i<array.length;i++){
let nuovonum=array[i]/input
if(Number.isInteger(nuovonum)){
array[i]=0
newarray=array
}
}
console.log(array)
 newarray=array.filter(number=>number>0)
}console.log(newarray)
