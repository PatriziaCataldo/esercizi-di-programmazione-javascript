/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/
let quanti=prompt("quanti sono i numeri di cui vuoi calcolare la media?")

let vettore= new Array()
vettore.length=quanti
for ( let i=0;i<vettore.length;i++){
vettore[i]=Math.floor(Math.random()*50+1)

}console.log(vettore)
let media=0
for (let i=0;i<vettore.length;i++){
media+=Number(vettore[i])/vettore.length
}

console.log("il valore medio dei numeri è :" +media)

let vet=Array()
let x=0
let y=0
while (x<vettore.length){
if (vettore[x]<media){
vet[y]=vettore[x]
y++
}x++
}console.log( "I numeri inferiori al valore medio sono:    " +vet)




