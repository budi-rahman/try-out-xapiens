/**
 * ---------------ALGORITMA-------------
 * 
 * 1. Buat variabel untuk merandom angka dari 1 sampai 100
 * 2. Berikan input nilai dari user untuk menebak angka yang dirandom
 * 3. Jika input angka dari user dan angka yang di random bernilai beda, maka jawaban belum tepat
 * 4. Jika jawaban belum tepat maka berikan output nilai jarak antara angka dari input user dengan nilai random
 * 5. Jika input angka dari user dan angka yang di random bernilai sama, maka jawaban benar
 * 6. Jika jawaban sudah benar maka permainan berakhir.
 * 
 */


const readline = require('readline');

var pool = Math.round(Math.random() * 100)
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//var ins = true;

ask()

function ask(){

    rl.question("Tebakan Anda Adalah : ", function(answer) {

        if (answer - pool == 0){
            console.log(`Horee Kamu Benar : ${answer}`);
            rl.close();
        } else {
            console.log(`Jawaban kamu beda, ${Math.abs(answer - pool)}`);
            ask()
        }
      });
}