import React, { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import "./LoginPage.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { auth } from "../../firebase/Firebase";

const Loginpage = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [displayPassword, setDiplayPassword] = useState(false);

  const handlePassword = () => {
    setDiplayPassword(!displayPassword);
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password)
      .then(() => navigate("/product"))
      .catch((error) => setError(error));
  };
  console.log(auth);
  return (
    <div>
      <Header />

      <div className="profile-container">
        <form
          className="container"
          type="submit"
          onSubmit={(e) => handleLogin(e)}
        >
          <div className="container-title">Login </div>

          {error && (
            <button className="button  danger-varient">{error.message} </button>
          )}

          <label>Email address </label>
          <input
            placeholder="Enter your email"
            type="email"
            value={email}
            autoComplete="on"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label>Password</label>
          <input
            placeholder="Enter your password"
            type="password"
            autoComplete="on"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type={displayPassword ? "text" : "password"}
          />
          {displayPassword ? (
            <AiOutlineEye
              onClick={() => handlePassword()}
              className="display-icon"
            />
          ) : (
            <AiOutlineEyeInvisible
              onClick={() => handlePassword()}
              className="display-icon"
            />
          )}
          <button
            className="button test"
            onClick={() => {
              setEmail("test@gmail.com")
              setPassword(123456789)
            }}
          >
            Login with test credentials
          </button>
          <button className="button" type="submit">
            Login
          </button>
          <div className="container-text">
            Not a user?
            <Link className="container-nav" to="/signup">
              signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
