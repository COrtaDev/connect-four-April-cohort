import { Column } from './column.mjs';
import { ColumnWinInspector } from './columnWinInspector.mjs';
import { RowWinInspector } from './rowWinInspector.mjs';
import { DiagonalWinInspector } from './diagonalWinInspector.mjs';

export class Game {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.currentPlayer = 1;
        this.winnerNumber = 0;
        this.columns = [
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column()
        ];
    }

    getName() {
        return `${this.name1} vs. ${this.name2}`;
    }

    getWinner() {
        if (this.winnerNumber === 1) {
            return `${this.name1} WINS!!!`;
        } else if (this.winnerNumber === 2) {
            return `${this.name2} WINS!!!`;
        } else if (this.winnerNumber === 3) {
            return `${this.name1} TIES WITH ${this.name2}!!!`;
        }
    }

    checkForColumnWin() {
        for (let i = 0; i < this.columns.length; i++) {
            let currentColumn = this.columns[i];
            let columnWinInspector = new ColumnWinInspector(currentColumn);

            if (columnWinInspector.inspect() > 0) {
                this.winnerNumber = columnWinInspector.inspect();
                return true;
            }
        }
    }

    checkForRowWin() {
        for (let i = 0; i <= 3; i++) {
            let currentRow = this.columns.slice(i, i + 4);
            let rowWinInspector = new RowWinInspector(currentRow);
            if (rowWinInspector.columnsLookAt() > 0) {
                this.winnerNumber = rowWinInspector.columnsLookAt();
                return true;
            }
        }
    }

    checkForDiagonalWin() {
        for (let i = 0; i <= 3; i++) {
            let boardToCheck = this.columns.slice(i, i + 4);
            let diagonalWinInspector = new DiagonalWinInspector(boardToCheck);
            diagonalWinInspector.lookAtBoard();
            if (diagonalWinInspector.lookAtBoard() > 0) {
                this.winnerNumber = diagonalWinInspector.lookAtBoard();
                return true;
            }
            // console.log(diagonalWinInspector);
            // if (rowWinInspector.columnsLookAt() > 0) {
            //     this.winnerNumber = rowWinInspector.columnsLookAt();
            //     return true;
            // }
        }
    }

    playInColumn(columnIndex) {
        this.columns[columnIndex].add(this.currentPlayer);

        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
        this.checkForTie();
        this.checkForColumnWin();
        this.checkForRowWin();
        this.checkForDiagonalWin();
    }

    getTokenAt(rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAt(rowIndex);
    }

    isColumnFull(columnIndex) {
        if (this.winnerNumber === 1 || this.winnerNumber === 2) {
            return true;
        } else {
            return this.columns[columnIndex].isFull();
        }
    }

    checkForTie() {
        for (let i = 0; i <= 6; i++) {
            if (!this.isColumnFull(i)) {
                return false;
            }
        }
        this.winnerNumber = 3;
        return true;
    }
}
