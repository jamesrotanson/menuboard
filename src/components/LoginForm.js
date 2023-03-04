import { useState } from "react";
import { auth } from "firebase/auth";
// import {auth} from "@react-firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   localStorage.setItem("isLoggedIn", "true");
    //   window.location.href = "/";
    // } catch (error) {
    //   alert(error.message);
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm
