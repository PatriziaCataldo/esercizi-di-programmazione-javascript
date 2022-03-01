/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  http://www.imparareaprogrammare.it
*/
let rombo=""
let input1=prompt("inserisci un numero dispari")
console.log(input1)
let input2=input1
console.log(input2)
let ast=1


while (input1>0){
 let righe1=Math.floor(input1/2)
for ( let i=0;i<righe1;i++){
rombo+=" "
}
let j=ast
while(j>0){
rombo+="*"
j--
}
rombo+="\n"
ast+=2
input1-=2
}


input1=input2
let ast2=input1-2
while (input1>0){
let tab=1
for (let i=0;i<tab;i++){
rombo+=" "
 }
 tab++

let j=ast2
while(j>0){
rombo+="*"
j--
}
rombo+="\n"
input1-=2
ast2-=2
}



alert(rombo)
