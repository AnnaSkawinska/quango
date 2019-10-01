import React from 'react';
import pig from '../images/Fat_pig.webp';
import bird from '../images/red.webp';
import pikachu from '../images/pikachu.png';
import pichu from '../images/pichu.webp';
import { initialAvatar } from './initialAvatar.failure';

export const angryBirds = [pig, bird];
export const pokemon = [pikachu, pichu];

export class AvatarPicker extends React.Component {

    constructor(props) {
        console.log('AvatarPicker constructor()');
        super(props);
        this.state = {
            avatars: initialAvatar,
        }
        this.props.onAvatarChange(this.state.avatars);
    }

    nameToAvatarsPair = (name) => {
        switch (name) {
            case 'angryBirds':
                return angryBirds;
            case 'pokemon':
                return pokemon;
            default:
                return angryBirds;
        }
    }

    eAvatarChange = (e) => {
        this.props.onAvatarChange(this.nameToAvatarsPair(e.currentTarget.value));
    }

    render = () => {
        console.log('AvatarPicker render');
        return (
            <div>
                Who do you want to play with? <br />
                <input type='radio' name='avatar' value='angryBirds' onChange={this.eAvatarChange} />Angry birds<br />
                <input type='radio' name='avatar' value='pokemon' onChange={this.eAvatarChange} /> Pokemon <br />
                {/* <input type='radio' name='avatar' value='catMouse' onChange={props.onAvatarChange} /> Cats vs mice */}
            </div>
        );
    }
}
