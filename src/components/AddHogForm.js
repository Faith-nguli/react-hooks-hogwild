import React, { useState } from 'react';

const AddHogForm = ({ onAddHog }) => {
  const [newHog, setNewHog] = useState({ name: '', specialty: '', weight: '', greased: false, image: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewHog((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHog(newHog);
    setNewHog({ name: '', specialty: '', weight: '', greased: false, image: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={newHog.name} onChange={handleChange} required />
      <input type="text" name="specialty" placeholder="Specialty" value={newHog.specialty} onChange={handleChange} required />
      <input type="number" name="weight" placeholder="Weight" value={newHog.weight} onChange={handleChange} required />
      <label>
        <input type="checkbox" name="greased" checked={newHog.greased} onChange={handleChange} />
        Greased
      </label>
      <input type="text" name="image" placeholder="Image URL" value={newHog.image} onChange={handleChange} required />
      <button type="submit">Add Hog</button>
    </form>
  );
};

export default AddHogForm;
