import * as AcitonTypes from './actionTypes'
export function showPlayer(showStatus) {
    return {
        type: AcitonTypes.SHOW_PLAYER,
        showStatus
    }
}
export function changeSong (song) {
    return {
        type: AcitonTypes.CHANGE_SONG,
        song
    }
}
export function setSongs (songs) {
    return {
        type: AcitonTypes.SET_SONGS,
        songs
    }
}
export function removeSong (id) {
    return {
        type: AcitonTypes.REMOVE_SONG_FROM_LIST,
        id
    }
}