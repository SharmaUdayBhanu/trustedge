import React from 'react';
import styles from './LocationMap.module.css';

const LocationMap = ({ location = "CFRX+R5 Kartarpur, Punjab", height = "400px" }) => {
    const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className={styles.mapContainer} style={{ height }}>
            <iframe
                title="Location Map"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={mapSrc}
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default LocationMap;
