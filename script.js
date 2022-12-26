let sketchWidth = 780;

function initialSketch(cols) {
    let cells = sketchWidth / cols;

    const container = document.getElementById('sketch-container')
    container.style.cssText += `grid-template-columns: repeat(${cols}, ${cells}px [col-start]);\nwidth: ${sketchWidth}px\n`;

    let gridSize = cols * cols;

    // Clean container
    container.innerHTML = ''

    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        div.style.cssText += `border: 1px solid black;\nheight: ${cells}px;\nwidth: ${cells}px;\n`;
        container.appendChild(div);

        // Change color on mouse-hover
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'red';
        })
    }
}

// Initialize first sketch with 16 cols
initialSketch(16);

// User changing grid size
const changeGridButton = document.getElementById('changeGrid');
changeGridButton.addEventListener('click', () => {
    let userPrompt = prompt('Please enter a grid size');
    while (!/^(100|[1-9]?[0-9])$/.test(userPrompt)) {
        alert('Please try again.');
        userPrompt = prompt('Please enter a grid size');
    }
    initialSketch(userPrompt);
})


// PROBLEM:
// Program creates a 16x16 grid by default first time and when it prompts
// for user input, it just appends it - it does not replace it.