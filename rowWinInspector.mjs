export class RowWinInspector {
    constructor(columns) {
        this.columns = columns;
    }
    columnsLookAt() {
        let colArray = [];
        for (let i = 0; i <= 3; i++) {
            colArray.push(this.columns[i].tokens);
        }
        return this.tokensLookAt(colArray)
    }

    tokensLookAt(colArray) {
        let rowOfTokens = [];
        for (let i = 5; i >= 0; i--) {
            rowOfTokens = [colArray[0][i], colArray[1][i], colArray[2][i], colArray[3][i]]
            return this.inspect(rowOfTokens)
        }
    }

    inspect(rowOfTokens) {
        let tokens = rowOfTokens.join("");
        if (tokens === "1111") {
            return 1;
        } else if (tokens === "2222") {
            return 2;
        } else {
            return 0;
        }
    }
}
