// includes(); Kendisine parametre olarak verilen değişken içeriğini kontrol ederek boolean veri türünde sonucu geriye döndürür.

var value = "Javascript Egitim Seti";
document.write(value + "</br>");

var control = value.includes("Egitim");
if (control) {
   
   document.write("İçerik Bulundu");
}
else{
   document.write("İçerik bulunamadı");
}