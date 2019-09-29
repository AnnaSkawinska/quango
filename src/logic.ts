
export const calculateWinner = (squares: string[]) => {
    const winningColors = [
        [0, 1, 6],
        [2, 7, 12],
        [8, 13, 14],
        [3, 10, 17],
        [4, 5, 11],
        [9, 15, 16],
        [18, 25, 32],
        [19, 20, 26],
        [24, 30, 31],
        [21, 22, 27],
        [28, 33, 38],
        [29, 34, 35],
    ];

    const winning4 = [
        [0, 1, 6, 7],
        [1, 2, 7, 8],
        [2, 3, 8, 9],
        [3, 4, 9, 10],
        [4, 5, 10, 11],

        [6, 7, 12, 13],
        [7, 8, 13, 14],
        [8, 9, 14, 15],
        [9, 10, 15, 16],
        [10, 11, 16, 17],

        [12, 13, 18, 19],
        [13, 14, 19, 20],
        [14, 15, 20, 21],
        [15, 16, 21, 22],
        [16, 17, 22, 23],

        [18, 19, 24, 25],
        [19, 20, 25, 26],
        [20, 21, 26, 27],
        [21, 22, 27, 28],
        [22, 23, 28, 29],

        [24, 25, 30, 31],
        [25, 26, 31, 32],
        [26, 27, 32, 33],
        [27, 28, 33, 34],
        [28, 29, 34, 35],
    ];

    const winning5 = [
        [0, 1, 2, 3, 4],
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16],
        [13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22],
        [19, 20, 21, 22, 23],
        [24, 25, 26, 27, 28],
        [25, 26, 27, 28, 29],
        [30, 31, 32, 33, 34],
        [31, 32, 33, 34, 35],
        [0, 6, 12, 18, 24],
        [6, 12, 18, 24, 30],
        [1, 7, 13, 19, 25],
        [7, 13, 19, 25, 31],
        [2, 8, 14, 20, 26],
        [8, 14, 20, 26, 32],
        [3, 9, 15, 21, 27],
        [9, 15, 21, 27, 33],
        [4, 10, 16, 22, 28],
        [10, 16, 22, 28, 34],
        [5, 11, 17, 23, 29],
        [11, 17, 23, 29, 35],

        [6, 13, 20, 27, 34],
        [1, 8, 15, 22, 29],
        [4, 9, 14, 19, 24],
        [11, 16, 21, 26, 31],
        [5, 10, 15, 20, 25],
        [10, 15, 20, 25, 30],
        [0, 7, 14, 21, 28],
        [7, 14, 21, 28, 35],
    ];

    for (let i = 0; i < winningColors.length; i++) {
        const [a, b, c] = winningColors[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    for (let i = 0; i < winning4.length; i++) {
        const [a, b, c, d] = winning4[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
            && squares[a] === squares[d]) {
            return squares[a];
        }
    }

    for (let i = 0; i < winning5.length; i++) {
        const [a, b, c, d, e] = winning5[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
            && squares[a] === squares[d] && squares[a] === squares[e]) {
            return squares[a];
        }
    }

    return null;
}
