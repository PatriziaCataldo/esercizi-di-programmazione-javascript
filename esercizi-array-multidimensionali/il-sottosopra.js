/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta.

  Esempio:
    Input: 
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/let righe=prompt("Quante righe di numeri consecutivi vuoi inserire?")
let colonne=prompt("Quante colonne per ogni riga?")
let vettore=[]
for (let x=0;x<righe;x++){
vettore[x]=[]
}

let k=0
for(let i=0;i<righe;i++){
for(let j=0;j<colonne;j++){
k++
vettore[i][j]=k
}console.log(vettore[i])

}


let tran=[]
for (x=0;x<colonne;x++){

tran[x]=[]
}


for (let y=0;y<colonne;y++){
for ( let x=0;x<righe;x++){

tran[y][x]=vettore[x][y]
}
}console.log(tran)


