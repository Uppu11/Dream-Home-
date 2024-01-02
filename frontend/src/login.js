import React, { useState } from "react";
import LoginImage from "./assets/jpg/form.jpg";
import { useNavigate } from "react-router-dom";
import { TextInput } from "./components/TextInput";
import { Button } from "./components/Button";


export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login request using fetch or other methods
    // Use 'username' and 'password' state values
    onLogin(); // Call onLogin when the form is submitted
  };

  const onLogin = async () => {
    // Perform login logic here
    // const resp = await login({ username, password });
    // if (resp.success) {
    //   document.cookie = `x-access-token=${resp.data.token}; path=/;`;
    //   Navigate to the home page after successful login
    //   navigate("/home");
    // } else {
    //   alert(resp.error);
    // }

    // For now, let's simulate a successful login by navigating to the home page
    navigate("/home");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={styles.container}>
        <div style={styles.loginFormContainer}>
          <div style={styles.loginForm}>
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <p style={styles.formDesc}>welcome to dream home design </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextInput
                type="text"
                placeholder="yourusername"
                value={username}
                onTextChange={(text) => setUsername(text)}
              />
              <TextInput
                type="password"
                placeholder="Password"
                onTextChange={(text) => {
                  setPassword(text);
                }}
                value={password}
              />
              <Button style={styles.button} label={"Login"} />
              <div style={{ marginTop: 20 }}>
                <div style={{ textAlign: "center", marginTop: 10 }}>
                  Don't have an account?
                </div>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: 10,
                    textDecoration: "underline",
                    textDecorationColor: "#6315eb",
                    color: "#6315eb",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <img src={LoginImage} alt="React Logo" style={styles.image} />
        </div>
      </div>
    </form>
  );
};

const styles = {
  container: {
    display: "flex",
    flex: 1,
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  loginFormContainer: {
    display: "flex",
    flex: 1,
    padding: "40px",
    height: "100%",
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#dbc3a3",
    width: "60%",
    padding: 20,
    borderRadius: 10,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  input: {
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: 5,
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#f8f3ed",
    color: "black",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  imageContainer: {
    flex: 1,
    height: "110vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
};
