import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext"

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(rememberMe);
    navigate("/dashboard");
  };
  
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <button type="submit">Log in</button>
        </div>
        <div>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label>Remember Me</label>
        </div>
      </form>
    </div>
  );
}

export default Login;

