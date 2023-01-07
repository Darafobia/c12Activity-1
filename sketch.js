var marks = [35,38,42,45,43,34,46,41,48,32];


function setup() 
{
  createCanvas(400,400);

}

function draw() 
{
  background(30);
}

for(var a = 0; a < marks.length; a++){
  if(marks[a] > 42){
    console.log(marks[a])
  }
}

