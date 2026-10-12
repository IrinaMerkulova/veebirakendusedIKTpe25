function valuutaKalk(){
    let vastus3=document.getElementById("vastus3");
    let euro=document.getElementById("euro");
    let valuuta=document.getElementById("valuuta");

    const dollar=1.12;
    const juann=7.4992;

    if(valuuta.value=="dollar"){
        vastus3.innerHTML= euro.value+"€ = "+
            (euro.value*dollar).toFixed(2)+"$";
    }
    if(valuuta.value=="juan"){

    }
    if(valuuta.value==""){
        vastus3.innerHTML="sisesta valuutat õigesti";
    }
}