let can;
let f=1;

function setup() {
  
  can=createCanvas(600, 600);
  can.parent("#canvas");
    background(220);
  ellipse(width/2,height/2,width);
  select("#stop").mouseClicked(()=>{
    
    if(f){
      select("#stop").html("Start");
      f=0;
      noLoop();
    }else{
      select("#stop").html("Stop");
      f=1;
      loop();
    }
    
  });
  
}
let count=1;
let n=1;
// function mousePressed(){
//   print(4*count/n,count,n);
//   noLoop();
  
// }
function draw() {
  translate(width/2,height/2);
  noStroke();
   for(let i=0;i<10;i++){
     let x=floor(random(-width/2,width/2));
    let y=floor(random(-height/2,height/2));
    fill(255,0,0);
    ellipse(x,y,2.5);

    if(x*x + y*y <= width*width/4 ){
      count++;
       fill(0,0,255);
    ellipse(x,y,2.5);
    }n++;
  }
  let Pi=4*count/n;
  select("#pi").html("Pi: "+Pi);
  
  
}