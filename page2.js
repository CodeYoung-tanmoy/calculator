
//  *******************************Beginning of data*************************

function calcData() {
    var opt_1 = document.querySelector(".opt1").value
    var opt_2 = document.querySelector(".opt2").value
    var val_1 = document.querySelector(".form-control-1").value
    var val_2
    
    //  Byte to all other conversions
    if (opt_1 == "B") {
        switch (opt_2) {
            case "B": val_2 = val_1;
                break;
            case "KB": val_2 = (val_1 / Math.pow(2, 10));
                break;
            case "MB": val_2 = (val_1 / Math.pow(2, 20));
                break;
            case "GB": val_2 = (val_1 / Math.pow(2, 30));
                break;
            case "TB": val_2 = (val_1 / Math.pow(2, 40));
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data").innerHTML = val_2
    }

    //   Kilobyte to all other conversions
    else if (opt_1 == "KB") {
        switch (opt_2) {
            case "B": val_2 = (val_1 / Math.pow(2, -10));
                break;
            case "KB": val_2 = val_1;
                break;
            case "MB": val_2 = (val_1 / Math.pow(2, 10));
                break;
            case "GB": val_2 = (val_1 / Math.pow(2, 20));
                break;
            case "TB": val_2 = (val_1 / Math.pow(2, 30));
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data").innerHTML = val_2
    }

    //   Megabyte to all other conversions
    else if (opt_1 == "MB") {
        switch (opt_2) {
            case "B": val_2 = (val_1 / Math.pow(2, -20));
                break;
            case "KB": val_2 = (val_1 / Math.pow(2, -10));
                break;
            case "MB": val_2 = val_1;
                break;
            case "GB": val_2 = (val_1 / Math.pow(2, 10));
                break;
            case "TB": val_2 = (val_1 / Math.pow(2, 20));
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data").innerHTML = val_2
    }

    //   Gigabyte to all other conversions
    else if (opt_1 == "GB") {
        switch (opt_2) {
            case "B": val_2 = (val_1 / Math.pow(2, -30));
                break;
            case "KB": val_2 = (val_1 / Math.pow(2, -20));
                break;
            case "MB": val_2 = (val_1 / Math.pow(2, -10));
                break;
            case "GB": val_2 = val_1;
                break;
            case "TB": val_2 = (val_1 / Math.pow(2, 10));
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data").innerHTML = val_2
    }

    //   Terabyte to all other conversions
    else if (opt_1 == "TB") {
        switch (opt_2) {
            case "B": val_2 = (val_1 / Math.pow(2, -40));
                break;
            case "KB": val_2 = (val_1 / Math.pow(2, -30));
                break;
            case "MB": val_2 = (val_1 / Math.pow(2, -20));
                break;
            case "GB": val_2 = (val_1 / Math.pow(2, -10));
                break;
            case "TB": val_2 = val_1;
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data").innerHTML = val_2
    }
    else {
        return 0
    }
}


// *********************End of data****************************************************

// *********************Beginning of temperature***************************************

function calcTemperature() {
    var opt_1 = document.querySelector(".opt3").value
    var opt_2 = document.querySelector(".opt4").value
    var val_1 = document.querySelector(".form-control-2").value
    var val_2
    
    //  Celsius to all other conversions
    if (opt_1 == "C") {
        switch (opt_2) {
            case "C":
                val_2 = val_1;
                break;
            case "F":
                val_2 = (1.8 * val_1) + 32;
                break;
            case "K":
                val_2 = 273.16 + val_1;
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data-2").innerHTML = val_2
    }

    //  Fahrenheit to all other conversions
    else if (opt_1 == "F") {
        switch (opt_2) {
            case "F":
                val_2 = val_1;
                break;
            case "C":
                val_2 = (val_1 - 32) / 1.8;
                break;
            case "K":
                val_2 = 273.16 + ((val_1 - 32) / 1.8);
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data-2").innerHTML = val_2
    }

    //  Kelvin to all other conversions
    else if (opt_1 == "K") {
        switch (opt_2) {
            case "K":
                val_2 = val_1;
                break;
            case "C":
                val_2 = val_1 - 273.16;
                break;
            case "F":
                val_2 = 32 + ((val_1 - 273.16) * 1.8);
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data-2").innerHTML = val_2
    }

    else {
        return 0
    }

}

// *********************End of Temperature*********************************************

// ************************Beginning of Length******************************************

function calcLength() {
    var opt_1 = document.querySelector(".opt5").value
    var opt_2 = document.querySelector(".opt6").value
    var val_1 = document.querySelector(".form-control-3").value
    var val_2

    //  Meter to all other conversions
    if (opt_1 == "M") {
        switch (opt_2) {
            case "M":
                val_2 = val_1;
                break;
            case "K":
                val_2 = val_1 / 1000;
                break;
            case "Ms":
                val_2 = val_1 / 1600;
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data-3").innerHTML = val_2
    }
    //  Kilometer to all other conversions
    else if (opt_1 == "K") {
        switch (opt_2) {
            case "K":
                val_2 = val_1;
                break;
            case "M":
                val_2 = val_1 * 1000;
                break;
            case "Ms":
                val_2 = val_1 / 1.6;
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data-3").innerHTML = val_2
    }
    //  Miles to all other conversions
    else if (opt_1 == "Ms") {
        switch (opt_2) {
            case "Ms":
                val_2 = val_1;
                break;
            case "M":
                val_2 = val_1 * 1600;
                break;
            case "K":
                val_2 = val_1 * 1.6;
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data-3").innerHTML = val_2
    }


    else {
        return 0
    }
}


// *************************End of Length**********************************************

// *************************Beginning of Weight****************************************

function calcWeight() {
    var opt_1 = document.querySelector(".opt7").value
    var opt_2 = document.querySelector(".opt8").value
    var val_1 = document.querySelector(".form-control-4").value
    var val_2

    //  Kilogram to all other conversions
    if (opt_1 == "K") {
        switch (opt_2) {
            case "K":
                val_2 = val_1;
                break;
            case "G":
                val_2 = val_1 * 1000;
                break;
            case "Q":
                val_2 = val_1 / 100;
                break;
            case "P":
                val_2 = val_1 * 2.2046;
                break;
            case "O":
                val_2 = val_1 * 35.2734;
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data-4").innerHTML = val_2
    }
    //  Gram to all other conversions
    else if (opt_1 == "G") {
        switch (opt_2) {
            case "K":
                val_2 = val_1 / 1000;
                break;
            case "G":
                val_2 = val_1;
                break;
            case "Q":
                val_2 = val_1 / 100000;
                break;
            case "P":
                val_2 = val_1 * 0.0022;
                break;
            case "O":
                val_2 = val_1 * 0.0352;
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data-4").innerHTML = val_2
    }
    //  Quintal to all other conversions
    else if (opt_1 == "Q") {
        switch (opt_2) {
            case "K":
                val_2 = val_1 * 100;
                break;
            case "G":
                val_2 = val_1 * 100000;
                break;
            case "Q":
                val_2 = val_1;
                break;
            case "P":
                val_2 = val_1 * 220.4623;
                break;
            case "O":
                val_2 = val_1 * 3527.3962;
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data-4").innerHTML = val_2
    }

    //  Pound to all other conversions
    else if (opt_1 == "P") {
        switch (opt_2) {
            case "K":
                val_2 = val_1 * 0.4536;
                break;
            case "G":
                val_2 = val_1 * 453.5924;
                break;
            case "Q":
                val_2 = val_1 * 0.0045;
                break;
            case "P":
                val_2 = val_1;
                break;
            case "O":
                val_2 = val_1 * 16;
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data-4").innerHTML = val_2
    }

    //  Ounce to all other conversions
    else if (opt_1 == "O") {
        switch (opt_2) {
            case "K":
                val_2 = val_1 * 0.02835;
                break;
            case "G":
                val_2 = val_1 * 28.3495;
                break;
            case "Q":
                val_2 = val_1 * 0.0002835;
                break;
            case "P":
                val_2 = val_1 * 0.0625;
                break;
            case "O":
                val_2 = val_1;
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data-4").innerHTML = val_2
    }

    else {
        return 0
    }
}

// *************************End of Weight**********************************************

// *************************Beginning of Time******************************************

function calcTime() {
    var opt_1 = document.querySelector(".opt9").value
    var opt_2 = document.querySelector(".opt10").value
    var val_1 = document.querySelector(".form-control-5").value
    var val_2

    //  Year to all other conversions
    if (opt_1 == "Y") {
        switch (opt_2) {
            case "Y":
                val_2 = val_1;
                break;
            case "M":
                val_2 = val_1 * 12;
                break;
            case "D":
                val_2 = val_1 * 365;
                break;
            case "H":
                val_2 = val_1 * 365 * 24;
                break;
            case "Mi":
                val_2 = val_1 * 365 * 24 * 60;
                break;
            case "S":
                val_2 = val_1 * 365 * 24 * 60 * 60;
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data-5").innerHTML = val_2
    }

    //  Month to all other conversions
    else if (opt_1 == "M") {
        switch (opt_2) {
            case "Y":
                val_2 = val_1 / 12;
                break;
            case "M":
                val_2 = val_1 ;
                break;
            case "D":
                val_2 = val_1 * 30;
                break;
            case "H":
                val_2 = val_1 * 30 * 24;
                break;
            case "Mi":
                val_2 = val_1 * 30 * 24 * 60;
                break;
            case "S":
                val_2 = val_1 * 30 * 24 * 60 * 60;
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data-5").innerHTML = val_2
    }

    //  Day to all other conversions
    else if (opt_1 == "D") {
        switch (opt_2) {
            case "Y":
                val_2 = val_1 / 365;
                break;
            case "M":
                val_2 = val_1 / 30;
                break;
            case "D":
                val_2 = val_1 ;
                break;
            case "H":
                val_2 = val_1 * 24;
                break;
            case "Mi":
                val_2 = val_1 * 24 * 60;
                break;
            case "S":
                val_2 = val_1 * 24 * 60 * 60;
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data-5").innerHTML = val_2
    }

    else if (opt_1 == "H") {
        switch (opt_2) {
            case "Y":
                val_2 = val_1 / (365 * 24);
                break;
            case "M":
                val_2 = val_1 / (12 * 24);
                break;
            case "D":
                val_2 = val_1 / 24;
                break;
            case "H":
                val_2 = val_1 ;
                break;
            case "Mi":
                val_2 = val_1 * 60;
                break;
            case "S":
                val_2 = val_1 * 60 * 60;
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data-5").innerHTML = val_2
    }

    else if (opt_1 == "Mi") {
        switch (opt_2) {
            case "Y":
                val_2 = val_1 / (365 * 24 * 60);
                break;
            case "M":
                val_2 = val_1 / (12 * 24 * 60);
                break;
            case "D":
                val_2 = val_1 / (24 * 60);
                break;
            case "H":
                val_2 = val_1 / 60;
                break;
            case "Mi":
                val_2 = val_1 ;
                break;
            case "S":
                val_2 = val_1 * 60;
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data-5").innerHTML = val_2
    }

    else if (opt_1 == "S") {
        switch (opt_2) {
            case "Y":
                val_2 = val_1 / (365 * 24 * 60 * 60);
                break;
            case "M":
                val_2 = val_1 / (12 * 24 * 60 * 60);
                break;
            case "D":
                val_2 = val_1 / (24 * 60 * 60);
                break;
            case "H":
                val_2 = val_1 / (60 * 60);
                break;
            case "Mi":
                val_2 = val_1 / 60;
                break;
            case "S":
                val_2 = val_1 ;
                break;
            default:
                return null;
        }
        document.querySelector(".ans-data-5").innerHTML = val_2
    }


    else{
        return 0;
    }
}

// *************************End of Time************************************************
