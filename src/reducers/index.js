import { combineReducers } from 'redux';

const songsReducers = () => {
    return [
        { title: 'Kojaei', duration: '2:45' },
        { title: 'Love', duration: '4:10' },
        { title: 'Chera rafti', duration: '6:00' },
        { title: 'Mast o Kharaman', duration: '3:08' },
    ]
}

const selectedSongReducer = (selectedSongs = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSongs;
};

export default combineReducers({
    songs: songsReducers,
    selectedSongs: selectedSongReducer
})