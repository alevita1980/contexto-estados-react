const FormularioSimple = (props) => {
  // Primero desestructuramos los props para obtener los hooks:
  let {username, userNameHook, password, passwordHook} = props
  
  // Luego declaramos una función que reaccione al submit del form:
  const eventHandler = (event)=>{
    // Prevenimos que se dispare el formulario mientras estamos en esta función:
    event.preventDefault();
    // Hacemos más chico el objeto para accederlo de manera más cómoda y prolija:
    const e = event.target
    // Guardamos los valores con los hooks:
    userNameHook(e.username.value)
    passwordHook(e.password.value)
    // Referencia: https://stackoverflow.com/questions/23427384/get-form-data-in-reactjs
  };
  
  return (
    // El formulario es el de uso habitual, en cada input, 
    // el "name" le da el nombre de la variable que utilizaremos en el eventHandler.
    <form onSubmit={eventHandler} style= {{display: "flex", flexDirection:"column", alignItems:"start", gap:"10px"}}>
      <label for="user">Username:</label>
      <input type="text" id="user" name="username" defaultValue={username}></input>
      <label for="pass">Password:</label>
      <input type="password" id="pass" name="password" defaultValue={password}></input>
      <input type="submit" value="Enviar"></input>
    </form>
  );
};

export default FormularioSimple;