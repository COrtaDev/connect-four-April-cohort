import { Column } from './column.mjs';
import { ColumnWinInspector } from './columnWinInspector.mjs';

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
            // columnWinInspector.inspect();//<<--this return the player who won or 0 if no one did
            // console.log(columnWinInspector.inspect());
            if (columnWinInspector.inspect() > 0) {
                this.winnerNumber = columnWinInspector.inspect();
                return;
            }
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
            if (!this.isColumnFull(i)) {//<<--this returns as soon as the loop finds a column that is not full
                return false;
            }
        }
        this.winnerNumber = 3;
        return true;
    }
}
