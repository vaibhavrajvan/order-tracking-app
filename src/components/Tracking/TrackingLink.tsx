// TrackingLink.tsx
import React from 'react';

function TrackingLink(props: { carrier: any; trackingNumber: any; }) {
  const { carrier, trackingNumber } = props;

  return (
    <div className="tracking-link">
      <h3>Tracking Details</h3>
      <p>Carrier: {carrier}</p>
      <p>Tracking Number: {trackingNumber}</p>
      <a href={`https://www.example.com/tracking/${trackingNumber}`} target="_blank" rel="noopener noreferrer">
        Track your order
      </a>
    </div>
  );
}

export default TrackingLink;
