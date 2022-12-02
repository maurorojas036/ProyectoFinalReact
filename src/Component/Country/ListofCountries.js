import React from "react";
import Country from "./Country";

// StyleSheet
// import '../Css/ListofCountries.css'
import{Container} from 'react-bootstrap'

export default function ListofCountries({countries = []} = {}){
    
    return (
        <Container>
            <div className="d-flex flex-row flex-wrap justify-content-center">
                {
                    countries.map(({name,code,flag}) =>
                        <Country key={name} name={name} code={code} flag={flag}/>
                    ) 
                }
            </div> 
        </Container>
    )
        
    
}