img = "";
Status = "";
function setup() {
  canvas =  createCanvas(640,420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML = "object : is detacted";
}
function modelLoaded() {
  console.log("model Loaded!");
 Status = true;
 objectDetector.detection(img , gotPoses);
}
function preload() {
    img = loadImage("dog_cat.jpg");
}
function draw() {
    image(img , 0 , 0 , 640 , 420);
     fill('#FF0000');
     text("dog" , 45 , 75);
     noFill();
     stroke('#FF0000');
     rect(30 , 60 , 450 , 350);

     fill('#FF0000');
     text("cat",320,120);
     noFill();
     stroke('#FF0000');
     rect(300,90,270,320);
}
function gotPoses(error , results)
{
  if(error){
    console.log(error);
  }
  console.log(results);
}