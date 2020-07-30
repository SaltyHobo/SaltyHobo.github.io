/*
Roman Numeral Converter:

"Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case."
*/

function convertToRoman(num) {
 let string = String(num);
 let romOnes = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
 let romDecas = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
 let romHectos = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
 let romKilos = ["","M","MM","MMM"];
 let romArr = [];
 if (string.length == 1) {
   romArr.push(romOnes[string]);
 } else if (string.length == 2) {
   romArr.push(romDecas[string[0]],romOnes[string[1]]);
 } else if (string.length == 3) {
   romArr.push(romHectos[string[0]],romDecas[string[1]],romOnes[string[2]]);
 } else if (string.length == 4) {
   romArr.push(romKilos[string[0]],romHectos[string[1]],romDecas[string[2]],romOnes[string[3]]);
 } else return undefined;
 //console.log("roman numeral:",romArr.join(""));
 return romArr.join("");
}

//tests:
convertToRoman(1);
convertToRoman(9);
convertToRoman(36);
convertToRoman(649);
convertToRoman(2014);
convertToRoman(3999);
