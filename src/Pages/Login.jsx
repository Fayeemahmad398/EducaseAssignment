import { TextField } from "@mui/material";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../style/login.css"

function Login() {
  const [credential, setCredential] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleCredential(e) {
    const { name, value } = e.target;
    credential[name] = value;
    setCredential({ ...credential });

  }


  function checkAuthentication(users) {
    let currUser = users.find((user) => user.email == credential.email);
    if (!currUser) {
      toast.warn("user with this email does not exist");
      return;
    } else if (currUser.password != credential.password) {
      toast.warn("Wrong password");
      return;
    }
    return true;
  }


  function handleLogin() {
    for (let key in credential) {
      if (!credential[key]) {
        toast.warn(`Enter the ${key} please !`);
        return;
      }
    }

    let users = JSON.parse(localStorage.getItem("allUsers")) || [];
    if (users.length == 0) {
      toast.warn("Please create account first");
      navigate("/signup");
      return;
    }
    let isUserAuthenticate = checkAuthentication(users);
    if (isUserAuthenticate) {
      localStorage.setItem("currUser", JSON.stringify(credential));
      setCredential({ email: "", password: "" })
      navigate("/profile");
      return;
    }

  }

  return (
    <div className="login-form forms">
      <h2 className="welcome-page">Signin to your popX account</h2>
      <div>
        <p className="landing-page-p">Lorem ipsum dolor sit amet,
        </p>
        <p className="landing-page-p">
          adipisicing elit. Libero, odit!</p>
      </div>

      <TextField
        required
        id="outlined-required"
        label="Email Address"
        defaultValue=""
        placeholder="Enter email address"
        type="email" name="email" onChange={handleCredential}
        size="small"
      />
      <TextField
        required
        id="outlined-required"
        label="Password"
        defaultValue=""
        placeholder="Enter password"
        type="password" name="password" onChange={handleCredential}
        size="small"

      />
      <button className={`create-acct-btn landing-btn ${(credential.email && credential.password) ? "dark" : "light"}`}
        onClick={handleLogin}
        disabled={(!credential.email || !credential.password) ? true : false}>Login</button>

    </div >
  )
}

export default Login
