import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

function PackageLocationMap(props: { location: { lat: number; lng: number } }) {
  const { location } = props;

  return (
    <div className="package-location-map">
    <h3>Package Location</h3>
    <MapContainer center={[location.lat, location.lng]} zoom={13} style={{ height: '300px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* You can add more map components (Markers, Popups, etc.) here */}
    </MapContainer>
  </div>
);
}

export default PackageLocationMap;
