function deretKaskus(n) {
  let result = [];

  for (let i = 0; i <= n; i++) {
    let number = i * 3;
    let output = "";
    if (number % 5 === 0 && number % 6 === 0) {
      output = "KASKUS";
    } else if (number % 5 === "KAS") {
      let output = "KUS";
    } else if (number % 6 === "KUS") {
      let output = "KUS";
    } else {
      output = number;
    }
    result.push(output);
  }
  return result;
}

console.log(deretKaskus(10));
