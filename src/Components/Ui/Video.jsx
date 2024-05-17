import React from 'react';

const extractIframeSrc = (embedHTML) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(embedHTML, 'text/html');
    const iframe = doc.querySelector('iframe');
    return iframe ? iframe.src : '';
};

const Video = ({ embed }) => {
    const iframeSrc = extractIframeSrc(embed);
    return (
        <div style={{ width: '100%', position: 'relative', paddingBottom: '56.25%' }}>
            <iframe
                src={iframeSrc}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    overflow: 'hidden',
                }}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Video;