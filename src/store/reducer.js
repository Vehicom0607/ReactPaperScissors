import * as actionTypes from './actionTypes'

const initialState = {
    playerScore: 0,
    computerScore: 0,
    result: null,
    playerChoice: null,
    computerChoice: null
}

const incrementPlayer = (state, action) => {
    return {
        ...state,
        playerScore: state.playerScore + 1
    }
}
const incrementComputer = (state, action) => {
    return {
        ...state,
        computerScore: state.computerScore + 1
    }
}
const setChoices = (state, action) => {
    return {
        ...state,
        ...action.payload
    }
}
const setResult = (state, action) => {
    return {
        ...state,
        result: action.result
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_PLAYER:   return incrementPlayer(state, action)
        case actionTypes.INCREMENT_COMPUTER: return incrementComputer(state, action)
        case actionTypes.SET_CHOICES:        return setChoices(state, action)
        case actionTypes.SET_RESULT:         return setResult(state, action)
        default: return state
    }
}

export default reducer