import React, { useEffect } from 'react';

const NotFound = () => {
    useEffect(() => {
        window.open("/https://www.facebook.com/?locale=es_LA", "_blank");
    })

    return (
        <div>
            <h1>404</h1>
        </div>
    );
};

export default NotFound;