import React from "react";
import {Col, Image, Row} from "react-bootstrap";


const PlayerControl = props => {


    return (
        <Row >
            <Col >
                <Image onClick={() => props.playerChooseHandler('rock')} rounded src='/Images/rock.png' style={{height: '100px'}}/>
                <Image onClick={() => props.playerChooseHandler('paper')} rounded src='/Images/paper.png' style={{height: '100px'}}/>
                <Image onClick={() => props.playerChooseHandler('scissors')} rounded src='/Images/scissors.png' style={{height: '100px'}}/>

            </Col>
        </Row>
    )
}

export default PlayerControl