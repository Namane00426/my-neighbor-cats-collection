
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';

const MapPage = () => {
    const navigate = useNavigate();

  return (
    <><div style={{ height: "400px", width: "100%" }}>
          <MapContainer center={[59.8641891, 17.6886383]} zoom={15}
              style={{ height: "100%", width: "100%" }}>
              <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
          </MapContainer>
      </div><div>
              <h1>Map Page</h1>
              <p>This is where the map will be displayed.</p>
              <button onClick={() => navigate('/cat/1')}
              >See this cat details
              </button>
          </div></>
  );
};

export default MapPage;