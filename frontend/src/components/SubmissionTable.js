import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubmissionTable = () => {
  const [submissions, setSubmissions] = useState([]);

  const fetchSubmissions = async () => {
    try {
      // http://localhost:5000/submissions
      const response = await axios.get('https://laviation-back.onrender.com/submissions');
      setSubmissions(response.data);
    } catch (error) {
      console.log('Failed to fetch submissions');
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);



  return (
    <div>
      <h2>Submission Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.name}</td>
              <td>{submission.email}</td>
              <td>{submission.phone}</td>
              <td>{submission.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionTable;
