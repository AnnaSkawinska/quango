import React from 'react';
import { Square, SECOND, FIRST } from './Square';
import { Status } from './Status';
import { calculateWinner } from '../logic';
import { AvatarPicker } from './AvatarPicker';
import { initialAvatar } from './initialAvatar.failure';

export class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(36).fill(null),
      birdIsNext: true,
      avatars: initialAvatar,
    }
    console.log('Board constructor');
  }

  handleAvatarChange = (avatars) =>  {
    console.log('Board handleAvatarChange()', avatars);
    console.log('Board handleAvatarChange() type', typeof avatars);
    this.setState({ ...this.state, avatars: avatars});
    console.log('Board state:', this.state);
  }

  handleClick = (i) => {
    const squares = this.state.squares.slice();
    if (!squares[i] && !calculateWinner(this.state.squares)) {
      squares[i] = this.state.birdIsNext ? FIRST : SECOND;
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
    switch (colorChar) {
      case 'p': return '#ff9bff';
      case 'y': return '#ffff80';
      case 'o': return '#ffb469';
      case 'g': return '#80ff80';
      case 'b': return '#9bffff';
      default: return '#fff';
    }
  }

  renderSquare = (i) => {
    return (
      <Square
        avatars={this.state.avatars}
        value={this.state.squares[i]}
        background={this.mapToColor(this.colors[i])}
        onClick={() => { this.handleClick(i) }}
      />
    );
  }

  render = () => {
    console.log('Board render()');
    console.log('Board render() state', this.state);
    const winner = calculateWinner(this.state.squares);

    return (
      <div>
        <AvatarPicker onAvatarChange={this.handleAvatarChange}/>
        <Status avatars={this.state.avatars} winner={winner} next={this.state.birdIsNext ? FIRST : SECOND} />
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
