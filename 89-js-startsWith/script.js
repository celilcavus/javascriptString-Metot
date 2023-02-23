// StartsWith() Kendisine parametre verilen değerler doğrultusunda değişken içeriğini başlangıç doğrultusunu kontrol ederek boolean veri türü olarak sonucu geriye döndürür.

var metin = "Javascript egitim seti";
document.write(metin + "</br>");

var contrl1 = metin.startsWith("Javascript");
var contrl1 = metin.startsWith("egitim",11);
var contrl2 = metin.startsWith("egitim");
document.write(contrl1 + "</br>");
document.write(contrl2);
