function ti_to_cc (){

    var obj = document.getElementById("4-empty1");
    obj.innerHTML = "Circuitos Lógicos";

    var obj = document.getElementById("4-empty2");
    obj.innerHTML = "Matemática para Engenharia II";
    obj.style.backgroundColor = "#EEE";

    var obj = document.getElementById("4-empty3");
    obj.innerHTML = "Álgebra Linear para Computação";
    obj.style.backgroundColor = "#EEE";

    var obj = document.getElementById("4-empty4");
    obj.innerHTML = "Componente Curricular Optativo (xh)";
    obj.style.backgroundColor = "#EEE";


    var obj = document.getElementById("5-empty1");
    obj.innerHTML = "Organização de Computadores";

    var obj = document.getElementById("5-empty2");
    obj.innerHTML = "Grafos";
    obj.style.backgroundColor = "#EEE";

    var obj = document.getElementById("5-empty3");
    obj.innerHTML = "Fundamentos Matemáticos da Computação III";
    obj.style.backgroundColor = "#EEE";

    var obj = document.getElementById("5-empty4");
    obj.innerHTML = "Estatística Aplicada a Engenharia I";
    obj.style.backgroundColor = "#EEE";

    var obj = document.getElementById("5-empty5");
    obj.innerHTML = "Cálculo Numérico para Ciência da Computação";
    obj.style.backgroundColor = "#EEE";

    var obj = document.getElementById("5-empty6");
    obj.innerHTML = "Componente Curricular Optativo (xh)";
    obj.style.backgroundColor = "#EEE";


    var obj = document.getElementById("6-empty1");
    obj.innerHTML = "Projeto de Software";

    var obj = document.getElementById("6-empty2");
    obj.innerHTML = "Projeto e Análise de Algoritmos";
    obj.style.backgroundColor = "#EEE";

    var obj = document.getElementById("6-empty3");
    obj.innerHTML = "Lógica Computacional";
    obj.style.backgroundColor = "#EEE";

    var obj = document.getElementById("6-empty4");
    obj.innerHTML = "Componente Curricular Optativo (xh)";
    obj.style.backgroundColor = "#EEE";

    var obj = document.getElementById("7-empty1");
    obj.innerHTML = "Programação Concorrente";

    var obj = document.getElementById("7-empty2");
    obj.innerHTML = "Linguagem de Programação: Conceitos e Paradigmas";
    obj.style.backgroundColor = "#EEE";

    var obj = document.getElementById("7-empty3");
    obj.innerHTML = "Lógica Computacional";
    obj.style.backgroundColor = "#EEE";

    var obj = document.getElementById("7-empty4");
    obj.innerHTML = "Componente Curricular Optativo (xh)";
    obj.style.backgroundColor = "#EEE";

}



function cc_to_ti (){

    var obj = document.getElementById("4-empty1");
    obj.innerHTML = "Componente Curricular Optativo (xh)";

    var obj = document.getElementById("4-empty2");
    obj.innerHTML = "";
    obj.style.backgroundColor = "#cfd8e0";

    var obj = document.getElementById("4-empty3");
    obj.innerHTML = "";
    obj.style.backgroundColor = "#cfd8e0";

    var obj = document.getElementById("4-empty4");
    obj.innerHTML = "";
    obj.style.backgroundColor = "#cfd8e0";

    var obj = document.getElementById("5-empty1");
    obj.innerHTML = "Componente Curricular Optativo (xh)";

    var obj = document.getElementById("5-empty2");
    obj.innerHTML = "";
    obj.style.backgroundColor = "#cfd8e0";

    var obj = document.getElementById("5-empty3");
    obj.innerHTML = "";
    obj.style.backgroundColor = "#cfd8e0";

    var obj = document.getElementById("5-empty4");
    obj.innerHTML = "";
    obj.style.backgroundColor = "#cfd8e0";

    var obj = document.getElementById("5-empty5");
    obj.innerHTML = "o";
    obj.style.backgroundColor = "#cfd8e0";

    var obj = document.getElementById("5-empty6");
    obj.innerHTML = "";
    obj.style.backgroundColor = "#cfd8e0";

    var obj = document.getElementById("6-empty1");
    obj.innerHTML = "Componente Curricular Optativo (xh)";

    var obj = document.getElementById("6-empty2");
    obj.innerHTML = "";
    obj.style.backgroundColor = "#cfd8e0";

    var obj = document.getElementById("6-empty3");
    obj.innerHTML = "";
    obj.style.backgroundColor = "#cfd8e0";

    var obj = document.getElementById("6-empty4");
    obj.innerHTML = "";
    obj.style.backgroundColor = "#cfd8e0";

    var obj = document.getElementById("7-empty1");
    obj.innerHTML = "Componente Curricular Optativo (xh)"

    var obj = document.getElementById("7-empty2");
    obj.innerHTML = "";
    obj.style.backgroundColor = "#cfd8e0";

    var obj = document.getElementById("7-empty3");
    obj.innerHTML = "";
    obj.style.backgroundColor = "#cfd8e0";

    var obj = document.getElementById("7-empty4");
    obj.innerHTML = "";
    obj.style.backgroundColor = "#cfd8e0";
}


function addEventos(){
    var obj = document.getElementById("pag-cc");
    obj.addEventListener("click", ti_to_cc);

    var obj = document.getElementById("pag-ti");
    obj.addEventListener("click", cc_to_ti);
}