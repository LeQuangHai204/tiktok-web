import React, { forwardRef } from 'react';

const Video = forwardRef(({ video }, ref) => {
    return (
        <video controls width="250">
            <source src={video.play} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
});

export default Video;
