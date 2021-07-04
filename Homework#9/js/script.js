const getRandomColor = () => {
    return '#' + Math.random().toString(16).slice(9)
}

const canvas = document.getElementById('c1');
const ctx = canvas.getContext('2d');



function generateBlocks(row = 5, columns = 5 ) {
    canvas.width = row*50;
    canvas.height = columns*50;
    for (let i = 0; i <= canvas.width; i = i + 50){
        for(let j = 0; j <= canvas.height; j = j + 50){
            ctx.fillRect(i, j, 50, 50) 
            ctx.fillStyle = getRandomColor()  
        }
    }
}

generateBlocks()

const form = document.querySelector('.form_value'); 
const getBlockForSize = form.addEventListener('keypress', function (e) {
    if (e.key === 'Enter'){
  const row = document.getElementById('raw').value;
  const columns = document.getElementById('columns').value;
  generateBlocks(row, columns)
  interval = setInterval(generateBlocks, 1000, row, columns);}
}); 












