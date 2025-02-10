import { useState } from "react";
import "./Login.css";
import backgroundImage from "../assets/freepik__the-style-is-candid-image-photography-with-natural__96215.png";
import { useNavigate } from "react-router-dom";
import { UseAuth } from "../Backend/auathcontext";

const Login = () => {
  const { signin } = UseAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false); // To toggle password visibility
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signin(email, password);
    alert("Sign in successful!");
    setEmail("");
    // setRememberMe("");
    setPassword("");
    navigate("/");
  };

  return (
    <div className="login" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <form className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__title">Login</h1>

        <div className="login__content">
          {/* Email Field */}
          <div className="login__box">
            <i className="ri-user-3-line login__icon"></i>
            <div className="login__box-input">
              <input
                type="email"
                required
                className="login__input"
                id="login-email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="login-email" className="login__label">Email</label>
            </div>
          </div>

          {/* Password Field */}
          <div className="login__box">
            <i className="ri-lock-2-line login__icon"></i>
            <div className="login__box-input">
              <input
                type={showPassword ? "text" : "password"}
                required
                className="login__input"
                id="login-pass"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="login-pass" className="login__label">Password</label>
              <i
                className={`ri-${showPassword ? "eye-line" : "eye-off-line"} login__eye`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="login__check">
          <div className="login__check-group">
            <input
              type="checkbox"
              className="login__check-input"
              id="login-check"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="login-check" className="login__check-label">Remember me</label>
          </div>
          <a href="#" className="login__forgot">Forgot Password?</a>
        </div>

        {/* Submit Button */}
        <button type="submit" className="login__button">Login</button>

        {/* Register Link */}
        <p className="login__register">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
