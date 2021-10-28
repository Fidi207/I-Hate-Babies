status = "";
objcs = [];

function preload(){
    song = loadSound("Troll Song.mp3");
}

function setup(){
    canvas = createCanvas(450, 500);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
    coco = ml5.objectDetector("cocossd", AAAAA);
    document.getElementById("status").innerHTML= "Status: Detecting....";
}

function AAAAA(){
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    status = true;
}

function draw(){
    image(webcam, 0, 0, 450, 500);
    if (status != ""){
        r=random(255);
        g=random(255);
        b=random(255);
        coco.detect(webcam, bruuh);
        for(i = 0; i<objcs.length;i++){
            obj_nam = objcs[i].label;
            obj_conf = floor(objcs[i].confidence * 100);
            obj_x = objcs[i].x - 20;
            obj_y = objcs[i].y;
            obj_width = objcs[i].width;
            obj_height =  objcs[i].height;
            if (object_nam == "person"){
                document.getElementById("status").innerHTML = "Status : Baby Is Safe";
                song.stop();
            }
            else {
                document.getElementById("status").innerHTML = "Status : Baby Is Out AAAAAAAA";
                song.play();
            }
            if (objcs.length == 0) {
                document.getElementById("status").innerHTML = "Status : Baby Is Out AAAAAAAA";
                song.play();
            }
            // document.getElementById("numOfObs").innerHTML = "Number of Objects : " + objcs.length;
            // textSize(20);
            // fill(r,g,b);
            // text(obj_nam + " " + obj_conf + "%", obj_x, obj_y);
            // noFill();
            // stroke(r,g,b);
            // rect(obj_x, obj_y, obj_width, obj_height);
        }
    }
}

function bruuh(error, arry){
    if (error){
        console.error(error);
    }
    else{
        console.log(arry);
        objcs = arry; 
    }
}