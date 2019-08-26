import { ADD_JOKE, GET_JOKE, REMOVE_JOKE} from '../actions/jokes'

const initialState = {
    joke: '',
    jokeList: []
}

const jokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_JOKE':
            return { ...state, joke: action.payload}
        case 'ADD_JOKE':
            return { ...state, jokeList: state.jokeList.concat(action.payload)}
        case 'REMOVE_JOKE':
            return { ...state, jokeList: state.jokeList.filter(joke => joke.id !== action.payload)}
        default:
            break;
    }
    return state
}

export default jokeReducer