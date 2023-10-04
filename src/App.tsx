import React from 'react';
import OrderStatusProgressBar from './components/OrderStatusProgressBar';
import LastCheckpointInfo from './components/LastCheckpointInfo';
import PackageLocationMap from './components/PackageLocationMap';
import UpsellProducts from './components/UpsellProducts';
import TrackingLink from './components/Tracking/TrackingLink';
import './App.css';

function App() {
  const statusList = ['Order Placed', 'Shipped', 'In Transit', 'Delivered'];
  const currentStatus = 'In Transit';
  const lastCheckpoint = 'Package arrived at the local hub';
  const location = { lat: 37.7749, lng: -122.4194 }; // Example coordinates
  const carrier = 'UPS';
  const trackingNumber = '123456789';

  return (
    <div className="app">
      <h1>Order Tracking</h1>
      <OrderStatusProgressBar currentStatus={currentStatus} statusList={statusList} />
      <LastCheckpointInfo lastCheckpoint={lastCheckpoint} />
      <PackageLocationMap location={location} />
      <UpsellProducts />
      <TrackingLink carrier={carrier} trackingNumber={trackingNumber} />
    </div>
  );
}

export default App;
