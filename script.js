const container = document.querySelector('.container');
let numRows = 32;
container.style.setProperty('--num-rows', numRows);
for (let i=1; i<=numRows*numRows; i++){
    let newDiv = document.createElement('div');
    newDiv.classList.add('box', 'clear');
    container.appendChild(newDiv);
}