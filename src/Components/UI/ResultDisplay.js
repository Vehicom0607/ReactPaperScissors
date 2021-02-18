import React from "react";
import {Col, Jumbotron, Row} from "react-bootstrap";

const ResultDisplay = props => {
    let playerChoice;
    let computerChoice;
    if (props.playerChoice !== null) {
        playerChoice = props.playerChoice.toUpperCase()
    }
    if (props.computerChoice !== null) {
        computerChoice = props.computerChoice.toUpperCase()
    }

    let result = <div className='text-center display-3'>{`${playerChoice} Beats ${computerChoice}. You Win!`}</div>
    if (props.result === 'computer') {
        result = <div className='text-center display-3'>{`${computerChoice} Beats ${playerChoice}. You Lose!`}</div>
    } else if (props.result === 'tie') {
        result = <div className='text-center display-3'>{`${computerChoice} Ties ${playerChoice}. You Tie!`}</div>
    }
    else if (props.result === null) {
        result = <div className='text-center display-3'>Choose An Option Below To Begin</div>
    }

    return (
        <Row >
            <Col >
                <Jumbotron style={{backgroundColor: '#fdf9f8'}}>
                    {result}
                    <p className='h3 d-inline p-5'>Your Score: {props.playerScore}</p>
                    <p className='h3 d-inline p-5'>Computer Score: {props.computerScore}</p>
                </Jumbotron>
            </Col>
        </Row>
    )

}

export default ResultDisplay