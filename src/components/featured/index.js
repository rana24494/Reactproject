import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
    return (
        <div style={{position:'right'}}>

            <Carrousel/>

            <div className="artist_name">
                <div className="wrapper">
                    Present Trends
                </div>
            </div>

            <TimeUntil/>

        </div>
    );
};

export default Featured;