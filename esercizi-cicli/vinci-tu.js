/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
let gioc1=0
let gioc2=0
let tiro1=0
for (let x=0;x<=4;x++){
tiro1=Math.round(Math.random()*5+1)
gioc1+=tiro1
console.log("il giocatore 1 estrae il numero:"+tiro1)
tiro2=Math.round(Math.random()*5+1)
gioc2+=tiro2
console.log("Il giocatore 2 estrae il numero:"+tiro2)


}console.log("Il giocatore 1 totalizza punti:"+gioc1)
console.log(" il giocatore 2 totalizza punti:"+gioc2)
let van=0
if(gioc1>gioc2){
van=gioc1-gioc2
console.log("Il giocatore 1 vince con: "+"  " +van+ "   punti di vantaggio")
}else if(gioc1<gioc2){
van=gioc2-gioc1
console.log("Il giocatore 2 vince con :"+"  "+ van+"   punti di vantaggio")
}else
console.log("i giocatori pareggiano")
