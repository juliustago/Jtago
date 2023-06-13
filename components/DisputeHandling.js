import React, { useState, useEffect } from 'react';

const DisputeHandling = () => {
  const [disputes, setDisputes] = useState([]);

  useEffect(() => {
    // Fetch disputes from the server or API
    // Set the disputes state with the fetched data
    // Example:
    // const fetchedDisputes = fetchDisputes();
    // setDisputes(fetchedDisputes);
  }, []);

  const handleResolveDispute = (disputeId) => {
    // Resolve dispute logic
    // Example:
    // resolveDispute(disputeId);
    // Update the disputes state to reflect the changes
    // const updatedDisputes = disputes.filter(dispute => dispute.id !== disputeId);
    // setDisputes(updatedDisputes);
  };

  return (
    <div>
      <h1>Dispute Handling</h1>
      {disputes.map((dispute) => (
        <div key={dispute.id}>
          <span>{dispute.description}</span>
          <button onClick={() => handleResolveDispute(dispute.id)}>Resolve</button>
        </div>
      ))}
    </div>
  );
};

export default DisputeHandling;



