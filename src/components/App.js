import React from 'react';
import SongList from './songList';
import SongDetaile from './songDetail';

const App = () => {
    return (
        <div className="ui container grid" style = {{ marginTop: '10px' }}>
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetaile />
                </div>
            </div>
        </div>
    );
};


export default App;
