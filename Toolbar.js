import React from 'react';

const Toolbar = ({ onAddCell, onRunAll, onSave }) => {
  return (
    <div className="toolbar">
      <button onClick={onAddCell}>Add Cell</button>
      <button onClick={onRunAll}>Run All</button>
      <button onClick={onSave}>Save</button>
    </div>
  );
};

export default Toolbar;
