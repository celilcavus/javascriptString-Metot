// endsWith() Kendisine parametre verilen değerler doğrultusunda değişken içeriğini Bitiş doğrultusunu kontrol ederek boolean veri türü olarak sonucu geriye döndürür.

var metin = "Javascript egitim seti";
document.write(metin + "</br>");

// var contrl1 = metin.endsWith("seti");
var contrl1 = metin.endsWith("seti",metin.length);
var contrl2 = metin.endsWith("seti");
document.write(contrl1 + "</br>");
document.write(contrl2);
