import { connect } from 'react-redux';
import PlayerList from '../components/play/PlayerList'
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
export default connect(mapStateToProps, mapDispatchToProps)(PlayerList)