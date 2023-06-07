function convertRomanToArabic() {
  let romanInput = document.getElementById("romanInput").value.toUpperCase();
  let output = document.getElementById("output");

  if (romanInput === "") {
    output.innerHTML = "Por favor, digite um número romano.";
    return;
  }

  let result = romanToArabic(romanInput);
  output.innerHTML = result !== false ? "Número arábico correspondente: " + result : "Número romano inválido.";
}

function convertArabicToRoman() {
  let arabicInput = parseInt(document.getElementById("arabicInput").value);
  let output = document.getElementById("output");

  if (isNaN(arabicInput) || arabicInput < 1 || arabicInput > 3999) {
    output.innerHTML = "Por favor, digite um número arábico válido entre 1 e 3999.";
    return;
  }

  let result = arabicToRoman(arabicInput);
  output.innerHTML = "Número romano correspondente: " + result;
}

function romanToArabic(roman) {
  let romanNumeralValue = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  let arabic = 0;

  Object.keys(romanNumeralValue).forEach(function (symbol) {
    while (roman.indexOf(symbol) === 0) {
      arabic += romanNumeralValue[symbol];
      roman = roman.replace(symbol, "");
    }
  });

  return roman !== "" ? false : arabic;
}

function arabicToRoman(arabic) {
  let romanNumeralValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumeralSymbol = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let romanNumeral = "";

  for (let i = 0; i < romanNumeralValue.length; i++) {
    while (arabic >= romanNumeralValue[i]) {
      romanNumeral += romanNumeralSymbol[i];
      arabic -= romanNumeralValue[i];
    }
  }

  return romanNumeral;
}