import React from 'react';
import './LandListingManagement.css';  // Import the CSS file
const LandListingManagement = () => {
  return (
    <div>

const LandListingManagement = () => {
  return (
    <div className="land-listing-container"> {/* Apply a CSS class */}
      <h2 className="title">Land Listing Management</h2> {/* Apply a CSS class */}
      
      {/* Rest of the HTML code */}
    </div>

const LandListingManagement = () => {
  const [location, setLocation] = useState('');
  const [size, setSize] = useState('');
  const [usage, setUsage] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [conditions, setConditions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation and data manipulation
    // Example: Make API calls to list land

    // Reset form fields
    setLocation('');
    setSize('');
    setUsage('');
    setDuration('');
    setPrice('');
    setConditions('');
  };

  return (
    <div>
      <h2>Land Listing Management</h2>

      <form onSubmit={handleSubmit}>
        {/* Input fields */}
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Rest of the input fields */}

        <button type="submit">List Land</button>
      </form>
    </div>
    
      <h2>Land Listing Management</h2>

      <form>
        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" />
        </div>

        <div>
          <label htmlFor="size">Size:</label>
          <input type="text" id="size" name="size" />
        </div>

        <div>
          <label htmlFor="usage">Allowed Land Usage:</label>
          <input type="text" id="usage" name="usage" />
        </div>

        <div>
          <label htmlFor="duration">Lease Duration:</label>
          <input type="text" id="duration" name="duration" />
        </div>

        <div>
          <label htmlFor="price">Rental Price:</label>
          <input type="text" id="price" name="price" />
        </div>

        <div>
          <label htmlFor="conditions">Additional Conditions:</label>
          <textarea id="conditions" name="conditions"></textarea>
        </div>

        <button type="submit">List Land</button>
      </form>
    </div>
 
  );
};

export default LandListingManagement;





