var dias = 10000;
console.log("Eduardo tem " + dias + " dias de vida.");

var anos = Math.floor(10000 / 365);
var meses = Math.floor((10000 % 365) / 30);
var dias = (10000 % 365) % 30;
console.log("Eduardo tem: " + anos + " anos, " + meses + " meses e " + dias + " dias de vida.");