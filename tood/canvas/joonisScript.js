//sirge joon
function sirgeJoon(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //joon
        t.beginPath();
        t.strokeStyle="red";
        t.lineWidth=2;
        t.moveTo(50,50); //alguspunkt
        t.lineTo(150,200); //lõpppunkt
        t.stroke();
    }

}
function puhasta(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.clearRect(0,0,300,400);
    }
}
//kolmnurk
function kolmnurk(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //kolmnurk
        t.beginPath();
        t.strokeStyle="red";
        t.fillStyle="green"; //taust
        t.lineWidth=2;
        t.moveTo(50,50); //alguspunkt
        t.lineTo(150,200);
        t.lineTo(50,200);
        t.lineTo(50,50);//lõpppunkt
        t.stroke();
        t.fill();
    }
}
function ristkylik(){
    const tahvel=document.getElementById("tahvel");
    const laius=document.getElementById("laius");
    const korgus=document.getElementById("korgus");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle="olive";
        t.fillRect(100,50,laius.value,korgus.value); //alguspunkt - x, y, laius, kõrgus
    }
}
function ring(){
    const tahvel=document.getElementById("tahvel");
    const r=document.getElementById("raadius");
    const varv=document.getElementById("varv");

    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle=varv.value;
        t.arc(100,50,r.value, 0, 2*Math.PI, true); //alguspunkt - x, y, raadius, 2*180kraadi
        t.fill();
    }
}
//pilt failist //drawImage()
function pilt(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        const fail=new Image();
        fail.src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA0L3JtMTg4OS1lbGVtZW50LXotMzAucG5n.png";
        fail.onload=()=>{
            t.drawImage(fail, 50, 50, 100, 100);
        }
    }
}

function smile(){
    puhasta();
    silmad();
    //jne
}