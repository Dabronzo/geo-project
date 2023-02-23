import React, { useEffect, useState } from 'react';
// import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const GeoMap = () => {
;  
    useEffect(() => {
        
        const map = L.map('map', {
            center: {lat: 52.1326, lng: 5.2913},
            zoom: 7,}); 
       
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map);
    },[]);
    

    console.log('mau');
    return (<div id="map" style={{ height: '800px' }}></div>);
};

export default GeoMap;