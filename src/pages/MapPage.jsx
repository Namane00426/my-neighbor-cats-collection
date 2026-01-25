
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet';
import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import L from 'leaflet';
const catIcon = new L.Icon({
  iconUrl: '/cat-pin-lg.png',
  iconSize: [64, 96],
  iconAnchor: [32, 96],
  popupAnchor: [0, -96],
});

const MapPage = () => {
  const [position, setPosition] = useState(null);
    const navigate = useNavigate();
    const currentLocationIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34], 
    });
    const cats=useSelector((state) => state.cats);


    useEffect(() => {
      // get current position
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
      }, (err) => {
        console.error(err);
        // default position if geolocation fails : Stockholm
        setPosition([59.3293, 18.0686]);    
      })
     }, []);
      //while loading position, show loading message  
      if (!position) {
        return <div>Loading map...</div>;
      } 


  return (
    <><div style={{ height: "400px", width: "100%" }}>
          <MapContainer center={position} zoom={15}
              style={{ height: "100%", width: "100%" }}>
              <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
              {cats.map(cat => (
  <Marker key={cat.id} position={cat.position} icon={catIcon}>
    <Popup>
      <strong>{cat.name}</strong><br />
      {cat.description}
      <br />
      <button onClick={() => navigate(`/cat/${cat.id}`)}>See details</button>
    </Popup>
  </Marker>
))}

         {/* Add a marker for the current position */}
              <Marker position={position} icon={currentLocationIcon}>
          <Popup>You are here</Popup> 
        </Marker>
          </MapContainer>
      </div>
      <div>
              <h1>Map Page</h1>
              <p>This is where the map will be displayed.</p>
              <button onClick={() => navigate('/add')}
              >Add new cat info
              </button>
          </div></>
  );
};

export default MapPage;