import React from 'react';

const Video = ({ src }) => {

    return (
        <div style={{ width: '100%', height: '0px', position: 'relative', paddingBottom: '56.25%', background: '#000' }}>
            <iframe
                src={src}
                frameBorder="0"
                width="100%"
                height="100%"
                allowFullScreen
                allow="autoplay; fullscreen"
                style={{ width: '100%', height: '100%', position: 'absolute', left: '0px', top: '0px', overflow: 'hidden' }}
            ></iframe>
        </div>
    );
};

export default Video;