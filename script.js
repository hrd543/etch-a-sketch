const container = document.querySelector('.container');
createGrid(20);

let clearButton = document.querySelector('.clear-btn');
let changeButton = document.querySelector('.change');
clearButton.addEventListener("click", resetBoard);
changeButton.addEventListener("click", changeGridSize);


function changeGridSize() {
    while (true) {
        let nRowsInput = prompt("Enter the number of rows between 1 and 100: ");
        nRows = parseInt(nRowsInput);
        if (nRowsInput == null) {
            return true;
        }
        if (nRows < 1 || nRows > 100 || isNaN(nRows)) {
            alert("Please enter a number between 1 and 100!");
            continue
        }
        console.log(nRows);
        createGrid(nRows);
        return true;
    }
}

function createGrid(numRows) {
    container.innerHTML = '';
    container.style.setProperty('--num-rows', numRows);
    for (let i = 1; i <= numRows * numRows; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('box', 'clear');
        newDiv.addEventListener("mouseover", changeColour);
        container.appendChild(newDiv);
    }
}

function resetBoard() {
    container.querySelectorAll('div').forEach(element => {
        element.classList.add("clear");
    });
}

function changeColour(event) {
    this.classList.remove("clear");
}