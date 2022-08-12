const canvas = document.querySelector('canvas')
// New way to set the height and width of a page
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

 let c = canvas.getContext('2d')
 let mouse = {
    x: undefined,
    y: undefined
  }
  addEventListener('mousemove', (event)=>{
  mouse.x=event.x
  mouse.y=event.y
  
  })
 let color = [
"#2c3e50",
'#e74c3c',
'#ffff',
'349808',
'#298889'
]
 
window.addEventListener('resize', ()=> {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
})
let maxradius = 40
let minradius = 5
function Circle (x, y, dx, dy,  radius ){
    this.x = x;
    this.y = y;
    this.dx = dx
    this.dy = dy
    this.radius = radius
this.color = color[Math.round(Math.random() * color.length )]
    this.draw = function(){
        c.beginPath()
        c.arc(this.x, this.y, this.radius,0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }

    this.update = function(){
        if(this.x + this.radius > innerWidth || 
            this.x - this.radius < 0){
            this.dx = -this.dx
            }
        if(this.y + this.radius > innerHeight || 
            this.y - this.radius < 0){
            this.dy = -this.dy
    }
            
            
            this.x+=this.dx
            this.y+=this.dy
          this.draw()
        
        
          //interactivity
           if( mouse.x - this.x < 80 && mouse.x - this.x > -80 &&
              mouse.y - this.y < 80 && mouse.y - this.y > -80){
this.radius +=5
}

 if(this.radius > maxradius){
     this.radius-=5

}  
else if(this.radius > minradius){
    this.radius-=1


          }       
    }
}



let circleArray = []
for (let i = 0; i < 870; i++){
    let radius =  14// radius */

    let x = Math.random() * (innerWidth - radius * 2) + radius// x value
let y = Math.random() * (innerHeight - radius * 2) + radius// x value
let dx = Math.random()* 3// dx
let dy = Math.random() * 3// dy
circleArray.push(new Circle(x, y, dx, dy, radius))

 
}
// console.log(circleArray)

function animate(){
requestAnimationFrame(animate)
c.clearRect(0, 0, innerWidth, innerHeight)//it will dray multiple time if not cleared
for(let i = 0; i < circleArray.length; i++){
circleArray[i].update()
}
}
animate()
