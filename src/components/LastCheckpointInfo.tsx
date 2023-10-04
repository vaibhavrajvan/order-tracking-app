import React from 'react';

interface LastCheckpointInfoProps {
  lastCheckpoint: string;
}

function LastCheckpointInfo(props: LastCheckpointInfoProps) {
  const { lastCheckpoint } = props;

  return (
    <div className="last-checkpoint-info">
      <h2>Last Checkpoint</h2>
      <p>{lastCheckpoint}</p>
    </div>
  );
}

export default LastCheckpointInfo;
