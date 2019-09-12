import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import pig from './images/Fat_pig.webp';
import bird from './images/red.webp';
import blank from './images/blank.png';

const BIRD = 'w';
const PIG = 'b';

function Square(props) {
  const img = props.value === BIRD
    ? bird
    : (props.value === PIG ? pig : blank);

  return (
    <img src={img} alt='' className='square' onClick={props.onClick} />
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
      squares: Array(9).fill(null),
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

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
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
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
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
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
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
