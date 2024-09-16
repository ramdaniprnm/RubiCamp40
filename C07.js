function weirdMultiply(sentence) {
    const digitSum = sentence.toString().split('').reduce((acc, digit) => acc * parseInt(digit), 1); // sentence.toString() mengubahnya menjadi "39". lalu split(' ') mengubahnya menjadi ['3', '9']
    return digitSum < 10 ? digitSum : weirdMultiply(digitSum); // 
}

console.log(weirdMultiply(39)); // acc = 1, digit ='3',parseInt(digit) = 3, hasilnya 1 * 3 = 3
console.log(weirdMultiply(999)); 
console.log(weirdMultiply(3)); 
