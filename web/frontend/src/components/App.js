import React, { useState } from 'react';
import axios from 'axios';
import '../style.css'; // Import your CSS file here

function App() {
  const [campground, setCampground] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [output, setOutput] = useState('');

  const handleCheckAvailability = async () => {
    try {
      const response = await axios.post('http://localhost:3001/check_availability', {
        campground,
        startDate,
        endDate,
      });

      setOutput(response.data.output);
    } catch (error) {
      console.error('Error checking availability:', error.message);
      setOutput('Error: Unable to check availability');
    }
  };

  return (
    <div>
      <h1>CampBot - Campsite Availability Checker</h1>
      <div>
        <label>
          Campground:
          <input type="text" value={campground} onChange={(e) => setCampground(e.target.value)} />
        </label>
        <br />
        <label>
          Start Date:
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </label>
        <br />
        <label>
          End Date:
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </label>
        <br />
        <button onClick={handleCheckAvailability}>Check Availability</button>
      </div>
      <div>
        <h2>Output:</h2>
        <textarea
          rows="10"
          cols="50"
          readOnly
          value={output}
          style={{ marginTop: '10px', borderColor: '#ccc' }}
        />
      </div>
    </div>
  );
}

export default App;
