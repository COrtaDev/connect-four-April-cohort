export class DiagonalWinInspector {
    constructor(columns) {
        this.columns = columns;
    }

    lookAtBoard() {
        let colArray = [];
        for (let i = 0; i <= 3; i++) {
            colArray.push(this.columns[i].tokens);
        }
        // console.log(colArray)
        return this.tokensLookAt(colArray)
        // return this.tokensLookAt(colArray)
    }

    tokensLookAt(colArray) {
        let tokenCol = [];
        // console.log([colArray[0][5], colArray[1][5], colArray[2][5], colArray[3][5]])
        for (let i = 0; i <= 5; i++) {
            tokenCol.push([colArray[0][i], colArray[1][i], colArray[2][i], colArray[3][i]])
            // return this.inspect(rowOfTokens)
        }
        // console.log(tokenSquare)
        return this.lookAtSquare(tokenCol)
    }

    lookAtSquare(tokenCol) {
        // let idx = tokenSquare.length;
        // let idx = tokenSquare.length;
        // console.log(idx)
        // console.log(tokenSquare.slice(2, i))<<-6
        // console.log(tokenSquare.slice(1, i - 1))<<-5
        // console.log(tokenSquare.slice(0, idx - 2))<<-4
        for (let i = 2; i >= 0; i--) {
            let tokenSquare = tokenCol.slice(i, i + 4);
            return this.inspect(tokenSquare);
        }

    }
    inspect(tokenSquare) {
        let diagonalL = [
            tokenSquare[3][0],
            tokenSquare[2][1],
            tokenSquare[1][2],
            tokenSquare[0][3]
        ];
        let diagonalR = [
            tokenSquare[0][0],
            tokenSquare[1][1],
            tokenSquare[2][2],
            tokenSquare[3][3]
        ];
        if (diagonalL.join("") === "1111") {
            return 1;
        } else if (diagonalR.join("") === "2222") {
            return 2;
        } else {
            return 0;
        }


        // diagonalL.join("")
        // diagonalR.join("")
        // console.log(diagonalL)
        // console.log(diagonalR)
        // console.log(tokenSquare)

    }
}
