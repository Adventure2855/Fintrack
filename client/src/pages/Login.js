import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/Loginpage.css";

const Login = () => {
  // Updated to a better financial/analytics themed image
  const img =
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80";

  // Alternative images you could use:
  const alternativeImages = {
    financial:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2011&q=80",
    analytics:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    modern:
      "https://images.unsplash.com/photo-1617781905173-1301551c78a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  };

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/v1/users/login", values);
      setLoading(false);
      message.success({
        content: "Login successful! Welcome back.",
        className: "custom-message",
        style: {
          marginTop: "20px",
        },
      });
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error({
        content: "Login failed. Please check your credentials.",
        className: "custom-message",
        style: {
          marginTop: "20px",
        },
      });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="login-page">
      {loading && <Spinner />}
      <div className="login-container">
        <div className="login-content">
          <div className="brand-section">
            <div className="brand-content">
              <h1 className="brand-title">FinTrack</h1>
              <p className="brand-subtitle">Smart Finance Management</p>
              <div className="brand-features">
                <div className="feature-item">
                  <span className="feature-icon">📊</span>
                  <span>Track Expenses</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💰</span>
                  <span>Save Money</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📈</span>
                  <span>Grow Wealth</span>
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                src={img}
                alt="Financial Management"
                className="login-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>

          <div className="form-section">
            <div className="form-content">
              <h2 className="welcome-text">Welcome Back</h2>
              <p className="login-subtitle">Sign in to manage your expenses</p>

              <Form
                layout="vertical"
                onFinish={submitHandler}
                className="login-form"
                requiredMark={false}
              >
                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email",
                      type: "email",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your email"
                    className="custom-input"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your password",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Enter your password"
                    className="custom-input"
                    size="large"
                  />
                </Form.Item>

                <div className="form-actions">
                  <button type="submit" className="login-button">
                    Sign In
                  </button>
                  <Link to="/register" className="register-link">
                    New to FinTrack? Create an account
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
