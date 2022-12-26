import React, { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import "../LoginPage/LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Signuppage = () => {
  const { signin } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [displayPassword, setDiplayPassword] = useState(false);

  const [displayConfirmedPswrd, setDisplayConfirmedPswrd] = useState(false);

  const navigate = useNavigate();

  const handlePassword = () => {
    setDiplayPassword(!displayPassword);
  };

  const handleConfirmPassword = () => {
    setDisplayConfirmedPswrd(!displayConfirmedPswrd);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    signin(email, password, name, confirmPassword)
      .then(() => navigate("/login"))
      .catch((error) => setError(error));
  };

  return (
    <div>
      <Header />
      <div className="profile-container">
        <form
          type="submit"
          className="container"
          onSubmit={(e) => handleSignup(e)}
        >
          <div className="container-title">Sign up </div>
          {error && (
            <button className="button  danger-varient">{error.message} </button>
          )}

          <label>Name</label>
          <input
            placeholder="Enter your name"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            autoComplete="on"
            value={name}
          />
          <label>Email address </label>
          <input
            placeholder="Enter your email"
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            autoComplete="on"
            value={email}
          />

          <label>Password</label>
          <input
            placeholder="Enter your password"
            type={displayPassword ? "text" : "password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            autoComplete="on"
          />
          {displayPassword ? (
            <AiOutlineEye
              onClick={() => handlePassword()}
              className="signUp-display-icon"
            />
          ) : (
            <AiOutlineEyeInvisible
              onClick={() => handlePassword()}
              className="signUp-display-icon"
            />
          )}

          <label>Confirm password</label>
          <input
            placeholder="Re-enter the password"
            type={displayConfirmedPswrd ? "text" : "password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            autoComplete="on"
          />

          {displayConfirmedPswrd ? (
            <AiOutlineEye
              onClick={() => handleConfirmPassword()}
              className="signUp-display-icon confirm-pswrd-display-icon "
            />
          ) : (
            <AiOutlineEyeInvisible
              onClick={() => handleConfirmPassword()}
              className="signUp-display-icon confirm-pswrd-display-icon "
            />
          )}

          <button className="button " type="submit">
            Sign up
          </button>
          <div className="container-text">
            Already a user?
            <Link className="container-nav" to="/login">
              login
            </Link>
          </div>
        </form>
      </div>
     
    </div>
  );
};

export default Signuppage;
