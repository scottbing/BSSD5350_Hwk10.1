let LARGE_SCALES = []
let SMALL_SCALES = []
let img;
let negativePallette = false

function preload() {
  img = loadImage('assests/wms.jpg')
}

function setup() {
  
  //90 percent of the time we will choose smaller values
  for(let i=0; i<90; i++){
     LARGE_SCALES.push(10)
     LARGE_SCALES.push(20) 
     SMALL_SCALES.push(1) 
     SMALL_SCALES.push(2)
  }
  //10 percent we will choose larger values
  for(let i=0; i<10; i++){ 
     SMALL_SCALES.push(5) 
     SMALL_SCALES.push(7) 
     LARGE_SCALES.push(50) 
     LARGE_SCALES.push(70)
  }

  img.loadPixels()
  //print things like this
  //console.log(img.width, img.height)
  //create a canvas as big as your image
  createCanvas(img.width, img.height)
  
  let pixelSize = 10;

  
  let SCALES = SMALL_SCALES
  //round will push numbers to be 1 half the time
  let randomChoice = round(random(0,1))
  // change from the defualt if we made the other choice
  if(randomChoice == 1) {
    SCALES = LARGE_SCALES
  }

  let randomColor = round(random(1, 100))
  //1 percent chance of choosing this
  
  if(randomColor == 1) {
    console.log(negativePallette)
    negativePalette = true
  }
  
  allRandom(pixelSize, 100, SCALES)
  //firstPass(pixelSize, SCALES)
  //secondPass(12, pixelSize) 
}

function allRandom(pixelSize, squares, SCALES,  negativePallette) {
  rectMode(CENTER)
  createCanvas(img.width, img.height)
  background(203, 175, 118); //RGB Value
   for(let p = 0; p<squares; p++) {
    //choose random x and y to draw big square. 
    let x = Math.floor(random(img.width));
    let y = Math.floor(random(img.height));

    //rest of code is mostly copy paste from firstpass
    index = (floor(x) + floor(y) * img.width) * 4;
    r = img.pixels[index]
    g = img.pixels[index + 1] //he switched g and b
    b = img.pixels[index + 2] 
    a = img.pixels[index + 3]
     if (negativePallette) {
        r = (255-r)%255
        g = (255-g)%255
        b = (255-b)%255
      }

    noStroke(); //black stroke hides 1px box color 
    fill(r, g, b, a) //should be rgba

    let randSz = random(3,4) * pixelSize; 
    drawRect(x, y, randSz)
  }
}


function drawRect(x, y, randSz){
  push()
  translate(x,y)
  scale(randSz)
  rotate(radians(random(10,25)))
  rect(0, 0, 1, 1)
  pop()
}
