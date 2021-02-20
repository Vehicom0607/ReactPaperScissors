import React, {Component} from 'react';
import ResultDisplay from "../Components/UI/ResultDisplay/ResultDisplay";
import PlayerControl from "../Components/Control/PlayerControl";
import {connect} from 'react-redux'
import * as actionTypes from '../store/actionTypes'

class Controller extends Component {

    playerChooseHandler = playerChoice => {
        let computerChoice = Math.floor(Math.random() * 3)
        if (computerChoice === 0) {
            this.increaseScore('tie')
            computerChoice = playerChoice
        } else if (computerChoice === 1) {
            this.increaseScore('player')
            switch (playerChoice) {
                case 'rock':
                    computerChoice = 'scissors'
                    break
                case 'paper':
                    computerChoice = 'rock'
                    break
                case 'scissors':
                    computerChoice = 'paper'
                    break
                default: console.log('something went wrong')
            }
        } else {
            this.increaseScore('computer')
            switch (playerChoice) {
                case 'rock':
                    computerChoice = 'paper'
                    break
                case 'paper':
                    computerChoice = 'scissors'
                    break
                case 'scissors':
                    computerChoice = 'rock'
                    break
                default:console.log('something went wrong');
            }
        }

        this.props.setChoices(playerChoice, computerChoice)
    }

    increaseScore = winner => {
        if (winner === 'player') {
            this.props.incrementPlayer()
            this.props.setResult('player')
        } else if (winner === 'tie') {
            this.props.setResult('tie')
        }else {
            this.props.incrementComputer()
            this.props.setResult('computer')
        }
    }

    render() {
        return (
            <div className='py-5'>
                <ResultDisplay  />
                <PlayerControl playerChooseHandler={this.playerChooseHandler} />
            </div>
        );
    }
}



const mapDispatchToProps = dispatch => {
    return {
        incrementPlayer: () => dispatch({type: actionTypes.INCREMENT_PLAYER}),
        incrementComputer: () => dispatch({type: actionTypes.INCREMENT_COMPUTER}),
        setChoices: (playerChoice, computerChoice) => dispatch({type: actionTypes.SET_CHOICES, payload: {playerChoice: playerChoice, computerChoice: computerChoice}}),
        setResult: (result) => dispatch({type: actionTypes.SET_RESULT, result: result})
    }
}

export default connect(null, mapDispatchToProps)(Controller);
