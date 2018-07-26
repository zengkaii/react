import { connect } from 'react-redux';
import Player from '../components/play/Player'
import {changeSong} from '../redux/actions'
const mapDispatchToProps = (dispatch) => ({
    changeCurrentSong: (song) => {
        dispatch(changeSong(song));
    }
})
const mapStateToProps = (state) => ({
    currentSong: state.song,
    playSongs: state.songs
})
export default connect(mapStateToProps, mapDispatchToProps)(Player)