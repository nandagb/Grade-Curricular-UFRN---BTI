//cores
var rgbAzul = "rgb(100, 149, 237)";
var hexAzul = "#6494ED";
var rgbCinza = "rgb(238, 238, 238)";
var hexCinza = "#EEE";
var rgbRosa = "rgb(255, 182, 193)";
var hexRosa = "#FFB6C1";

//materias
var me = document.getElementById("ME");
var fmc1 = document.getElementById("FMCI");
var ac = document.getElementById("AC");
var ge = document.getElementById("GE");
var c1 = document.getElementById("CAL");
var vga = document.getElementById("VGA");
var pc = document.getElementById("PC");
var itp = document.getElementById("ITP");
var ple1 = document.getElementById("PLEI");
var ple2 = document.getElementById("PLEII");
var tis = document.getElementById("TIS");
var pli = document.getElementById("PLI");
var edb1 = document.getElementById("EDBI");
var edb2 = document.getElementById("EDBII");
var arq = document.getElementById("ARQ");
var lp1 = document.getElementById("LPI");
var lp2 = document.getElementById("LPII");
var fmc2 = document.getElementById("FMCII");
var prob = document.getElementById("PROB");
var so = document.getElementById("SO");
var redes = document.getElementById("REDES");
var bd = document.getElementById("BD");
var bpp = document.getElementById("BPP");
var apoo = document.getElementById("APOO");
var piu = document.getElementById("PIU");
var op1 = document.getElementById("optativo1");
var op2 = document.getElementById("optativo2");
var op3 = document.getElementById("optativo3");
var op4 = document.getElementById("optativo4");
var pds = document.getElementById("PDS");
var ts = document.getElementById("TS");
var graf = document.getElementById("GRAF");
var web1 = document.getElementById("WEBI");
var progc = document.getElementById("PROGC");
var web2 = document.getElementById("WEBII");
var laes = document.getElementById("LAES");
var pd = document.getElementById("PD");
var el = document.getElementById("EL");
var mfes = document.getElementById("MFES");

function matEle(){
    
    //quando o elemento está clicado
    if(me.style.backgroundColor === rgbRosa) {
        me.style.backgroundColor = rgbCinza;
        fmc1.style.backgroundColor = rgbCinza;
        c1.style.backgroundColor = rgbCinza;
        vga.style.backgroundColor = rgbCinza;
        
    }else {
        if(ac.style.backgroundColor === rgbRosa && ge.style.backgroundColor === rgbRosa)
            fmc1.style.backgroundColor = rgbAzul;
        me.style.backgroundColor = rgbRosa;
        c1.style.backgroundColor = rgbAzul;
        vga.style.backgroundColor = rgbAzul;
    }

}

function analiseComb(){

    if(ac.style.backgroundColor === rgbRosa) {
        fmc1.style.backgroundColor = rgbCinza;
        ac.style.backgroundColor = rgbCinza;
        prob.style.backgroundColor = rgbCinza;
    }else {
        if(me.style.backgroundColor === rgbRosa && ge.style.backgroundColor === rgbRosa)
            fmc1.style.backgroundColor = rgbAzul;
        if(c1.style.backgroundColor === rgbRosa)
            prob.style.backgroundColor = rgbAzul;
        ac.style.backgroundColor = rgbRosa;
        
    }

}

function geoEucl(){

    if(ge.style.backgroundColor === rgbRosa) {
        ge.style.backgroundColor = rgbCinza;
        fmc1.style.backgroundColor = rgbCinza;
    }else {
        if(ac.style.backgroundColor === rgbRosa && me.style.backgroundColor === rgbRosa)
            fmc1.style.backgroundColor = rgbAzul;
        ge.style.backgroundColor = rgbRosa;
    }

}

function penComp(){
    if(pc.style.backgroundColor === rgbRosa){
        pc.style.backgroundColor = rgbCinza;
        itp.style.backgroundColor = rgbCinza;
    }
    else{
        pc.style.backgroundColor = rgbRosa;
        itp.style.backgroundColor = rgbAzul;
    }
}

function port1(){
    if(ple1.style.backgroundColor === rgbRosa){
        ple1.style.backgroundColor = rgbCinza;
        ple2.style.backgroundColor = rgbCinza;
    }
    else{
        ple1.style.backgroundColor = rgbRosa;
        ple2.style.backgroundColor = rgbAzul;
    }
}

function ingles(){
    if(pli.style.backgroundColor === rgbRosa){
        pli.style.backgroundColor = rgbCinza;
    }
    else{
        pli.style.backgroundColor = rgbRosa;
    }
}

function sociedade(){
    if(tis.style.backgroundColor === rgbRosa){
        tis.style.backgroundColor = rgbCinza;
    }
    else{
        tis.style.backgroundColor = rgbRosa;
    }
}

function port2(){
    if(ple2.style.backgroundColor === rgbRosa){
        if(ple1.style.backgroundColor === rgbRosa)
            ple2.style.backgroundColor = rgbAzul;
        else ple2.style.backgroundColor = rgbCinza;
        
    }
    else{
        ple2.style.backgroundColor = rgbRosa;
    }
}

function tecProg(){
    if(itp.style.backgroundColor === rgbRosa){
        if(pc.style.backgroundColor === rgbRosa)
            itp.style.backgroundColor = rgbAzul;
        else itp.style.backgroundColor = rgbCinza;
        arq.style.backgroundColor = rgbCinza;
        edb1.style.backgroundColor = rgbCinza;
        lp1.style.backgroundColor = rgbCinza;
    }
    else{
        itp.style.backgroundColor = rgbRosa;
        arq.style.backgroundColor = rgbAzul;
        edb1.style.backgroundColor = rgbAzul;
        lp1.style.backgroundColor = rgbAzul;
        
    }
}

function cal(){
    if(c1.style.backgroundColor === rgbRosa){
        if(me.style.backgroundColor === rgbRosa)
            c1.style.backgroundColor = rgbAzul;
        else c1.style.backgroundColor = rgbCinza;
        prob.style.backgroundColor = rgbCinza;
    }
    else{
        c1.style.backgroundColor = rgbRosa;
        if(ac.style.backgroundColor === rgbRosa)
            prob.style.backgroundColor = rgbAzul;
    }
}

function funMat1(){
    if(fmc1.style.backgroundColor === rgbRosa){
        if(me.style.backgroundColor === rgbRosa && ac.style.backgroundColor === rgbRosa && ge.style.backgroundColor === rgbRosa)
            fmc1.style.backgroundColor = rgbAzul;
        else fmc1.style.backgroundColor = rgbCinza;
        fmc2.style.backgroundColor = rgbCinza;
    }
    else{
        fmc1.style.backgroundColor = rgbRosa;
        fmc2.style.backgroundColor = rgbAzul;
    }
}

function vetGeo(){
    if(vga.style.backgroundColor === rgbRosa){
        if(me.style.backgroundColor === rgbRosa)
            vga.style.backgroundColor = rgbAzul;
        else vga.style.backgroundColor = rgbCinza;
    }
    else{
        vga.style.backgroundColor = rgbRosa;
    }
}

function arqComp(){
    if(arq.style.backgroundColor === rgbRosa){
        if(itp.style.backgroundColor === rgbRosa)
            arq.style.backgroundColor = rgbAzul;
        else arq.style.backgroundColor = rgbCinza;
        so.style.backgroundColor = rgbCinza;
        redes.style.backgroundColor = rgbCinza;
    }
    else{
        arq.style.backgroundColor = rgbRosa;
        so.style.backgroundColor = rgbAzul;
        redes.style.backgroundColor = rgbAzul;
    }
}

function estDados1(){
    if(edb1.style.backgroundColor === rgbRosa){
        if(itp.style.backgroundColor === rgbRosa)
            edb1.style.backgroundColor = rgbAzul;
        else edb1.style.backgroundColor = rgbCinza;
        edb2.style.backgroundColor = rgbCinza;
    }
    else{
        edb1.style.backgroundColor = rgbRosa;
        edb2.style.backgroundColor = rgbAzul;
    }
}

function linProg1(){
    if(lp1.style.backgroundColor === rgbRosa){
        if(itp.style.backgroundColor === rgbRosa)
            lp1.style.backgroundColor = rgbAzul;
        else lp1.style.backgroundColor = rgbCinza;
        lp2.style.backgroundColor = rgbCinza;
        if(bpp != null){    
            bpp.style.backgroundColor = rgbCinza;
            apoo.style.backgroundColor = rgbCinza;
            piu.style.backgroundColor = rgbCinza;
            web1.style.backgroundColor = rgbCinza;
        }
    }
    else{
        lp1.style.backgroundColor = rgbRosa;
        lp2.style.backgroundColor = rgbAzul;
        if(bpp != null){
            bpp.style.backgroundColor = rgbAzul;
            apoo.style.backgroundColor = rgbAzul;
            piu.style.backgroundColor = rgbAzul;
            web1.style.backgroundColor = rgbAzul;
        }
    }
}

function funMat2(){
    if(fmc2.style.backgroundColor === rgbRosa){
        if(fmc1.style.backgroundColor === rgbRosa)
            fmc2.style.backgroundColor = rgbAzul;
        else fmc2.style.backgroundColor = rgbCinza;
        if(laes != null) laes.style.backgroundColor = rgbCinza;
    }
    else{
        fmc2.style.backgroundColor = rgbRosa;
        if(laes != null) laes.style.backgroundColor = rgbAzul;
    }
}

function pro(){
    if(prob.style.backgroundColor === rgbRosa){
        if(ac.style.backgroundColor === rgbRosa && c1.style.backgroundColor === rgbRosa)
            prob.style.backgroundColor = rgbAzul;
        else prob.style.backgroundColor = rgbCinza;
    }
    else{
        prob.style.backgroundColor = rgbRosa;
    }
}

function sisOp(){
    if(so.style.backgroundColor === rgbRosa){
        if(arq.style.backgroundColor === rgbRosa)
            so.style.backgroundColor = rgbAzul;
        else so.style.backgroundColor = rgbCinza;
        if(progc != null) progc.style.backgroundColor = rgbCinza;
    }
    else{
        so.style.backgroundColor = rgbRosa;
        if(progc != null && lp2.style.backgroundColor === rgbRosa) progc.style.backgroundColor = rgbAzul;
    }
}

function estDados2(){
    if(edb2.style.backgroundColor === rgbRosa){
        if(edb1.style.backgroundColor === rgbRosa)
            edb2.style.backgroundColor = rgbAzul;
        else edb2.style.backgroundColor = rgbCinza;
        if(graf != null) graf.style.backgroundColor = rgbCinza;
        if(web2 != null){
            web2.style.backgroundColor = rgbCinza;
            el.style.backgroundColor = rgbCinza;
        }
    }
    else{
        edb2.style.backgroundColor = rgbRosa;
        if(graf != null) graf.style.backgroundColor = rgbAzul;
        if(web2 != null){
            if(web1.style.backgroundColor === rgbRosa) web2.style.backgroundColor = rgbAzul;
            if(lp2.style.backgroundColor === rgbRosa) el.style.backgroundColor = rgbAzul;
        }
    }
}

function linProg2(){
    if(lp2.style.backgroundColor === rgbRosa){
        if(lp1.style.backgroundColor === rgbRosa)
            lp2.style.backgroundColor = rgbAzul;
        else lp2.style.backgroundColor = rgbCinza;
        bd.style.backgroundColor = rgbCinza;
        if(pds != null){
            pds.style.backgroundColor = rgbCinza;
            ts.style.backgroundColor = rgbCinza;
            pd.style.backgroundColor = rgbCinza;
            el.style.backgroundColor = rgbCinza;
            web1.style.backgroundColor = rgbCinza;
        }
        //ambas as grades
        if(progc != null) progc.style.backgroundColor = rgbCinza;
    }
    else{
        lp2.style.backgroundColor = rgbRosa;
        bd.style.backgroundColor = rgbAzul;
        if(pds != null){
            pds.style.backgroundColor = rgbAzul;
            ts.style.backgroundColor = rgbAzul;
            if(redes.style.backgroundColor === rgbRosa) pd.style.backgroundColor = rgbAzul;
            if(edb2.style.backgroundColor === rgbRosa) el.style.backgroundColor = rgbAzul;
            if(web1.style.backgroundColor === rgbRosa) web2.style.backgroundColor = rgbAzul;
        }
        if(progc != null && so.style.backgroundColor === rgbRosa) progc.style.backgroundColor = rgbAzul;
    }
}

function redesComp(){
    if(redes.style.backgroundColor === rgbRosa){
        if(arq.style.backgroundColor === rgbRosa)
            redes.style.backgroundColor = rgbAzul;
        else redes.style.backgroundColor = rgbCinza;
        //if(pd != null) pd.style.backgroundColor = rgbCinza;
    }
    else{
        redes.style.backgroundColor = rgbRosa;
        //if(pd != null && lp2.style.backgroundColor = rgbRosa) pd.style.backgroundColor = rgbCinza;
    }
}

function bancoDados(){
    if(bd.style.backgroundColor === rgbRosa){
        if(lp2.style.backgroundColor === rgbRosa)
            bd.style.backgroundColor = rgbAzul;
        else bd.style.backgroundColor = rgbCinza;
    }
    else{
        bd.style.backgroundColor = rgbRosa;
    }
}

function optativo1(){
    if(op1.style.backgroundColor === rgbRosa){
        op1.style.backgroundColor = rgbCinza;
    }
    else{
        op1.style.backgroundColor = rgbRosa;
    }
}

function optativo2(){
    if(op2.style.backgroundColor === rgbRosa){
        op2.style.backgroundColor = rgbCinza;
    }
    else{
        op2.style.backgroundColor = rgbRosa;
    }
}

function optativo3(){
    if(op3.style.backgroundColor === rgbRosa){
        op3.style.backgroundColor = rgbCinza;
    }
    else{
        op3.style.backgroundColor = rgbRosa;
    }
}

function optativo4(){
    if(op4.style.backgroundColor === rgbRosa){
        op4.style.backgroundColor = rgbCinza;
    }
    else{
        op4.style.backgroundColor = rgbRosa;
    }
}


//antes de voltar para o cinza, checar se as materias prerequisitos estão selecionadas
//se sim então voltar para o azul em vez do cinza
function addEventos(){
    // ========= Grade geral do BTI =========
    //1 semestre
    me.addEventListener("click", matEle);
    ac.addEventListener("click", analiseComb);
    ge.addEventListener("click", geoEucl);
    pc.addEventListener("click", penComp);
    ple1.addEventListener("click", port1);
    pli.addEventListener("click", ingles);
    tis.addEventListener("click", sociedade);
    
    //2 semestre
    ple2.addEventListener("click", port2);
    itp.addEventListener("click", tecProg);
    c1.addEventListener("click", cal);
    fmc1.addEventListener("click", funMat1);
    vga.addEventListener("click", vetGeo);

    //3 semestre
    arq.addEventListener("click", arqComp);
    edb1.addEventListener("click", estDados1);
    lp1.addEventListener("click", linProg1);
    fmc2.addEventListener("click", funMat2);
    prob.addEventListener("click", pro);

    //4 semestre
    so.addEventListener("click", sisOp);
    edb2.addEventListener("click", estDados2);
    lp2.addEventListener("click", linProg2);

    //5 semestre
    redes.addEventListener("click", redesComp);

    //6 semestre
    bd.addEventListener("click", bancoDados);

    //optativas
    op1.addEventListener("click", optativo1);
    op2.addEventListener("click", optativo2);
    op3.addEventListener("click", optativo3);
    op4.addEventListener("click", optativo4);

    
    // ============= Grade de EDS =============



}
