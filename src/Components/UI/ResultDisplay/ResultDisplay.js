import React, { useState, useEffect } from "react";
import {Col, Jumbotron, Row} from "react-bootstrap";
import {connect} from 'react-redux'
import classes from './ResultDisplay.module.css'

const ResultDisplay = props => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 1200;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);

    let playerChoice;
    let computerChoice;
    console.log(props.playerChoice)
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
                <Jumbotron className={classes.Jumbotron}>
                    {result}
                    <p className={`h3 px-5${isMobile ? "" : " d-inline"}`}>Your Score: {props.playerScore}</p>
                    <p className={`h3 px-5${isMobile ? "" : " d-inline"}`}>Computer Score: {props.computerScore}</p>
                </Jumbotron>
            </Col>
        </Row>
    )

}

const mapStateToProps = (state) => {
    return {
        playerScore: state.playerScore,
        computerScore: state.computerScore,
        result: state.result,
        playerChoice: state.playerChoice,
        computerChoice: state.computerChoice
    }
}

export default connect(mapStateToProps)(ResultDisplay)