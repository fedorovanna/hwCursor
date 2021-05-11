export function getRandomColor() {
    let chars = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += chars[Math.floor(Math.random() * 16)]
    }
    return color;
  }

function generateBlocks() {
  const container = document.createElement('div')
  container.className = 'container'
  container.style.cssText = 'width: 250px; height: 250px; display: inline-block'
  document.body.append(container)
  for (let i=0; i<25; i++){
    square = document.createElement('div')
    square.className = 'square'
    square.style.cssText = 'width: 50px; height: 50px; display: inline-block'
    square.style.backgroundColor = getRandomColor()
    container.appendChild(square)
  }
  document.getElementById('button1').removeEventListener('click', generateBlocks)
}

function generateBlocksInterval(){
  const squares = document.querySelectorAll(".square");
  squares.forEach(function (square) {
    setInterval(() => {square.style.backgroundColor = getRandomColor()  }, 1000)
  });  
  document.getElementById('button2').removeEventListener('click', generateBlocksInterval) 
}

//document.getElementById('button1').addEventListener('click', generateBlocks)
//document.getElementById('button2').addEventListener('click', generateBlocksInterval) 
