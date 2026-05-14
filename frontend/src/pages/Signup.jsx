import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // HANDLES INPUT CHANGES
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT HANDLER (placeholder for future API integration)
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: validation logic
    // TODO: API request (backend connection)
    console.log("Signup Data:", formData);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Create Account</h1>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="signup-input"
          minLength="6"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="signup-input"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="signup-input"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="signup-input"
          required
        />

        <button type="submit" className="signup-button">
          Sign Up
        </button>

        <p className="signup-text">
          Already have an account?{" "}
          <Link to="/login" className="signup-link">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;