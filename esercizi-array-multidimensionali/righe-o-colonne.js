/*
  Righe o colonne?
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali compresi tra 1 e 100.
    - Dichiari due array, l'array R di N elementi e l'array C di M elementi.
    - Salvi, nell'array R le somme di ogni riga della matrice e nell'array C le somme di tutte le colonne.
    - Stampi la matrice e i due array.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]

        array R = [152, 61]
        array C = [2, 70, 140]

  http://www.imparareaprogrammare.it
*let a=prompt("inserisci il numero di righe")
let b=prompt("inserisci il numero delle colonne")
let matrice=[]
for ( let x=0;x<a;x++){
matrice[x]=[]
}
for ( let x=0;x<a;x++){

 for (let y=0;y<b;y++){
 matrice[x][y]=Math.floor(Math.random()*101/2)
 
 }
}
for (let x=0;x<a;x++){
console.log(matrice[x])
}


let R=[]
for (let x=0;x<a;x++){
 R[x]=0
 for (let y=0;y<b;y++){
 R[x]+=Number(matrice[x][y])
 }
}
console.log(`Array R: [${R}]`)
  
let M=[]
for ( let y=0;y<b;y++){
 M[y]=0
 for ( let x=0;x<a;x++){
 M[y]+=Number(matrice[x][y])
  }
 }
console.log(`Array C: [${M}]`)
