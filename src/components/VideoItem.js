import React from 'react';
import './style.css'

const VideoItem = ({ video }) => {
    return (
        <div className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
            <div className="content">
                <div className="header">{ video.snippet.title }</div>
            </div>
        </div>
    );
};

export default VideoItem;