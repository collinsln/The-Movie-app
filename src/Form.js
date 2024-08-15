import React, { useState, useEffect } from 'react';

function App() {
  const [jsonData, setJsonData] = useState({});
  const [editedData, setEditedData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  
  useEffect(() => {
    fetch('http://example.com/api/data.json')
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
        setEditedData(data); 
      })
      .catch((error) => console.error(error));
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    
    fetch('http://example.com/api/updateData', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedData),
    })
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
        setIsEditing(false);
      })
      .catch((error) => console.error(error));
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData(jsonData); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="title"
            value={editedData.title}
            onChange={handleInputChange}
          />
         
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>{jsonData.title}</p>
         
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
}
export default App;
