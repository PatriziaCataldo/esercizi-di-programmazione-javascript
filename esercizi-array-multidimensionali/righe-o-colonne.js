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
*/let N=2
let R=new Array(N)
let M=new Array(3)
let C=new Array(M.length)
let sum =0
let sumC=0
for (n=0;n<N;n++){

   
   
   for ( let i=0;i<M.length;i++){
   
        M[i]=Math.floor(Math.random()*101)
     
        sum += M[i] 
         R[n]=sum
         
         
         C[i]=M[i]
    
    
  }  console.log(M) 
       sum=0
      sumC=0
       }

console.log(C)
console.log(R)



