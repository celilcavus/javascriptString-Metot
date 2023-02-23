// Match() Kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini kontrol eder ve eşleşen değer var ise içeriğin eşleşen değer kısmından yeni bir içerik oluşturur. Ve oluşturduğu içeriği geriye döndürür.

var value = "Celil Cavus Kırklareli";
document.write(value + "</br>");

// var value1 = value.match("Celil Cavus");
var value1 = value.match(/cavus/ig);
var value1 = value.match(/cavus/i);//ignorecase
var value1 = value.match(/cavus/g);//global
var value2 = value.match("celil");
document.write(value1 + "</br>");
document.write(value2);
