import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("your form data", formData);
    alert(`Form Submitted: \n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Contact No:
          <input
            type="tel"
            name="contactNo"
            placeholder="Enter your number"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Address:
          <textarea
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password:
          <textarea
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            type="password"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Registration;
