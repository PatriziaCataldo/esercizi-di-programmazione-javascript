/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice i cui valori interi sono generati casualmente nel range di 0 e 100.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
/*di quanti elementi vuoi che sia composta questa matrice?Scrivilo esprimendolo con un numero che inserirai tra le parentesi tonde di new Array!*/
let matrice=new Array(10)
for (let x=0;x<matrice.length;x++){
    for (let i=0;i<matrice.length;i++){
   matrice[i]=Math.floor(Math.random()*101)
}console.log(matrice)
}
