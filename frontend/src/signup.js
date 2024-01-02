import React, { useState } from "react";
import SignupImage from "./assets/jpg/form.jpg";
import { useNavigate } from "react-router-dom";
 import { TextInput } from "./components/TextInput";


export const Signup = () => {
  const navigate = useNavigate();
   
  const [signupFields, setSignupFields] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const checkPasswordsMatch = () => {
    if (signupFields.password !== signupFields.confirmPassword) {
      return alert("Passwords didnot match!");
    }
    return true;
  };
  const onSubmit = async () => {
    // Check if passwords match
    if (!checkPasswordsMatch()) {
      return;
    }
 
    // Check if signup was successful
  // if (response.success) {
  // Save username and password to local storage
  localStorage.setItem("username", signupFields.username);
  localStorage.setItem("password", signupFields.password);

  // Display pop-up message
  alert("User registered successfully!");

  // Log success message to console
  console.log("User registered successfully!");

  // Navigate to login page or perform any other action
  navigate("/login");
  // } else {
  //   // Display error message if signup fails
  //   alert(response.error);
  // }
};

  return (
    <div style={styles.container}>
      <div style={styles.loginFormContainer}>
        <div style={styles.loginForm}>
          <h1 style={{ textAlign: "center" }}>Signup</h1>
          <p style = {styles.formDesc}>welcome to dream home design </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
          {/* <form style={styles.signup} onSubmit={handleSubmit} >   */}
          <TextInput
              type="text"
              placeholder="Username" // Change placeholder to "Username"
              onTextChange={(text) =>
                setSignupFields({ ...signupFields, username: text }) 
              }
            />
            <TextInput
              type="text"
              placeholder="youremail@gmail.com"
              onTextChange={(text) =>
                setSignupFields({ ...signupFields, email: text })
              }
            />
            <TextInput
              type="password"
              placeholder="Password"
              onTextChange={(text) =>
                setSignupFields({ ...signupFields, password: text })
              }
            />
            <TextInput
              type="password"
              placeholder="Confirm Password"
              onTextChange={(text) =>
                setSignupFields({ ...signupFields, confirmPassword: text })
              }
            />
            {/* </form> */}
            
            <button style={styles.button} onClick={onSubmit}>
              Signup
            </button>
            <div style={{ marginTop: 20 }}>
              <div style={{ textAlign: "center", marginTop: 10 }}>
                Already have an account?
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
                onClick={() => navigate("/login")}
                //onClick={() => props.onFormSwitch('login')}
              >
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.imageContainer}>
        <img src={SignupImage} alt="React Logo" style={styles.image} />
      </div> 
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flex: 1,
    height: "122vh",
    alignItems: "center",
    justifyContent: "center",
  },
  loginFormContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: "40px",
    height: "100%",
    backgroundColor:"#F5F5F5",
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
  },
  buttonHover: {
    background: "#0000",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
  },
};