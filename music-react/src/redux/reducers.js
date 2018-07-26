import { combineReducers} from 'redux';
import * as ActionTypes from './actionTypes';
// import action from './actions'
const initialState = {
    song: {},
    songs: [],
    showStates: false,
}
function song (song = initialState.song, action) {
    switch (action.type) {
        case ActionTypes.CHANGE_SONG:
            return action.song
        default:
            return song
    }
}

function songs (songs = initialState.songs, action) {
    switch (action.type) {
        case ActionTypes.SET_SONGS:
            return action.songs;
        default:
            return songs;
    }
}
const reducer = combineReducers({
    song,
    songs
})
export default reducer