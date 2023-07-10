import React, { useEffect, useState } from 'react';
// import placeholderImage from './placeholderImage.png';

const API_URL = 'https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d';

function App() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setCandidates(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <div className="column">
        <h2>Applied</h2>
        {candidates
          .filter(candidate => candidate.status === 'Applied')
          .map(candidate => (
            <div key={candidate.id} className="box">
              <h3 className="candidate-heading">{candidate.name}</h3>
              <ul>
                <li><img src="https://via.placeholder.com/18x18" alt="Last Updated" />{candidate.last_updated_at}</li>
                <li><img src="https://via.placeholder.com/18x18" alt="Location" />{candidate.location}</li>
                <li><img src="https://via.placeholder.com/18x18" alt="Gender" />{candidate.gender}</li>
              </ul>
            </div>
          ))}
      </div>
      <div className="column">
        <h2>Accepted</h2>
        {candidates
          .filter(candidate => candidate.status === 'Accepted')
          .map(candidate => (
            <div key={candidate.id} className="box">
              <h3>{candidate.name}</h3>
              <ul>
                <li><img src="https://via.placeholder.com/18x18" alt="Last Updated" />{candidate.last_updated_at}</li>
                <li><img src="https://via.placeholder.com/18x18" alt="Location" />{candidate.location}</li>
                <li><img src="https://via.placeholder.com/18x18" alt="Gender" />{candidate.gender}</li>
              </ul>
            </div>
          ))}
      </div>
      <div className="column">
        <h2>Rejected</h2>
        {candidates
          .filter(candidate => candidate.status === 'Rejected')
          .map(candidate => (
            <div key={candidate.id} className="box">
              <h3>{candidate.name}</h3>
              <ul>
                <li><img src="https://via.placeholder.com/18x18" alt="Last Updated" />{candidate.last_updated_at}</li>
                <li><img src="https://via.placeholder.com/18x18" alt="Location" />{candidate.location}</li>
                <li><img src="https://via.placeholder.com/18x18" alt="Gender" />{candidate.gender}</li>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
