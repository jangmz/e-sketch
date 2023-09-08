function generateCustomGrid(gridSize) {
    const gridRows = document.querySelectorAll(".grid-row");

    gridRows.forEach(gridRow => grid.removeChild(gridRow));

    // displays the grid
    for (let col = 0; col < gridSize; col++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("grid-row");
        for (let row = 0; row < gridSize; row++) {
            const pixelDiv = document.createElement("div");
            pixelDiv.classList.add("grid-pixel");
            pixelDiv.style.height = (500/gridSize) + "px";
            pixelDiv.style.width = (500/gridSize) + "px";
            rowDiv.appendChild(pixelDiv);
        }
        grid.appendChild(rowDiv);
    }
    drawing();
}

function generateDefaultGrid() {
    for (let col = 0; col < 16; col++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("grid-row");
        for (let row = 0; row < 16; row++) {
            const pixelDiv = document.createElement("div");
            pixelDiv.classList.add("grid-pixel");
            pixelDiv.style.height = (500/16) + "px";
            pixelDiv.style.width = (500/16) + "px";
            rowDiv.appendChild(pixelDiv);
        }
        grid.appendChild(rowDiv);
    }
    drawing();
}

function changeColor(e) {
    if (e.type === "mouseover" && !mouseDown) return;
    e.target.classList.add("bgColor");
}

function drawing() {
    // change the background color on hover event
    const gridPixels = document.querySelectorAll(".grid-pixel");
    gridPixels.forEach(gridPixel => {
        gridPixel.addEventListener("mouseover", changeColor);
        gridPixel.addEventListener("mousedown", changeColor);
    });
}

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

const grid = document.querySelector(".grid");
generateDefaultGrid();

// input for changing the grid size
const sizeBtn = document.querySelector("#size-btn");
sizeBtn.addEventListener("click", () => {
    let newGridSize;
    while (true) {
        newGridSize = prompt("Enter new size (max 100)");
        if (newGridSize > 100) {
            alert("Size is to big! Max size is 100");
            continue;
        } else {
            break;
        }
    }
    generateCustomGrid(newGridSize);
})
