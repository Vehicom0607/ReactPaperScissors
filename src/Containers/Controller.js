import React, {Component} from 'react';
import ResultDisplay from "../Components/UI/ResultDisplay";
import PlayerControl from "../Components/Control/PlayerControl";

class Controller extends Component {

    state = {
        playerScore: 0,
        computerScore: 0,
        result: null,
        playerChoice: null,
        computerChoice: null
    }

    playerChooseHandler = playerChoice => {
        let computerChoice = Math.floor(Math.random() * 3)
        console.log(computerChoice)
        if (computerChoice === 0) {
            this.increaseScore('tie')
            computerChoice = playerChoice
        } else if (computerChoice === 1) {
            this.increaseScore('player')
            switch (playerChoice) {
                case 'rock': computerChoice = 'scissors'; break
                case 'paper':computerChoice = 'rock'; break
                case 'scissors': computerChoice = 'paper'; break
                default: console.log('something went wrong');
            }
        } else {
            this.increaseScore('computer')
            switch (playerChoice) {
                case 'rock': computerChoice = 'paper'; break
                case 'paper':computerChoice = 'scissors'; break
                case 'scissors': computerChoice = 'rock'; break
                default:console.log('something went wrong');
            }
        }

        this.setState({playerChoice: playerChoice, computerChoice: computerChoice})
    }

    increaseScore = winner => {
        if (winner === 'player') {
            this.setState(prevState => {prevState.playerScore+=0.5})
            this.setState({result: 'player'})
        } else if (winner === 'tie') {
            this.setState({result: 'tie'})
        }else {
            this.setState(prevState => {prevState.computerScore+=0.5})
            this.setState({result: 'computer'})
        }
    }

    render() {
        return (
            <div className='py-5'>
                <ResultDisplay playerScore={this.state.playerScore} computerScore={this.state.computerScore} playerChoice={this.state.playerChoice} computerChoice={this.state.computerChoice} result={this.state.result} />
                <PlayerControl playerChooseHandler={this.playerChooseHandler} />
            </div>
        );
    }
}


export default Controller;
