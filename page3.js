// Square
function calcSquare() {
    var val1 = document.querySelector(".form-control-1-1").value
    var val2 = document.querySelector(".form-control-1-2").value
    var ar = 0
    var peri = 0
    ar = val1 * val2
    peri = (2 * val1) + (2 * val2)
    document.querySelector(".ans-1").innerHTML = "<b>Area : </b>" + ar + " <i><b>sq units</b></i> <br> <b> Perimeter : </b>" + peri + " <i><b>units</b></i>"
}

// Circle
function calcCircle() {
    var val1 = document.querySelector(".form-control-2-1").value
    var ar = 0
    var peri = 0
    ar = Math.PI * val1 * val1
    peri = 2 * Math.PI * val1
    document.querySelector(".ans-2").innerHTML = "<b>Area : </b>" + ar + " <i><b>sq units</b></i> <br> <b> Circumference : </b>" + peri + " <i><b>units</b></i>"
}

// Triangle
function calcTriangle() {
    var val1 = document.querySelector(".form-control-3-1").value
    var val2 = document.querySelector(".form-control-3-2").value
    var val3 = document.querySelector(".form-control-3-3").value
    var ar = 0
    var peri = 0
    var s = (val1 / 2) + (val2 / 2) + (val3 / 2)
    ar = Math.sqrt(s * (s - val1) * (s - val2) * (s - val3))
    peri = 2 * s
    document.querySelector(".ans-3").innerHTML = "<b>Area : </b>" + ar + " <i><b>sq units</b></i> <br> <b> Circumference : </b>" + peri + " <i><b>units</b></i>"
}

// Cube
function calcCube() {
    var val1 = document.querySelector(".form-control-4-1").value
    var lsa, tsa, vol
    lsa = 4 * val1 * val1
    tsa = 6 * val1 * val1
    vol = val1 * val1 * val1
    document.querySelector(".ans-4").innerHTML = "<b>Lateral Surface Area : </b>" + lsa +
        " <i><b>sq units</b></i> <br><b>Total Surface Area : </b>" + tsa + " <i><b>sq units</b></i> <br> <b>Volume : </b>" +
        vol + " <i><b>cubic units</b></i>"
}

// Cuboid
function calcCuboid() {
    var val1 = document.querySelector(".form-control-5-1").value
    var val2 = document.querySelector(".form-control-5-2").value
    var val3 = document.querySelector(".form-control-5-3").value
    var lsa, tsa, vol
    lsa = (2 * val3 * val1) + (2 * val3 * val2)
    tsa = 2 * ((val1 * val2) + (val2 * val3) + (val3 * val1))
    vol = val1 * val2 * val3
    document.querySelector(".ans-5").innerHTML = "<b>Lateral Surface Area : </b>" + lsa +
        " <i><b>sq units</b></i> <br><b>Total Surface Area : </b>" + tsa + " <i><b>sq units</b></i> <br> <b>Volume : </b>" +
        vol + " <i><b>cubic units</b></i>"
}

// Cylinder
function calcCylinder(){
    var val1 = document.querySelector(".form-control-6-1").value
    var val2 = document.querySelector(".form-control-6-2").value 
    var lsa, tsa, vol, cir
    lsa = 2*Math.PI*val1*val2
    tsa = lsa + (2*Math.PI*val2*val2)  
    vol = Math.PI*val2*val2*val1
    cir = Math.PI*val2*val2
    document.querySelector(".ans-6").innerHTML = "<b>Curved Surface Area : </b>" + lsa +
        " <i><b>sq units</b></i> <br><b>Total Surface Area : </b>" + tsa + " <i><b>sq units</b></i> <br> <b>Volume : </b>" +
        vol + " <i><b>cubic units</b></i> <br> <b>Area of Base : </b>"+cir+" <i><b>sq units</b></i> "
}

// Sphere
function calcSphere(){
    var val1 = document.querySelector(".form-control-7-1").value
    var sa,vol
    sa = 4*Math.PI*val1*val1
    vol = 4*Math.PI*val1*val1*val1/3
    document.querySelector(".ans-7").innerHTML = "<b>Surface Area : </b>" + sa + " <i><b>sq units</b></i> <br> <b> Volume : </b>" + vol + " <i><b>cubic units</b></i>"
}

// Cone
function calcCone(){
    var val1 = document.querySelector(".form-control-8-1").value
    var val2 = document.querySelector(".form-control-8-2").value 
    var lsa, tsa, vol, cir, l
    l = Math.sqrt((val1*val1)+(val2*val2))
    lsa = Math.PI*val2*l
    cir = Math.PI*val1*val1
    tsa = lsa + cir
    vol = cir*val2/3
    document.querySelector(".ans-8").innerHTML = "<b>Curved Surface Area : </b>" + lsa +
        " <i><b>sq units</b></i> <br><b>Total Surface Area : </b>" + tsa + " <i><b>sq units</b></i> <br> <b>Volume : </b>" +
        vol + " <i><b>cubic units</b></i> <br> <b>Area of Base : </b>"+cir+" <i><b>sq units</b></i> "
    }