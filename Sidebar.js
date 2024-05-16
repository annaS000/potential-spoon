import React from 'react';

const Sidebar = ({ onElementSelect }) => {
  const elements = [
    { id: 1, name: 'Element 1' },
    { id: 2, name: 'Element 2' },
    // Add more elements as needed
  ];

  return (
    <div className="sidebar">
      <ul>
        {elements.map((element) => (
          <li key={element.id} onClick={() => onElementSelect(element)}>
            {element.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
