import React, { useState } from 'react';

export function CrudTable() {
  // Initialize state for the list of items and the current form values
  const [items, setItems] = useState([]);
  const [formValues, setFormValues] = useState({});

  // Handle form input changes
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = event => {
    event.preventDefault();
    setItems(prevItems => [...prevItems, formValues]);
    setFormValues({});
  };

  // Handle item deletion
  const handleDelete = index => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formValues.name || ''} onChange={handleInputChange} />
        </label>
        <label>
          Education:
          <input type="text" name="education" value={formValues.education || ''} onChange={handleInputChange} />
        </label>
        <label>
          Experience:
          <input type="text" name="experience" value={formValues.experience || ''} onChange={handleInputChange} />
        </label>
        <label>
          Domain:
          <input type="text" name="domain" value={formValues.domain || ''} onChange={handleInputChange} />
        </label>
        <button className='button-33' type="submit">Add Entry</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Education</th>
            <th>Experience</th>
            <th>Domain</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className = "fg">{item.name}</td>
              <td className = "fg">{item.age}</td>
              <td className = "fg">{item.experience}</td>
              <td className = "fg">{item.domain}</td>
              <td>
                <button className='button-33' onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

