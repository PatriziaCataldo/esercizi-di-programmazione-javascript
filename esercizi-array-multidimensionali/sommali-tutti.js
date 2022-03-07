/*
  Sommali tutti
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Stampi la matrice e la somma di tutti i valori contenuti.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]
        somma = 212

  http://www.imparareaprogrammare.it
*/let N=prompt("Inserisci il numero di righe")
let M=new Array(Number(prompt("inserici il numero di colonne")))
let sum=0
for ( let x=0;x<N;x++){
for (let y=0;y<M.length;y++){
M[y]=Math.floor(Math.random()*101/2)
sum+=M[y]
}console.log(M)
}console.log(`il numero che comprende tutti i numeri sopra è:${sum}`)
