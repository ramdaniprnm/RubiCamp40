const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const fileName = process.argv[2];

let data = [];
let index = 0;
let skipped = [];
let countMistakes = 0;


const pertanyaan = () => {  
  if (index < data.length) {
    console.log(`Pertanyaan: ${data[index].definition}`);
    rl.setPrompt("Jawaban: ");
    rl.prompt();
  } else if (skipped.length > 0) {
    data = skipped.slice();    
    countMistakes = 0;
    index = 0;
    skipped = [];
    pertanyaan()
  } else {
    countMistakes = 0;
    index = 0;
    skipped = [];
    console.log("anda telah menyelesaikan semua pertanyaan!");
    rl.close();
  }
};

const jawaban = (answer) => {
  if (answer.toLowerCase() === 'skip') {
    skipped.push(data[index]);    
    countMistakes = 0;
    index++;
    pertanyaan();
  } else if (answer.toLowerCase() === data[index].term.toLowerCase()){
    console.log('Anda beruntung');
    countMistakes = 0;
    index++;
    pertanyaan();
  } else {
    countMistakes++;
    console.log(`Anda Kurang beruntung! anda telah salah, silahkan coba lagi. ${countMistakes}`);
    rl.setPrompt("Jawaban: ");
    rl.prompt();
  }
}

if (fileName) {
 data = JSON.parse(fs.readFileSync(fileName, "utf8")) 
  console.log(
    "Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban dengan benar ya!"
  );
  pertanyaan();
  rl.on('line', (answer) => {
    jawaban(answer);
  })
  
} else {
  console.log(`Tolong sertakan nama file sebagai inputan soalnya`);
  console.log(`node C12.js data.json`);
  process.exit(1);
}
