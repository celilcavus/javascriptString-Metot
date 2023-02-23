// var icerik = String.fromCharCode(67);
// document.write(icerik);

var value = "Javascript Eğitim Seti";
document.write(value + "</br>");

for (let index = 0; index < value.length; index++) {
   var icerik = value.charCodeAt(index);
   // document.write(icerik + " ");
   for (let i = 0; i < value.length - (value.length - 1); i++) {
      var val = String.fromCharCode(icerik);
      document.write(val);
   }
}

