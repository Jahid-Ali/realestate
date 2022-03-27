import react from "react";
import "./style.css";
import { Link } from "react-router-dom";

// Import image
import login from "./image/login.png";
import logo from "./image/logo.png";

const Login = () => {
  return (
    <>
      <div className="login_container">
        <section className="login_left">
          <img src={login} alt="login_image" className="login_image" />
        </section>

        <section className="login_right">
          <Link to="/realestate" className="login-logo">
            <img src={logo} alt="logo" className="login-logo" />
          </Link>

          <form className="box" action="" method="">
            <h1>Sign In</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <input type="submit" value="Sign In" />
          </form>

          <h5 className="login_know">Don't have an account</h5>
          <Link to="/signup"className="login_signup" >
            <h5>Sign up</h5>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Login;
