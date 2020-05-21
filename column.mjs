export class Column {
    constructor(playerNum) {
        this.tokens = [
            null,
            null,
            null,
            null,
            null,
            null
        ];
        this.playerNum = playerNum;
    }

    add(playerNum) {
        for (let i = 5; i >= 0; i--) {
            if (this.tokens[i] === null) {
                this.tokens[i] = playerNum;
                return;
            }
        }
    }

    getTokenAt(rowIndex) {
        return this.tokens[rowIndex];
    }

    isFull() {
        if (this.tokens[0] === null) {
            return false;
        }
        return true;
    }
}
