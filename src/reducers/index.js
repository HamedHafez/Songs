import { combineReducers } from 'redux';

const songsReducers = () => {
    return [
        { id: '1', title: 'Angels', duration: '7:37', url: 'http://www.global-journey.com/MP3-Samples/Free-25/Epiphany.mp3', cover: 'http://www.global-journey.com/images/cd-new-angels.jpg' },
        { id: '2', title: 'Café Brasil', duration: '5:30', url: 'http://www.global-journey.com/MP3-Samples/Free-25/Rio-Sunset.mp3', cover: 'http://www.global-journey.com/images/cd-cafebrasil.jpg' },
        { id: '3', title: 'South American Pan Pipes by the Sea', duration: '8:00', url: 'http://www.global-journey.com/MP3-Samples/Free-25/Clara-De-Luna.mp3', cover: 'http://www.global-journey.com/images/cd-world-southameripanpi.jpg' },
        { id: '4', title: 'Fairy Garden', duration: '5:52', url: 'http://www.global-journey.com/MP3-Samples/Free-25/Tinkerbells-Dance.mp3', cover: 'http://www.global-journey.com/images/cd-new-fairygarden.jpg' },
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