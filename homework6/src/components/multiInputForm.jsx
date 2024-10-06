import React, { useState } from 'react';

const MultiInputForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    interests: [],
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [showSubmittedData, setShowSubmittedData] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => {
        const interests = checked
          ? [...prevData.interests, value]
          : prevData.interests.filter((interest) => interest !== value);
        return { ...prevData, interests };
      });
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const { name, email, gender, interests, country } = formData;

    if (!name || name.length < 3) newErrors.name = "Name is required and must be at least 3 characters.";
    if (!email) {newErrors.email = "Please enter a valid email"}
    if (!gender) newErrors.gender = "Gender is required.";
    if (interests.length === 0) newErrors.interests = "At least one interest must be selected.";
    if (!country) newErrors.country = "Country is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setShowSubmittedData(false);
    } else {
      setErrors({});
      setShowSubmittedData(true);
    }
  };

  return (
    <div>
      <h2>Multi-Input Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            /> Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            /> Female
          </label>
          {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}
        </div>
        <div>
          <label>Interests:</label>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="reading"
              checked={formData.interests.includes('reading')}
              onChange={handleChange}
            /> Reading
          </label>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="traveling"
              checked={formData.interests.includes('traveling')}
              onChange={handleChange}
            /> Traveling
          </label>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="gaming"
              checked={formData.interests.includes('gaming')}
              onChange={handleChange}
            /> Gaming
          </label>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="sports"
              checked={formData.interests.includes('gaming')}
              onChange={handleChange}
            /> Sports
          </label>
          {errors.interests && <span style={{ color: 'red' }}>{errors.interests}</span>}
        </div>
        <div>
          <label>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select a country</option>
            <option value="macedonia">Macedonia</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
            <option value="germany">Germany</option>
          </select>
          {errors.country && <span style={{ color: 'red' }}>{errors.country}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>

      {showSubmittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Gender: {formData.gender}</p>
          <p>Interests: {formData.interests.join(', ')}</p>
          <p>Country: {formData.country}</p>
        </div>
      )}
    </div>
  );
};

export default MultiInputForm;
