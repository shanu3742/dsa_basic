let matrix = [[1,2,3],[4,5,6],[7,8,9]];

class SquareMatrix {
    matrix = [];
    length = 0;
    rotateMatrix=[]
    constructor(matrix){
        this.matrix = matrix;
        this.length = matrix.length;
    }
    rotate90Degrees(){
        for(let i=0;i<this.length;i++){
            for(let j=0;j<this.length;j++){
                if(this.rotateMatrix[i] === undefined){
                    this.rotateMatrix[i] = [];
                    this.rotateMatrix[i][j] = this.matrix[j][this.length-i-1]
                }else{
                    this.rotateMatrix[i][j] = this.matrix[j][this.length-i-1]
                }
            }
        }
        return this.rotateMatrix;
    }
}

let squareMatrix = new SquareMatrix(matrix);
console.log(squareMatrix.rotate90Degrees());