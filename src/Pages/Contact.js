import React from "react";
import FormContact from "../Component/FormContact/FormContact";

function Contact(){

    return(
        <>
            {/* Se genera un formulario */}
            <h3 className="text-center m-3">Formulario de Contacto</h3>
            <FormContact/>
        </>
    )
}

export default Contact