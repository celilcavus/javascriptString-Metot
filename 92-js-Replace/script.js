var metin = "Celil Çavuş Kırklareli";
document.write(metin + "</br>");

// var replaceValue = metin.replace("Kırklareli",18);
var replaceValue = metin.replace(/çavuş/i,"Cavus");
document.write(replaceValue);