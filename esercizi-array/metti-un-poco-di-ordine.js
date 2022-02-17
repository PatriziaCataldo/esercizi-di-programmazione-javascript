/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinali in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)

  http://www.imparareaprogrammare.it
/*CON IL METODO SORT
let vet= new Array()
for (i=0;i<10;i++){
vet[i]=Math.floor(Math.random()*101)
}console.log(vet)
vet.sort((a,b)=>{
if(a>b){
return -1
}
})
console.log(vet)

*/
/*ORDINANDO IN MANIERA CRESCENTE
let vet= new Array(8,9,56,1,2)
let newvet=vet
let y=vet.length
for ( let i=0;i<vet.length-1;i++){
 for(let y=0;y<vet.length-1;y++){
  if(newvet[y]>newvet[y+1]){
  let app=newvet[y]
  newvet[y]=newvet[y+1]
  newvet[y+1]=app
  }console.log(y)
  }y--
 
  }console.log(newvet)
  
*/
