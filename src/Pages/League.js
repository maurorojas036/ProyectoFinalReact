import React, { useEffect, useState } from "react";
import FormLeague from "../Component/League/FormLeague";
import ListOfLeague from "../Component/League/ListOfLeague";

function League(){
    const [leagues, setLeagues] = useState()
    const [spinner, setSpinner] = useState()
    return(
        <>  
            <h1 className="text-center fs-1 fw-light">Ligas</h1>

            {/* un componente para el formulario */}
            <div className="container">
                <FormLeague setLeagues={setLeagues} setSpinner={setSpinner}/>
            </div>
            {/* un componente para listar las leagues */}
            <section>
                <ListOfLeague leagueBoolean={false} leagues={leagues} spinner={spinner} />
            </section>
        </>
    )
}

export default League