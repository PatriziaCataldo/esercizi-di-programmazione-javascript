/*
  Il calendario mediocre
  Scrivi un programma che dato:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese.

  Esempio:
    Input: numero giorni = 31, giorno settimana = 0
    Output: Lun 1
            Mar 2
            Mer 3
            Gio 4
            Ven 5
            Sab 6
            Dom 7
            Lun 8
            Mar 9
            Mer 10
            Gio 11
            Ven 12
            Sab 13
            Dom 14
            Lun 15
            Mar 16
            Mer 17
            Gio 18
            Ven 19
            Sab 20
            Dom 21
            Lun 22
            Mar 23
            Mer 24
            Gio 25
            Ven 26
            Sab 27
            Dom 28
            Lun 29
            Mar 30
            Mer 31


  Variante:
  Piuttosto che avere in input il numero dei giorni del mese passa direttamente il mese e calcola tu da quanti giorni è formato.

  http://www.imparareaprogrammare.it

let input1=prompt("In quale giorno della settimana inizia il mese?")
let settimana = ["lun", "mar", "mer", "gio", "ven", "sab", "dom"]
let input2 = prompt("quanti giorni ha il mese?")
let durata=input2
let primogiorno = input1
let inizio = settimana.indexOf(primogiorno)

let iniziomese = settimana.slice(inizio)
let y = 0
let mese = iniziomese
for (let i = iniziomese.length; i < durata; i++) {

  if (y < 7) {
    mese[i] = settimana[y]
    y++
  } else {
    i--
    y = 0
    
  }
}
console.log(mese)
console.log(mese.length)
let z=0
for ( let i=0;i<mese.length;i++){
z+=1
console.log(mese[i] + "  "+ z )

}
