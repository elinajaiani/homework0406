// ბათუმის ამინდი 

var welcome;
var time = new Date();
var month = time.getMonth();
var day = time.getDate();

if (month < 4) {
    welcome = "წვიმს";
}

else if (month < 8) {
    welcome = "ისევ წვიმს";
}

else { (month < 12) 
    welcome = "უფრო მაგრად წვიმს";
}
