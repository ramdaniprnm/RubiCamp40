const fs = require("fs");
const readline = require("readline");

const data = JSON.parse(fs.readFileSync("data.json", "utf8"));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let index = 0;
rl.setPrompt("tebakan: ");
const tebakKata = () => {
  if (data.length > index) {
    console.log(`pertanyaan: ${data[index].definition}`);
    rl.prompt();
  } else {
    console.log("hore anda menang");
    rl.close();
    process.exit();
  }
};

rl.on("line", (answer) => {
  
  if (answer.trim().toLowerCase() === data[index].term.toLowerCase()) {
    console.log("Selamat Anda Benar")
    index++;
    tebakKata();
    
  } else {
    console.log(`Wkwkwkwk, Anda kurang beruntung!`);
    rl.prompt();
  }
  

})
console.log(
  "Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban dengan benar ya!"
);
tebakKata();