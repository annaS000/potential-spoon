import React, { useState, useEffect } from 'react';
import "./styles.css"
import axios from 'axios';
import Sidebar from './Sidebar';
import MainSection from './MainSection';

const App = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [formData, setFormData] = useState([]);
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const fetchElementData = async (elementId) => {
    try {
      const response = await axios.get(`/api/element/${elementId}`);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching element data', error);
    }
  };

  const handleElementSelect = (element) => {
    if (unsavedChanges && !window.confirm('You have unsaved changes. Do you want to proceed?')) {
      return;
    }
    setSelectedElement(element);
    fetchElementData(element.id);
    setUnsavedChanges(false);
  };

  const handleSave = async () => {
    try {
      await axios.post(`/api/element/${selectedElement.id}`, formData);
      setUnsavedChanges(false);
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (unsavedChanges) {
        event.preventDefault();
        event.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [unsavedChanges]);

  return (
    <div className="app">
      <Sidebar onElementSelect={handleElementSelect} />
      <MainSection
        formData={formData}
        setFormData={setFormData}
        onSave={handleSave}
        setUnsavedChanges={setUnsavedChanges}
      />
    </div>
  );
};

export default App;
