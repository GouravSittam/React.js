import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ name: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = "Name is required";
    }

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
      console.log('Form Data:', formData);
      // Add form submission logic here
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <p>Form submitted successfully!</p>}
    </div>
  );
}

export default App;