import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import pig from './images/Fat_pig.webp';
import bird from './images/red.webp';

const BIRD = 'w';
const PIG = 'b';

function Square(props) {
  const img = props.value === BIRD
    ? bird
    : (props.value === PIG ? pig : undefined);

  const backgroundStyle = {
    background: props.background
  }
  return (
    <button style={backgroundStyle} className='square' >
      <img src={img} className='pawn' alt='' onClick={props.onClick}/>
    </button>
  );
}

function Status(props) {
  const nextPlayerImg = props.next === PIG ? pig : bird;
  const statusImg = props.winner 
  ? (props.winner === PIG 
    ? pig 
    : bird)
  : nextPlayerImg;

  const statusText = props.winner ? 'Winner: ' : 'Next player: ';

  return (
    <div className='status'>
      {statusText}
      <img className='icon' src={statusImg} alt='' />
    </div>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(36).fill(null),
      birdIsNext: true,
    }
  }

  handleClick = (i) => {
    const squares = this.state.squares.slice();
    if (!squares[i] && !calculateWinner(this.state.squares)) {
      squares[i] = this.state.birdIsNext ? BIRD : PIG;
      this.setState({ squares: squares, birdIsNext: !this.state.birdIsNext });
    }
  }

  colors = [
    'p', 'p', 'y', 'o', 'p', 'p',
    'p', 'y', 'g', 'b', 'o', 'p',
    'y', 'g', 'g', 'b', 'b', 'o',
    'o', 'b', 'b', 'g', 'g', 'y',
    'p', 'o', 'b', 'g', 'y', 'p',
    'p', 'p', 'o', 'y', 'p', 'p',
  ];

  mapToColor = (colorChar) => {
    switch(colorChar) {
      case 'p': return '#ff9bff';
      case 'y': return '#ffff80';
      case 'o': return '#ffb469';
      case 'g': return '#80ff80';
      case 'b': return '#9bffff';
      default: return '#fff';
    }
  }

  renderSquare(i) {
    console.log('value: ', this.state.squares[i]);
    console.log('bg', this.mapToColor(this.colors[i]));
    return (
      <Square
        value={this.state.squares[i]}
        background={this.mapToColor(this.colors[i])}
        onClick={() => { this.handleClick(i) }}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);

    return (
      <div>
        <Status winner={winner} next={this.state.birdIsNext ? BIRD : PIG}/>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className='board-row'>
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
        </div>
        <div className='board-row'>
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
        </div>
        <div className='board-row'>
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
          {this.renderSquare(28)}
          {this.renderSquare(29)}
        </div>
        <div className='board-row'>
          {this.renderSquare(30)}
          {this.renderSquare(31)}
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


function calculateWinner(squares) {
  const winningColors = [
    [0, 1, 6], // p
    [2, 7, 12], // y
    [8, 13, 14], //g
    [3, 10, 17], // o
    [4, 5, 11], //p
    [9, 15, 16], //b
    [18, 25, 32], //o
    [19, 20, 26], //b
    [24, 30, 31], //p
    [21, 22, 27], //g
    [28, 33, 38], //y
    [29, 34, 35], //p
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
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
