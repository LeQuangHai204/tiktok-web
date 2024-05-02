import React, { forwardRef } from 'react';

const Video = forwardRef(
    ({ src, className, controls = true, ...props }, ref) => {
        return (
            <video className={className} controls={controls} {...props}>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        );
    }
);

export default Video;
