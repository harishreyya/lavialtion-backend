import React, { useState } from 'react';
import axios from 'axios';

const MultiStepForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://laviation-back.onrender.com/submit', {
        name,
        email,
        phone,
        address,
        selectedOptions,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to save form data');
    }
  };

  return (
    <div>
      <h2>Multi-Step Form</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> <br/>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> <br/>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        /> <br/>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        /> <br/>
        
        <select
          multiple
          value={selectedOptions}
          onChange={(e) =>
            setSelectedOptions(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        > <br/>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default MultiStepForm;
