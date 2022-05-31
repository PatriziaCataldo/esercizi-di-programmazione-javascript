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
*/
let input=[[1,2],[3,4],[5,6]]
let output= []
for (let x=0;x<input.length-1;x++){

  for ( let i=0;i<input.length;i++){
    output[i]=input[i][x]
  }console.log(output)
}
