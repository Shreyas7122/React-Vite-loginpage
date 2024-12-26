import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", formData);
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Signing up with:", formData);
    }
  };

  return (
    <div className="container">
      <h1>{isLogin ? "Login" : "Signup"}</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="email"
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="password">Password:</label> */}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {!isLogin && (
          <div className="form-group">
            {/* <label htmlFor="confirmPassword">Confirm Password:</label> */}
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
        )}
        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>
      <p >
      {isLogin ? (
      <span className="account-text">Don't have an account?</span>
      ) : (
        <span className="account-text">"Already have an account?"</span>
      )}
       {" "}
        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="toggle-btn"
        >
          {isLogin ? "Signup" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default App;
