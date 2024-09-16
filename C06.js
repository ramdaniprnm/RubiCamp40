// function stringManipulation(sentence) {
//     const vowels = "aeiou"; // string yang berisi huruf vokal
//     const stringManipulation = (word) => {
//       const firstChar = sentence[0].toLowerCase(); // mengambil karakter pertama dari "word" dan mengubahnya menjadi huruf kecil
//       return vowels.includes(firstChar) ? word : word.slice(1) + word[0] + "nyo"; // Memeriksa apakah karakter pertama adalah huruf vokal
//     }
//     return sentence.Split(" ").map(stringManipulation).join(" ")
//   }
  
//   console.log(stringManipulation("ibu pergi ke pasar bersama aku"));
  


function sentenceManipulation(sentence) { 
  const vowels = "aeiou";

  const openManipulation = (word) => {
    const firstChar = word[0].toLowerCase();
    return vowels.includes(firstChar) ? word : word.slice(1) + word[0] + 'nyo';
  };
  return sentence.split(" ").map(openManipulation).join(" ")
}

console.log(sentenceManipulation('ibu pergi ke pasar bersama aku'))