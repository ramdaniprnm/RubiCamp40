function stringManipulation(word) {
  const vowels = "aeiou"; // string yang berisi huruf vokal
  const firstChar = word[0].toLowerCase(); // mengambil karakter pertama dari "word" dan mengubahnya menjadi huruf kecil

  return vowels.includes(firstChar) ? word : word.slice(1) + word[0] + "nyo"; // Memeriksa apakah karakter pertama adalah huruf vokal
}

console.log(stringManipulation("AYAM"));
console.log(stringManipulation("BEBEK"));
