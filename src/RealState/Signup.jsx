import react from "react";
import "./style.css";
import { Link } from "react-router-dom";

// Import image
import signup from "./image/signup.png"
import logo from "./image/logo.png";

const Signup = () => {
  return (
    <>
      <div className="login_container">
        <section className="login_right signup_right">
          <Link to="/" className="login-logo">
            <img src={logo} alt="logo" className="login-logo" />
          </Link>

          <form className="box" action="" method="">
            <h1>Sign Up</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <input type="submit" value="Sign up" />
          </form>

          <h5 className="login_know">Already have an account</h5>
          <Link to="/login" className="login_signup">
            <h5>Sign In</h5>
          </Link>
        </section>

        <section className="login_left signup_left">
          <img src={signup} alt="login_image" className="login_image" />
        </section>
      </div>
    </>
  );
};

export default Signup;
