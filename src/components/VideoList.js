import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const renderedList= videos.map((vid)=> {
        return <VideoItem  video= {vid}/>
    });

    return (
        <div>
            {renderedList}
        </div>
    );
};

export default VideoList
