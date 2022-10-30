const Hijo1 =(props)=>{
    // Desestructuramos props para obtener todos los atributos:
    const {mensaje} = props
    return(
        <h1>{mensaje}</h1>
    )
}


const Padre1 = ()=>{
    return(
    <div>
        <Hijo1 mensaje={"Mensaje de Padre a Hijo por props"} />
    </div>    
    )
} 

export default Padre1;

