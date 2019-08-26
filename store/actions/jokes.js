export const GET_JOKE = 'GET_JOKE'
export const ADD_JOKE= 'ADD_JOKE'
export const REMOVE_JOKE = 'REMOVE_JOKE'
export const SHARE_JOKE = 'SHARE_JOKE'


export const getJoke = (joke) => {
    return {type: GET_JOKE, payload: joke}
}

export const addJoke = (joke) => {
    return {type: ADD_JOKE, payload: joke}
}

export const removeJoke = (joke) => {
    return {type: REMOVE_JOKE, payload: joke}
}

export const shareJoke = (joke) => {
    return {type: SHARE_JOKE, payload: joke}
}