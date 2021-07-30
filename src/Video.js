import React from 'react'

function Video(props) {
    const handleMute=(e)=>{
         e.preventDefault();
         e.target.muted = !e.target.muted
    }
    return (
        <div>
            <video className="video_style" onClick={handleMute} controls muted='muted' type="video/mp4">
            <source src={props.source} type="video/webm" ></source>
            </video>
        </div>
    )
}

export default Video
