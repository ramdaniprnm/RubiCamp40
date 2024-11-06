function pola(str) {
  const [polaA, polaB] = str.split("=");
  for (let i = 0; i < 10; i++) {
    let cariPolaA = polaA.replace(/#/g, i);
    for (let j = 0; j < 10; j++) {
      let cariPolaB = polaB.replace(/#/g, j);
      const result = new Function(`return ${cariPolaA}`)();
      if (result == cariPolaB) return [i, j];
    }
  }
}
console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));

