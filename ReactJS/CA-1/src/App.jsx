import React from 'react';
import "./App.css"; 

const DesignForm = () => {
  return (
    <div className="form-container">
      <div className="form-description">
        <h2>Front end development on demand</h2>
        <p>Simply enter your design file in the window on the right and we will code it in a few days.</p>
        <ul>
          <li>Delivery in 3 business days</li>
          <li>No contract</li>
          <li>98 average Lighthouse speed test</li>
        </ul>
      </div>
      <div className="form-inputs">
        <h3>Let's bring your design to life</h3>
        <form>
          <label>Select option:</label>
          <select>
            <option value="ui">UI</option>
            <option value="ux">UX</option>
          </select>
          <label>Link to your design:</label>
          <input type="text" placeholder="xyz" />
          <label>Number of pages:</label>
          <input type="number" placeholder='7' />
          <label>Your email:</label>
          <input type="email" placeholder="gourav@gmail.com" />
          <button type="submit">Get Started</button>
        </form>
      </div>
    </div>
  );
}

export default DesignForm;
