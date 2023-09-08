// displays the grid
const grid = document.querySelector(".grid");

for (let col = 0; col < 16; col++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("grid-row");
    for (let row = 0; row < 16; row++) {
        const pixelDiv = document.createElement("div");
        pixelDiv.classList.add("grid-pixel");
        
        rowDiv.appendChild(pixelDiv);
    }
    grid.appendChild(rowDiv);
}

// change the background color on hover event
const gridPixels = document.querySelectorAll(".grid-pixel");
gridPixels.forEach(gridPixel => gridPixel.addEventListener("mouseover", (e) => {
    e.target.classList.add("bgColor");
}));
