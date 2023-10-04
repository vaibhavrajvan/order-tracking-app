import React from 'react';

interface OrderStatusProgressBarProps {
  currentStatus: string;
  statusList: string[];
}

function OrderStatusProgressBar(props: OrderStatusProgressBarProps) {
  const { currentStatus, statusList } = props;

  // Calculate the progress percentage based on the current status
  const progressPercentage = (statusList.indexOf(currentStatus) / (statusList.length - 1)) * 100;

  return (
    <div className="order-status-progress-bar">
      <h2>Order Status</h2>
      <div className="progress-bar">
        <div
          className="progress-indicator"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="status-labels">
        {statusList.map((status, index) => (
          <span
            key={index}
            className={`status-label ${status === currentStatus ? 'active' : ''}`}
          >
            {status}
          </span>
        ))}
      </div>
    </div>
  );
}

export default OrderStatusProgressBar;
