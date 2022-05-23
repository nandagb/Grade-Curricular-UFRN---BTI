function matele1 (){
    var obj = document.getElementById("FMCI");
    obj.style.backgroundColor = "#6495ED";
    var obj = document.getElementById("VGA");
    obj.style.backgroundColor = "#6495ED";
    var obj = document.getElementById("CAL");
    obj.style.backgroundColor = "#6495ED";

}
function matele2 (){
    var obj = document.getElementById("FMCI");
    obj.style.backgroundColor = "#EEE";
    var obj = document.getElementById("VGA");
    obj.style.backgroundColor = "#EEE";
    var obj = document.getElementById("CAL");
    obj.style.backgroundColor = "#EEE";

}
function ple1(){
    var obj = document.getElementById("PLEII");
    obj.style.backgroundColor = "#6495ED";
}
function ple2(){
    var obj = document.getElementById("PLEII");
    obj.style.backgroundColor = "#EEE";
}
function pc1(){
    var obj = document.getElementById("ITP");
    obj.style.backgroundColor = "#6495ED";
}
function pc2(){
    var obj = document.getElementById("ITP");
    obj.style.backgroundColor = "#EEE";
}
function ge1(){
    var obj = document.getElementById("CAL");
    obj.style.backgroundColor = "#6495ED";
}
function ge2(){
    var obj = document.getElementById("CAL");
    obj.style.backgroundColor = "#EEE";
}
function ac1(){
    var obj = document.getElementById("CAL");
    obj.style.backgroundColor = "#6495ED";
    var obj = document.getElementById("PROB");
    obj.style.backgroundColor = "#6495ED";
}
function ac2(){
    var obj = document.getElementById("CAL");
    obj.style.backgroundColor = "#EEE";
    var obj = document.getElementById("PROB");
    obj.style.backgroundColor = "#EEE";
}
function addEventos(){
    var obj = document.getElementById("ME");
    obj.addEventListener("mouseover",matele1);
    obj.addEventListener("mouseout",matele2);
    var obj = document.getElementById("PLEI");
    obj.addEventListener("mouseover",ple1);
    obj.addEventListener("mouseout",ple2);
    var obj = document.getElementById("PC");
    obj.addEventListener("mouseover",pc1);
    obj.addEventListener("mouseout",pc2);
    var obj = document.getElementById("GE");
    obj.addEventListener("mouseover",ge1);
    obj.addEventListener("mouseout",ge2);
    var obj = document.getElementById("AC");
    obj.addEventListener("mouseover",ac1);
    obj.addEventListener("mouseout",ac2);
}