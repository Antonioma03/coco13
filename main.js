estatus="";
objetos=[];
function setup(){
    canvas=createCanvas(400,350);
canvas.center();
camara=createCapture(VIDEO);
camara.hide();
camara.size(400,350);
}
function modelocargado(){
console.log("coco ya se cargo");
estatus=true;
}
function inisiar(){
detector=ml5.objectDetector('cocossd',modelocargado);
document.getElementById("estatus").innerHTML="detectando objetos";
nombreobjeto=document.getElementById("objeto").value;
}
function draw(){
image(camara,0,0,400,350);
if(estatus!=""){
    detector.detect(camara,gotResult);
for(i=0;i<objetos.length;i++){
    document.getElementById("estatus").innerHTML="objeto detectado";
    fill("#10e4b6");
    presision=floor(objetos[i].confidence*100);
    text(objetos[i].label+presision+"%",objetos[i].x,objetos[i].y);
    noFill();
    stroke("#10e4b6");
    rect(objetos[i].x,objetos[i].y,objetos[i].width,objetos[i].height);
}
}
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objetos=results;
    }
}



