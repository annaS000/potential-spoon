import React, { useState } from 'react';

const Cell = ({ cell, updateCellData }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [formType, setFormType] = useState(cell.type);
  const [formData, setFormData] = useState(cell.data);

  const handleFormTypeChange = (event) => {
    setFormType(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add logic to call API and display result
    updateCellData(cell.id, formData);
  };

  return (
    <div className="cell">
      <div className="cell-header">
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? 'Expand' : 'Collapse'}
        </button>
      </div>
      {!isCollapsed && (
        <div className="cell-content">
          {!formType ? (
            <select value={formType} onChange={handleFormTypeChange}>
              <option value="" disabled>Select Form Type</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              {/* Add more form types as needed */}
            </select>
          ) : (
            <form onSubmit={handleFormSubmit}>
              {/* Render form based on formType */}
              {/* Example for type1 */}
              {formType === 'type1' && (
                <div>
                  <label>Input for Type 1</label>
                  <input
                    type="text"
                    value={formData?.input1 || ''}
                    onChange={(e) => setFormData({ ...formData, input1: e.target.value })}
                  />
                </div>
              )}
              {/* Add more form types as needed */}
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Cell;
