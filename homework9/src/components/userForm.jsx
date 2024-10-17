import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserForm = () => {

  const states = ["Macedonia", "Serbia", "Montenegro", "Croatia", "Slovenia"];

  const [formData, setFormData] = useLocalStorage("userForm", {
    username: "",
    password: "",
    email: "",
    addressState: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = "Username is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is not valid";
    if (!formData.password) tempErrors.password = "Password is required";
    else if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";
    if (!formData.addressState) tempErrors.addressState = "State is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  const clearForm = () => {
    setFormData({
      username: "",
      password: "",
      email: "",
      addressState: "",
    });
    setSubmitted(false);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc" }}>
      <h2>User Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ display: "block", width: "100%", marginBottom: "10px" }}
          />
          {errors.username && <span style={{ color: "red" }}>{errors.username}</span>}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ display: "block", width: "100%", marginBottom: "10px" }}
          />
          {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: "block", width: "100%", marginBottom: "10px" }}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>

        <div>
          <label>State</label>
          <select
            name="addressState"
            value={formData.addressState}
            onChange={handleChange}
            style={{ display: "block", width: "100%", marginBottom: "10px" }}
          >
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.addressState && <span style={{ color: "red" }}>{errors.addressState}</span>}
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>Submit</button>
        <button type="button" onClick={clearForm} style={{ marginLeft: "10px" }}>Clear Form</button>
      </form>

      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>State:</strong> {formData.addressState}</p>
        </div>
      )}
    </div>
  );
};

export default UserForm;