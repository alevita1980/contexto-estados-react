import styles from "./login.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const label = (labelName, type, value, func) => {
  return (
    <label>
      {labelName}
      <input
        className={styles.inputBox}
        type={type}
        value={value}
        onChange={func}
      />
    </label>
  );
};

const LoginForm = (props) => {
  // Desestructuramos los props:
  const { auth, setAuthHook, userData, userDataHook } = props;
  const { username, password } = userData;
  // Establecemos dos hooks para manejar momentaneamente los datos:
  const [newPass, setNewPass] = useState(password);
  const [newName, setNewName] = useState(username);

  // Establecemos la función que guarda los cambios en los datos globales:
  const handleSubmit = (event) => {
    // Suspendemos el evento para evitar submits erroneos
    event.preventDefault();
    // Seteamos como autorizado al usuario
    setAuthHook(true);
    // Actualizamos el objeto userData en este contexto
    userData.username = newName;
    userData.password = newPass;
    // Actualizamos userData para el contexto global
    userDataHook(userData);
    console.table(userData);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.formContainer}>
        <div className={styles.initialMessage}>
          <h1>Welcome</h1>
          <p>Log in to your account</p>
        </div>
        <form className="loginForm" onSubmit={handleSubmit}>
          {/* Cada setXxxx actualiza "onChange" el valor del hook,
          cuando el usuario presiona una tecla en el campo, se actualiza
          el valor de la variable del hook. Es por eso que newName debe disparar a setNewName */}
          {label("Username:", "text", newName, (e) =>
            setNewName(e.target.value)
          )}
          {label("Password:", "password", newPass, (e) =>
            setNewPass(e.target.value)
          )}
          <input className={styles.submitButton} type="submit" value="Log In" />
        </form>
      </div>
      <div className={styles.endMessage}>
        <p>
          New to marvel e-commerce?{" "}
          <NavLink className={styles.signupLink} to="/signup">
            Sign Up!
          </NavLink>
        </p>
      </div>
    </div>
  );
};
export default LoginForm;
