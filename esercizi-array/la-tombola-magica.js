/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/let array1=new Array(10)
let array2=new Array(10)
for (let i=0;i<10;i++){
 let numcaso=Math.floor(Math.random()*91)
 let flag=true
  for (let y=0;y<10;y++){
  if( array1[y]==numcaso || array[y]==0){
  flag=false}
  }
 if (flag==true){
 array1[i]=numcaso
  }else i--
  }
console.log(array1)
for(let i=0;i<10;i++){
 array2[i]=prompt("inserisci dei numeri dall'uno al 90 ")
}console.log(
 array2)
let cont=0
for(let i=0;i<10;i++){
for (let y=0;y<10;y++){
if (array1[i]==array2[y]){
cont+=1
}
}
}
if(cont==2){
console.log("bravo hai fatto ambo")
}else if (cont==3){
console.log("Bravo hai fatto terno")
}else if(cont==4){
console.log("BRAVO HAI FATTO QUATERNA")
}else if(cont==5){
console.log("Bravo hai fatto Cinquina")
}else if(cont==10){
console.log("Bravo hai fatto tombola")
}else if(cont<=1){
console.log("Mi spiace non hai vinto")
}

