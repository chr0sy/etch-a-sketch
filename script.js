// Pixels per board
let gridSize = 256;
const cellSize = 32;
let gridColumns = 16;

const container = document.getElementById('sketch-container')
container.style.cssText += `grid-template-columns: repeat(${gridColumns}, ${cellSize}px [col-start]);\n`;

for (let i = 0; i < gridSize; i++) {
    const div = document.createElement('div');
    div.style.cssText += `border: 1px solid black;\nheight: ${cellSize}px;\nwidth: ${cellSize}px;\n`;
    container.appendChild(div);

    // Change color on mouse-hover
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'red';
    })
}

// User changing grid size

const changeGridButton = document.getElementById('changeGrid');
changeGridButton.addEventListener('click', () => {
    const userAnswer = prompt('Please enter a grid size');
    gridColumns = userAnswer;
    gridSize = userAnswer * userAnswer;
    console.log(gridColumns);
    console.log(gridSize);
})