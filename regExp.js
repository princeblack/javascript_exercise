let str = "logo png";
let regExp = /l/;
console.log(regExp.exec(str));
console.log(regExp.test(str));

console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
 
let str2 = "fiche .png";
let regExp2 = new RegExp("\.png$")
console.log(regExp2.test(str2));
console.log(regExp2.exec(str2));

console.log("++++++++++++++++++++++++++++++++++++++++++++++++");

let str3 = "logo png";
let regExp3 = new RegExp("^log");
console.log(regExp3.test(str3));
console.log(regExp3.exec(str3));

console.log("++++++++++++++++++++++++++++++++++++++++++++++++");

let str4 = "logo.png";
let regExp4 = new RegExp("^logo.png$")
console.log(regExp4.exec(str4));
console.log(regExp4.test(str4));

console.log("++++++++++++++++++++++++++++++++++++++++++++++++");

let str5 = "logo.png";
let regExp5 = new RegExp("^[a-z.]+$");
console.log(regExp5.exec(str5));
console.log(regExp5.test(str5));

console.log("++++++++++++++++++++++++++++++++++++++++++++++++");

let str6 = "logo.pneg";
let regExp6 = new RegExp("\.pne?g$");
console.log(regExp6.exec(str6));
console.log(regExp6.test(str6));

console.log("++++++++++++++++++++++++++++++++++++++++++++++++");

let str7 = "logo.pneg";
let regExp7 = new RegExp("^[a-zA-Z0-9_]+\.pne?g$");
console.log(regExp7.exec(str7));
console.log(regExp7.test(str7));

console.log("++++++++++++++++++++++++++++++++++++++++++++++++");

let str8 = "losgo.jpg";
let regExp8 = new RegExp("^\\w{3,5}\.jpe?g");
console.log(regExp8.test(str8));
console.log(regExp8.exec(str8));

console.log("++++++++++++++++++++++++++++++++++++++++++++++++");

let str9 = "logo png";
let regExp9 = /^[l]png$/;
console.log(regExp9.exec(str9));
console.log(regExp9.test(str9));

console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
