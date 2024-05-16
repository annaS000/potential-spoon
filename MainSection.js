import React from 'react';
import Toolbar from './Toolbar';
import Cell from './Cell';

const MainSection = ({ formData, setFormData, onSave, setUnsavedChanges }) => {
  const addCell = () => {
    setFormData([...formData, { id: Date.now(), type: '', data: null }]);
    setUnsavedChanges(true);
  };

  const updateCellData = (id, data) => {
    setFormData(formData.map(cell => (cell.id === id ? { ...cell, data } : cell)));
    setUnsavedChanges(true);
  };

  const runAllCells = () => {
    formData.forEach(cell => {
      // Add logic to run all cells asynchronously
    });
  };

  return (
    <div className="main-section">
      <Toolbar onAddCell={addCell} onRunAll={runAllCells} onSave={onSave} />
      {formData.map((cell) => (
        <Cell key={cell.id} cell={cell} updateCellData={updateCellData} />
      ))}
    </div>
  );
};

export default MainSection;
