/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/let vet1=  Array()
let vet2= Array()
let vet3=Array()
for ( let i=0;i<10;i++){
vet1[i]=Math.floor(Math.random()*10+1)
}console.log(vet1)
for (let i=0;i<10;i++){
vet2[i]=Math.floor(Math.random()*10+1)
}console.log(vet2)
let operazione=prompt("quale operazione vuoi ottenere:\n- addizione\n- sottrazione\n-prodotto\n-divisione\n")
for ( let i=0;i<10;i++){
if (operazione =="addizione"){vet3[i]=vet1[i]+vet2[i]
}
 if(operazione =='sottrazione'){ vet3[i]=vet1[i]-vet2[i];
}
  if(operazione =='prodotto'){ vet3[i]=vet1[i]*vet2[i];
}
if(operazione =='divisione'){vet3[i]=vet1[i]/vet2[i];
}
else (i==10)
console.log(vet3)

}
