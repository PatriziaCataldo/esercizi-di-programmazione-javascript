/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  http://www.imparareaprogrammare.it
*/
let array1= new Array()

let input=prompt("inserisci un numero")
console.log("hai inserito il numero degli elementi che comporranno i due vettori,ed e' :"+ input)

for(let i=0;i<input;i++){
    array1[i]=Math.floor(Math.random()*101/2)   
}  
let array2=new Array(array1.length)
let y=array1.length-1
console.log(array1)
for (let i= 0;i<array1.length;i++){
    array2[i]=array1[y]
    y--
}console.log(array2)
