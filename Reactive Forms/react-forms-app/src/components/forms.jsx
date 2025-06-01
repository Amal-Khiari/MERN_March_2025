import React, { useState } from "react";
import "../App.css";


const Forms = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validate = () => {
    const newErrors = {};

    if (formData.firstName && formData.firstName.length < 2) {
      newErrors.firstName = "First Name must be at least 2 characters.";
    }
    if (formData.lastName && formData.lastName.length < 2) {
      newErrors.lastName = "Last Name must be at least 2 characters.";
    }
    if (formData.email) {
      if (formData.email.length < 8) {
        newErrors.email = "Email must be at least 8 characters.";
      } else if (!validateEmail(formData.email)) {
        newErrors.email = "Email must be a valid email address.";
      }
    }
    if (formData.password && formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords must match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const isAnyFieldEmpty = () => {
    return (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.password.trim() ||
      !formData.confirmPassword.trim()
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitted(false);
    setGeneralError("");
    validate();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isAnyFieldEmpty()) {
      setGeneralError("Please fill out the form.");
      setSubmitted(false);
      return;
    }

    if (validate()) {
      setUsers([...users, formData]);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
      setGeneralError("");
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="form-container">
      <h2>{submitted ? "Thank you for submitting the form !" : "Welcome. Please submit the form"}</h2>
      <form onSubmit={handleSubmit} noValidate>
        {generalError && <p className="general-error">{generalError}</p>}

        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit">Create User</button>
      </form>

      {users.length > 0 && (
        <div className="users-list">
          <h3>Users Added:</h3>
          {users.map((user, idx) => (
            <div key={idx} className="user-item">
              <strong>{user.firstName} {user.lastName}</strong> - <em>{user.email}</em>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Forms;