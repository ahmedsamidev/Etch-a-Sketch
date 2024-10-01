const gridContainer = document.querySelector(".grid-container")
const gridContainerWidth = gridContainer.offsetWidth
const gridContainerHeight = gridContainer.offsetHeight
const gridRowsAndColumnsInput = document.querySelector("input")

function generateRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}




function createGrid(gridRowsAndColumns, elementWidth, elementHeight) {
    const items = []
    if (!gridContainer.firstChild) {
        for (let row = 1; row <= gridRowsAndColumns; row++) {
            for (let column = 1; column <= gridRowsAndColumns; column++) {
                const child = createSingleItem(elementWidth, elementHeight)
                items.push(child)
            }
        }
    } else {
        while (gridContainer.firstChild) {
            gridContainer.firstChild.remove();
        }
        for (let row = 1; row <= gridRowsAndColumns; row++) {
            for (let column = 1; column <= gridRowsAndColumns; column++) {
                const child = createSingleItem(elementWidth, elementHeight)
                items.push(child)
            }
        }

    }

    for (let child of items) {
        child.addEventListener('mouseover', () => {
            child.style.backgroundColor = generateRandomColor();
        });
    }
}


function createSingleItem(elementWidth, elementHeight) {
    const gridElement = document.createElement("div")
    gridElement.style.backgroundColor = "#FFB0B0"
    gridElement.style.width = elementWidth - 2 + "px"
    gridElement.style.height = elementHeight - 2 + "px"
    gridElement.style.border = "1px solid #FFF7D1"
    gridContainer.appendChild(gridElement)
    return gridElement
}


gridRowsAndColumnsInput.addEventListener("change", (event) => {
    const gridRowsAndColumns = event.target.value;
    const elementWidth = gridContainerWidth / gridRowsAndColumns
    const elementHeight = gridContainerHeight / gridRowsAndColumns
    if (gridRowsAndColumns <= 100) {
        createGrid(gridRowsAndColumns, elementWidth, elementHeight)
    } else {
        window.alert("Max Value is 100")
    }
})

const elementWidth = gridContainerWidth / 16
const elementHeight = gridContainerHeight / 16

createGrid(16, elementWidth, elementHeight)


















