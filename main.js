status1 = " ";
function preload(){
    image1 = loadImage("download.jpg");
}
function setup(){
    canvas = createCanvas(600,400);
    canvas.center();
    object = ml5.objectDetector("cocossd",moedloaded);
    document.getElementById("status").innerHTML="object is detecting";
}
function moedloaded(){
    console.log("done");
    status1= true;
    object.detect(image1,gotresult);
}
function gotresult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
}
function back(){
    window.location="index.html";

}
function bed(){
    window.location = "bed.html";
}
