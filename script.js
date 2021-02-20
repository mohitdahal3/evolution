


let rows = 30
let cols = 30
let scale = 22
let grid;
let started = true



function setup() {
    createCanvas(700, 701)
    frameRate(3)
    grid = makeGrid(rows, cols)
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j] = new Cell(i, j)
        }
    }
}




function draw() {
    let popn = 0
    background(0);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j].show()
            if (started) {
                grid[i][j].update()
            }
            if (grid[i][j].alive) {
                popn++
            }
        }
    }
    textSize(30)
    fill(255)
    text(`Population:${popn}`, 0, cols * scale + 30)
}





function makeGrid(row, col) {
    let arr = new Array(row)
    for (let i = 0; i < row; i++) {
        arr[i] = new Array(col)
    }
    return arr
}


function mouseClicked() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j].containMouse(i, j)) {
                grid[i][j].alive = !grid[i][j].alive
            }
        }
    }
}


