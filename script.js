const container = document.getElementById('container')
const square = document.createElement('div')
square.classList.add('square');

const gridSize = 40;

for (let i = 0; i < gridSize; i++) {
    container.appendChild(square.cloneNode(true));
}
