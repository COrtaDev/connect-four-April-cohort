export class ColumnWinInspector {
    constructor(column) {
        this.column = column;
    }

    inspect() {
        // console.log(this.column)//<<--this.column is an obj
        // console.log(this.column.tokens)//<<--this.column is an obj
        // this.column.tokens
        let redCount = 0;
        let blackCount = 0;

        for (let i = 5; i >= 0; i--) {
            let tokens = this.column.tokens[i];
            if (tokens === 1) {
                redCount++;
                blackCount = 0;
            } else if (tokens === 2) {
                blackCount++;
                redCount = 0;
            }
            if (redCount === 4) {
                return 1;
            } else if (blackCount === 4) {
                return 2;
            }
        }
        return 0;
    }
}
