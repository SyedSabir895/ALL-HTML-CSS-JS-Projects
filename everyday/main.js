
let date = new Date()

let dayNumber = date.getDay();

let theDayis;

let quote;


switch(dayNumber){
    case 0:
        theDayis = "Sunday";
        quote = "MAAR"
        break;
    case 1:
        theDayis = "Monday";
        quote = "CRINGE"
        break;
    case 2:
        theDayis = "Tuesday";
        quote = "MID"
        break;
    case 3:
        theDayis = "Wednesday";
        quote = "GET IT"
        break;
    case 4:
        theDayis = "Thursday";
        quote = "COME ON!"
        break;
    case 5:
        theDayis = "Friday";
        quote = "IT'S NEAR"
        break;
    case 6:
        theDayis = "Saturday";
        quote = "TOM"
        break;
}

let spanOfWeekDay = document.getElementById("weekday")
spanOfWeekDay.innerHTML = `${theDayis}`

let quoteOfDay = document.getElementById("quote")
quoteOfDay.innerHTML = `${quote}`