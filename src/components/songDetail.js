import React from 'react';
import { connect } from 'react-redux';
import songList from './songList';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div> Select a song </div>
    }
    return (
        <div>
            <h3>Detail for:</h3>
            <img src={song.cover} />
            <p>
              Title: {song.title}
              <br />
              Duration: {song.duration}
            </p>
            <audio src={song.url} controls key={song.id} />
        </div>
    );  
}

const mapStateToProps = state => {
    return { song: state.selectedSongs }
};

export default connect(mapStateToProps)(SongDetail);


