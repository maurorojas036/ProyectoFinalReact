import React, {useState} from "react";
import ListofCountries from "../Component/Country/ListofCountries";
import FormCountry from "../Component/Country/FormCountry";
import {Spinner} from 'react-bootstrap'

export default function Country(){
    const [ params , setParams] = useState({name:'',code:'',search:''});
    const [countries, setCountries] = useState();
    const [spinner, setSpinner] = useState()

    return(
        <div>
            <h1 className="text-center fs-1 fw-light">Paises</h1>
            <div className="container">
                <FormCountry params={params} f={setParams} countries={countries} setCountries={setCountries} setSpinner={setSpinner}/>
            </div>
            <section>
                { spinner && 
                    <div className="text-center">
                        <Spinner animation="border" variant="light" />
                    </div>
                }    
                { !spinner &&
                    <ListofCountries countries={countries}/>
                }
            </section>
        </div>

        
    )

}