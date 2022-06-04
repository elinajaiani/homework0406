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

////////


var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ]
var month = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]



if (day > 4 , month <4){
welcome = "მივდივართ სათხილამუროდ"
}

else if (month <9) {
    welcome = "მივდივართ ზღვაზე";
}

else {
    welcome = "ვმუშაობთ"
}

////////


var fruit = ["ვაშლი", "მსხალი", "ქლიავი"]
fruit.join ("ვაშლი", "მსხალი", "ქლიავი")

var fruit = ["ვაშლი", "მსხალი", "ქლიავი"]
fruit.splice (0,2)



