class Cell {
    constructor(xPos, yPos) {
        this.x = xPos
        this.y = yPos
        this.alive = (floor(random(0,15))== 0)
    }

    show() {
        strokeWeight(1)
        stroke(224 / 2)
        if (this.alive) {
            fill(255)
            rect(this.x * scale, this.y * scale, scale, scale)
        } else {
            fill(0)
            rect(this.x * scale, this.y * scale, scale, scale)
        }
    }

    update() {
        if(this.countAliveNeighbours(this.x, this.y)<=1){
            this.alive = false
        }else if(this.countAliveNeighbours(this.x, this.y) >= 4){
            this.alive = false
        }else if(this.countAliveNeighbours(this.x, this.y)==3){
            this.alive = true
        }
    }

    countAliveNeighbours(x, y) {
        let aliveNeighbours = 0
        for (let i = x - 1; i <= x + 1; i++) {
            if (i < 0 || i >= rows) {
                continue
            }
            for (let j = y - 1; j <= y + 1; j++) {
                if (j < 0 || j >= cols) {
                    continue
                }

                if ((i == x && j == y)) {
                    
                    }else{
                        if (grid[i][j].alive) {
                            aliveNeighbours++
                    }
                }
            }
        }
        return aliveNeighbours
    }





    containMouse(x, y) {
        return ((mouseX > (x * scale) && mouseX < ((x * scale) + scale)) && (mouseY > (y * scale) && mouseY < ((y * scale) + scale)))
    }
}