import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', number: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = "Name is required";
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.number) {
      formErrors.number = "Number is required";
    } else if (!/^\d+$/.test(formData.number)) {
      formErrors.number = "Number must be numeric";
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
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
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <input
            type="text"
            name="number"
            id="number"
            value={formData.number}
            onChange={handleChange}
          />
          {errors.number && <p>{errors.number}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <p>Form submitted successfully!</p>}
    </div>
  );
}

export default App;