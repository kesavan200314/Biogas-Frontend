import { useState } from "react";
import "./Login.css";
import backgroundImage from "../assets/bg.jpg";
import { useNavigate } from "react-router-dom";
import { UseAuth } from "../Backend/auathcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const Login = ({ setIsAuthenticated }: { setIsAuthenticated: (auth: boolean) => void }) => {
  const { signin } = UseAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const token = await signin(email, password);
      Cookies.set("token", token.token, { expires: 1 }); // Save token in cookies for 1 day
      setIsAuthenticated(true); // Update state
      window.dispatchEvent(new Event("authChange")); // Notify app of auth change
      toast.success("Welcome back! You have successfully logged in.");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      toast.error("Login failed! Please check your credentials and try again.");
    }
  };
  

  return (
    <div className="login" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick pauseOnHover draggable theme="colored" />
      <form className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__title">Login</h1>

        <div className="login__content">
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

        <button type="submit" className="login__button">Login</button>
      </form>
    </div>
  );
};

export default Login;

