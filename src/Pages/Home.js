import React from "react";
import {Link} from 'react-router-dom'

export default function Home(){
    
    return(
        <>
            <div className="col-auto m-4 text-center">
                <p className="fs-1 fw-light aling-middle">Bienvenidos!</p>
            </div>
            <div className="text-center m-2 p-0">
                <p  className="fs-3 fw-light">
                    En este sitio podrá obtener información sobre paises, ligas y equipos en torno al mundo fútbol
                </p>
            </div>
            <div className="d-flex d-row aling-items-center justify-content-center">
                <Link type="button" className="btn btn-primary m-1" to={'/Country'}>Paises</Link>
                <Link type="button" className="btn btn-primary m-1" to={'/League'}>Ligas</Link>
            </div>
        </>
    )
}

