import styles from "./profile.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  FormInput,
  PhoneInput,
  RequiredFormInput,
} from "../components/form_inputs/formInputs.js";

const Profile = (props) => {
  // Este es un hook de React Router que nos ayuda a redireccionar luego del submit.
  let navigate = useNavigate();

  // Desestructuramos los props:
  const { userData, userDataHook } = props;
  // Establecemos hooks para almacenar la información en esta página:
  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastname] = useState(userData.lastName);
  const [username, setUsername] = useState(userData.username);
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhone] = useState(userData.phone);
  const [country, setCountry] = useState(userData.country);
  const [provinceState, setProvinceState] = useState(userData.provinceState);
  const [city, setCity] = useState(userData.city);
  const [postalCode, setPostalCode] = useState(userData.postalCode);
  const [actualPassword, setActualPassword] = useState(userData.password);
  const [newPassword, setNewPassword] = useState("-");
  const [repeatNewPassword, setRepeatNewPassword] = useState("--");

  // Función que maneja el submit del formulario, actualiza el objeto global userData.
  const handleProfileSubmit = (event) => {
    event.preventDefault();
    userData.firstName = firstName;
    userData.lastName = lastName;
    userData.username = username;
    userData.email = email;
    userData.phone = phone;
    userData.country = country;
    userData.provinceState = provinceState;
    userData.city = city;
    userData.postalCode = postalCode;
    userDataHook(userData);
    console.table(userData);
  };

  // Función que maneja el submit del formulario, actualiza el objeto global userData.
  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== repeatNewPassword) {
      // Previene que las contraseñas ingresadas sean distinas
      alert("😬 New passwords doesn't match");
    } else if (actualPassword === newPassword) {
      // Previene que las contraseñas ingresadas sean iguales a la original
      alert("😛 The New password must be diferent than the old one");
    } else {
      // Actualiza el objeto global userData
      userData.password = newPassword;
      userDataHook(userData);
      alert("🥳 Password Updated !!");
      navigate("/home", { replace: true });
    }
  };

  return (
    <div className={styles.formsContainer}>
      <div className={styles.userProfileContainer}>
        <div className={styles.initialMessage}>
          <h1>User Profile</h1>
        </div>
        <form
          className={[styles.userProfileForm, styles.formCommon].join(" ")}
          onSubmit={handleProfileSubmit}
        >
          {FormInput("First name", "text", firstName, (e) =>setFirstName(e.target.value))}
          {FormInput("Last name", "text", lastName, (e) =>setLastname(e.target.value))}
          {RequiredFormInput("**Username", "text", username, (e) => setUsername(e.target.value))}
          {RequiredFormInput("**Email", "email", email, (e) => setEmail(e.target.value))}
          {PhoneInput("**Phone", phone, (e) => setPhone(e.target.value))}
          <p>[Delivery address]</p>
          {FormInput("Country:", "text", country, (e) => setCountry(e.target.value))}
          {FormInput("Province - State:", "text", provinceState, (e) => setProvinceState(e.target.value))}
          {FormInput("City:", "text", city, (e) => setCity(e.target.value))}
          {FormInput("Postal Code:", "text", postalCode, (e) => setPostalCode(e.target.value))}
          <input
            className={styles.submitButton}
            type="submit"
            value="Update profile"
          />
        </form>
      </div>
      <div className={styles.passwordFormContainer}>
        <div className={styles.initialMessage}>
          <h1>Change Password</h1>
        </div>
        <form
          className={[styles.passwordForm, styles.formCommon].join(" ")}
          onSubmit={handlePasswordSubmit}
        >
          {RequiredFormInput("**Actual Password", "text", actualPassword, () => {})}
          {RequiredFormInput("**New Password", "password", newPassword, (e) => setNewPassword(e.target.value))}
          {RequiredFormInput("**Repeat new password", "password", repeatNewPassword, (e) => setRepeatNewPassword(e.target.value))}
          <input
            className={styles.passwordSubmitButton}
            type="submit"
            value="Password Reset"
          />
        </form>
      </div>
    </div>
  );
};
export default Profile;
