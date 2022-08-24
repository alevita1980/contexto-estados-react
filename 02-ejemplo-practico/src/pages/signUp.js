import styles from "./signUp.module.css";
import { FormInput } from "../components/form_inputs/formInputs.js";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignUpForm = (props) => {
  let navigate = useNavigate();
  const { setAuthHook, userData, userDataHook } = props;
  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastname] = useState(userData.lastName);
  const [username, setUsername] = useState(userData.username);
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState("12345");
  const [repeatPassword, setRepeatPassword] = useState("12345");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your data: 
    ✅ First Name: ${firstName}
    ✅ Last Name: ${lastName}
    ✅ Username: ${username}
    ✅ E-mail: ${email}
    ✅ Password: ${password}
    ✅ Repeated password: ${repeatPassword}`);
    if (password !== repeatPassword) {
      // Previene que las contraseñas ingresadas sean distinas
      alert("😬 New passwords doesn't match");
    } else {
      // Actualiza el objeto global userData
      setAuthHook(true);
      userDataHook(userData);
      alert("🥳 Thank you for joining us!!");
      userData.firstName = firstName;
      userData.lastName = lastName;
      userData.username = username;
      userData.email = email;
      userData.password = password;
      navigate("/home", { replace: true });
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.fromBox}>
        <div className={styles.initialMessage}>
          <h1>Sign Up!</h1>
        </div>
        <form className={styles.signUpFormContainer} onSubmit={handleSubmit}>
          {FormInput("First name:", "text", firstName, (e) => setFirstName(e.target.value))}
          {FormInput("Last name:", "text", lastName, (e) => setLastname(e.target.value))}
          {FormInput("Username:", "text", username, (e) => setUsername(e.target.value))}
          {FormInput("Email:", "email", email, (e) => setEmail(e.target.value))}
          {FormInput("Password:", "password", password, (e) => setPassword(e.target.value))}
          {FormInput("Repeat password:", "password", repeatPassword, (e) => setRepeatPassword(e.target.value))}
          <input
            className={styles.submitButton}
            type="submit"
            value="Create Account"
          />
        </form>
      </div>
      <div className={styles.endMessage}>
        <p>
          Already have an account?{" "}
          <NavLink className={styles.loginLink} to="/login">
            Log In!
          </NavLink>
        </p>
      </div>
    </div>
  );
};
export default SignUpForm;
