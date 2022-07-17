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
var er = document.getElementById("ER");
var cl = document.getElementById("CL");
var c2 = document.getElementById("CALII");
var alc = document.getElementById("ALC");
var oc = document.getElementById("OC");
var fmc3 = document.getElementById("FMCIII");
var eae1 = document.getElementById("EAEI");
var cncc = document.getElementById("CNCC");
var ps = document.getElementById("PS");
var paa = document.getElementById("PAA");
var lfa = document.getElementById("LFA");
var lpcp = document.getElementById("LPCP");
var lc = document.getElementById("LC");




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
        if(alc != null) alc.style.backgroundColor = rgbCinza;
    }else {
        if(ac.style.backgroundColor === rgbRosa && me.style.backgroundColor === rgbRosa)
            fmc1.style.backgroundColor = rgbAzul;
        if(alc != null) alc.style.backgroundColor = rgbAzul;
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
        if(c2 != null) c2.style.backgroundColor = rgbCinza;
    }
    else{
        if(ac.style.backgroundColor === rgbRosa)
            prob.style.backgroundColor = rgbAzul;
        if(c2 != null) c2.style.backgroundColor = rgbAzul;
        c1.style.backgroundColor = rgbRosa;
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
        if(cl != null) cl.style.backgroundColor = rgbCinza;
    }
    else{
        so.style.backgroundColor = rgbAzul;
        redes.style.backgroundColor = rgbAzul;
        if(cl != null) cl.style.backgroundColor = rgbAzul; 
        arq.style.backgroundColor = rgbRosa;
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
        if(fmc3 != null) fmc3.style.backgroundColor = rgbCinza;
    }
    else{
        if(laes != null) laes.style.backgroundColor = rgbAzul;
        if(fmc3 != null) fmc3.style.backgroundColor = rgbAzul;
        fmc2.style.backgroundColor = rgbRosa;
    }
}

function pro(){
    if(prob.style.backgroundColor === rgbRosa){
        if(ac.style.backgroundColor === rgbRosa && c1.style.backgroundColor === rgbRosa)
            prob.style.backgroundColor = rgbAzul;
        else prob.style.backgroundColor = rgbCinza;
        if(eae1 != null) eae1.style.backgroundColor = rgbCinza;
    }
    else{
        if(eae1 != null && c2.style.backgroundColor === rgbRosa) eae1.style.backgroundColor = rgbAzul;
        prob.style.backgroundColor = rgbRosa;
    }
}

function sisOp(){
    if(so.style.backgroundColor === rgbRosa){
        if(arq.style.backgroundColor === rgbRosa)
            so.style.backgroundColor = rgbAzul;
        else so.style.backgroundColor = rgbCinza;
        if(progc != null) progc.style.backgroundColor = rgbCinza;
        if(lpcp != null ) lpcp.style.backgroundColor = rgbCinza;
    }
    else{
        so.style.backgroundColor = rgbRosa;
        if(progc != null && lp2.style.backgroundColor === rgbRosa ) progc.style.backgroundColor = rgbAzul;
        if(lpcp != null && lp2.style.backgroundColor === rgbRosa && fmc3.style.backgroundColor === rgbRosa) lpcp.style.backgroundColor = rgbAzul;
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
        if(pds != null){//grade ds
            pds.style.backgroundColor = rgbCinza;
            ts.style.backgroundColor = rgbCinza;
            pd.style.backgroundColor = rgbCinza;
            el.style.backgroundColor = rgbCinza;
            web2.style.backgroundColor = rgbCinza;
        }
        //ambas as grades
        if(progc != null) progc.style.backgroundColor = rgbCinza;
        if(ps != null){//grade cc
            ps.style.backgroundColor = rgbCinza; 
            lpcp.style.backgroundColor = rgbCinza;
        }
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
        if(ps != null){//grade cc
            ps.style.backgroundColor = rgbAzul; 
            if(so.style.backgroundColor === rgbRosa && fmc3.style.backgroundColor === rgbRosa)
                lpcp.style.backgroundColor = rgbAzul;
        }
    }
}

function redesComp(){
    if(redes.style.backgroundColor === rgbRosa){
        if(arq.style.backgroundColor === rgbRosa)
            redes.style.backgroundColor = rgbAzul;
        else redes.style.backgroundColor = rgbCinza;
        if(pd != null) pd.style.backgroundColor = rgbCinza;
    }
    else{
        redes.style.backgroundColor = rgbRosa;
        if(pd != null && lp2.style.backgroundColor === rgbRosa) pd.style.backgroundColor = rgbAzul;
    }
}

//todas as grades
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

//todas as grades
function grafos(){
    if(graf.style.backgroundColor === rgbRosa){
        if(edb2.style.backgroundColor === rgbRosa) graf.style.backgroundColor = rgbAzul;
        else graf.style.backgroundColor = rgbCinza;
        if(paa != null) paa.style.backgroundColor = rgbCinza;
    }
    else{
        if(paa != null) paa.style.backgroundColor = rgbAzul;
        graf.style.backgroundColor = rgbRosa;
    }
}




//funcao para materias com tres requisitos que nao libera nenhuma
function tresReqNenhuma(mat, req1, req2, req3){
    return function(){
        if(mat.style.backgroundColor === rgbRosa){
            if(req1.style === rgbRosa && req2.style === rgbRosa && req3.style === rgbRosa) mat.style.backgroundColor = rgbAzul;
            else mat.style.backgroundColor = rgbCinza;
        }
        else{
            mat.style.backgroundColor = rgbRosa;
        } 
    }
}

//funcao para materias com um requisito que libera tres com uma condicao de dois em uma das materias
function umReqTresLibCond(mat, req, lib1, lib2, libc, reqlib1, reqlib2){
    return function(){
        if(mat.style.backgroundColor === rgbRosa){
            if(req.style === rgbRosa) mat.style.backgroundColor = rgbAzul;
            else mat.style.backgroundColor = rgbCinza;
            lib1.style.backgroundColor = rgbCinza;
            lib2.style.backgroundColor = rgbCinza;
            libc.style.backgroundColor = rgbCinza;
        }
        else{
            if(reqlib1.style.backgroundColor === rgbRosa && reqlib2.style.backgroundColor === rgbRosa) libc.style.backgroundColor = rgbAzul;
            lib1.style.backgroundColor = rgbAzul;
            lib2.style.backgroundColor = rgbAzul;
            mat.style.backgroundColor = rgbRosa;
        } 
    }
}

//funcao para materias com um requisito que libera dois com uma condicao de dois em uma e uma condicao de um em outra
function umReqDoisLibDoisCond(mat, req, libc1, libc2, reqlib1, reqlib2, reqlib22){
    return function(){
        if(mat.style.backgroundColor === rgbRosa){
            if(req.style === rgbRosa) mat.style.backgroundColor = rgbAzul;
            else mat.style.backgroundColor = rgbCinza;
            libc1.style.backgroundColor = rgbCinza;
            libc2.style.backgroundColor = rgbCinza;
        }
        else{
            if(reqlib1.style.backgroundColor === rgbRosa) libc1.style.backgroundColor = rgbAzul;
            if(reqlib2.style.backgroundColor === rgbRosa && reqlib22.style.backgroundColor === rgbRosa) libc2.style.backgroundColor = rgbAzul;
            mat.style.backgroundColor = rgbRosa;
        } 
    }
}


//funcao para materias com um requisito e libera dois com condicao  de dois em uma e uma condicao em outra
function umReqDoisLibDoisCondDois(mat, req, libc1, libc2, reqlib1, reqlib21, reqlib22){
    return function(){
        if(mat.style.backgroundColor === rgbRosa){
            if(req.style === rgbRosa) mat.style.backgroundColor = rgbAzul;
            else mat.style.backgroundColor = rgbCinza;
            libc1.style.backgroundColor = rgbCinza;
            libc2.style.backgroundColor = rgbCinza;
        }
        else{
            if(reqlib1.style.backgroundColor === rgbRosa) libc1.style.backgroundColor = rgbAzul;
            if(reqlib21.style.backgroundColor === rgbRosa && reqlib22.style.backgroundColor === rgbRosa) libc2.style.backgroundColor = rgbAzul;
            mat.style.backgroundColor = rgbRosa;
        } 
    }

}

//funcao para materias com um requisito e libera uma com condicao
function umReqUmaLibCond(mat, req, libc, reqlib){
    return function(){
        if(mat.style.backgroundColor === rgbRosa){
            if(req.style === rgbRosa) mat.style.backgroundColor = rgbAzul;
            else mat.style.backgroundColor = rgbCinza;
            libc.style.backgroundColor = rgbCinza;
        }
        else{
            if(reqlib.style.backgroundColor === rgbRosa) libc.style.backgroundColor = rgbAzul;
            mat.style.backgroundColor = rgbRosa;
        }
    } 
}

//funcao para materias com um requisito e libera duas com condicao em uma
function umReqDoisLibCond(mat, req, lib, libc, reqlib){
    return function(){
        if(mat.style.backgroundColor === rgbRosa){
            if(req.style === rgbRosa) mat.style.backgroundColor = rgbAzul;
            else mat.style.backgroundColor = rgbCinza;
            lib.style.backgroundColor = rgbCinza;
            libc.style.backgroundColor = rgbCinza;
        }
        else{
            if(reqlib.style.backgroundColor === rgbRosa) libc.style.backgroundColor = rgbAzul;
            lib.style.backgroundColor = rgbAzul;
            mat.style.backgroundColor = rgbRosa;
        }
    }
}

//funcao para matérias com um requisito e libera mais uma
function umReqUmaLib(mat, req, lib){
    return function(){
        if(mat.style.backgroundColor === rgbRosa){
            if(req.style.backgroundColor === rgbRosa) mat.style.backgroundColor = rgbAzul;
            else mat.style.backgroundColor = rgbCinza;
            lib.style.backgroundColor = rgbCinza;
        }
        else{
            lib.style.backgroundColor = rgbAzul;
            mat.style.backgroundColor = rgbRosa;
        }
    }
}

//funcao para matérias sem requisitos que não liberam nenhuma matéria
function nenhumaNenhuma(mat){
    return function(){
        if(mat.style.backgroundColor === rgbRosa){
            mat.style.backgroundColor = rgbCinza;
        }
        else{
            mat.style.backgroundColor = rgbRosa;
        } 
    }
}

//funcão para quando a matéria tem 2 requisitos e não desbloqueia nenhuma outra
function doisReqNenhuma(mat, req1, req2){
    return function(){
        if(mat.style.backgroundColor === rgbRosa){
            if(req1.style.backgroundColor === rgbRosa && req2.style.backgroundColor === rgbRosa) mat.style.backgroundColor = rgbAzul;
            else mat.style.backgroundColor = rgbCinza;
        }
        else{
            mat.style.backgroundColor = rgbRosa;
        } 
    }
}


//funcão para quando a matéria tem 1 prerequisitos e não desbloqueia nenhuma outra
function umReqNenhuma(mat, req){
    return function(){
        if(mat.style.backgroundColor === rgbRosa){
            if(req.style.backgroundColor === rgbRosa) mat.style.backgroundColor = rgbAzul;
            else mat.style.backgroundColor = rgbCinza;
        }
        else{
            mat.style.backgroundColor = rgbRosa;
        } 
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
    pli.addEventListener("click", nenhumaNenhuma(pli));
    tis.addEventListener("click", nenhumaNenhuma(tis));
    
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
    op1.addEventListener("click", nenhumaNenhuma(optativo1));
    op2.addEventListener("click", nenhumaNenhuma(optativo2));
    op3.addEventListener("click", nenhumaNenhuma(optativo3));
    op4.addEventListener("click", nenhumaNenhuma(optativo4));

    // =========== Grade de EDS e ECC =========
    if(progc != null) progc.addEventListener("click", doisReqNenhuma(progc, so, lp2));
    if(graf != null) graf.addEventListener("click", grafos);

    // ============= Grade de EDS =============
    //para evitar erro nas outras paginas
    if(web1 != null){
        //4 semestre
        apoo.addEventListener("click", umReqUmaLib(apoo, lp1, er));
        bpp.addEventListener("click", umReqNenhuma(bpp, lp1));
        piu.addEventListener("click", umReqNenhuma(piu, lp1));
        
        //5 semestre
        pds.addEventListener("click", umReqNenhuma(pds, lp2));
        ts.addEventListener("click", umReqNenhuma(ts, lp2));
        web1.addEventListener("click", umReqUmaLib(web1, lp1, web2));
        
        //6 semestre
        web2.addEventListener("click", doisReqNenhuma(web2, web1, lp2));
        laes.addEventListener("click", umReqUmaLib(laes, fmc2, mfes));

        //7 semestre
        pd.addEventListener("click", doisReqNenhuma(pd, redes, lp2));
        el.addEventListener("click", doisReqNenhuma(el, edb2, lp2));
        mfes.addEventListener("click", umReqNenhuma(mfes, laes));
        er.addEventListener("click", umReqNenhuma(er, apoo));
        
    }

    // ============= Grade de ECC =============
    //para evitar erro nas outras paginas
    if(fmc3 != null){
        //4 semestre 
        cl.addEventListener("click", umReqUmaLib(cl, arq, oc));
        c2.addEventListener("click", umReqDoisLibDoisCondDois(c2, c1, cncc, eae1, alc, alc, prob));
        alc.addEventListener("click", umReqDoisLibDoisCond(alc, ge, cncc, eae1, c2, c2, prob));

        //5 periodo
        oc.addEventListener("click", umReqNenhuma(oc, cl));
        fmc3.addEventListener("click", umReqTresLibCond(fmc3, fmc2, lfa, lc, lpcp, lp2, so));
        //mat, req, lib1, lib2, libc, reqlib1, reqlib2
        eae1.addEventListener("click", tresReqNenhuma(eae1, c2, alc, prob));
        cncc.addEventListener("click", doisReqNenhuma(cncc, alc, c2));
        

        //6 periodo
        ps.addEventListener("click", umReqNenhuma(ps, lp2));
        paa.addEventListener("click", umReqNenhuma(paa, graf));
        lfa.addEventListener("click", umReqNenhuma(lfa, fmc3));

        //7 periodo
        //progc.addEventListener("click", umReqNenhuma(progc, so));
        lc.addEventListener("click", umReqNenhuma(lc, fmc3));
        lpcp.addEventListener("click", tresReqNenhuma(lpcp, so, lp2, fmc3));
        
    }

}
