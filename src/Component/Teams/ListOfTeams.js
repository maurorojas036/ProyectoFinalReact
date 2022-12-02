import React, { useEffect, useState } from "react";
import CustomAlert from "../Alert/Alert";
// Servicio
import GetTeams from "../../Services/GetTeams";

// StyleSheet
import {Container, Spinner} from 'react-bootstrap'
import Team from "./Team";


function ListOfTeams({id,season}){

    const [params, setParams] = useState({league:id,season:season});
    const [responseTeams, setResponse] = useState([]);
    const [spinner, setSpinner] = useState()

    
    // Genero dos estados para mostrar mensaje de error en caso que no se pueda cargar datos
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState('')
    

    useEffect(() =>{
        setSpinner(true)
        // realizo la llamada al servicio 
        GetTeams({params}).then( res => {
            if(res.length > 0 ){
                setResponse(res)
            }else{
                setShow(true)
                setMessage('Data not found, try later')
            }
            setSpinner(false)
        })
    },[])
    return(

        <>
            {/* Llamo a los componente teams para mostrarlos */}
            <h2 className="text-center p-4">Equipos que participaron en la competencia en {season}</h2>
            {spinner &&
                <div>
                    <Spinner animation="border" variant="dark"/>
                </div>
            }
            {show &&
                <CustomAlert errorvalue={true} msg={message}/>
            }
            { !spinner && 
                <Container>
                    <div className="d-flex flex-row flex-wrap justify-content-start">
                        {
                            responseTeams.map(({team, venue}) =>
                                <Team key={team.country+team.name}
                                    id={team.id}
                                    season={season} 
                                    country={team.country} 
                                    founded={team.founded} 
                                    logo={team.logo} 
                                    name={team.name}
                                    nameStadium = {venue.name}
                                    addressStadium = {venue.address}
                                    cityStadium = {venue.city}
                                    capacityStadium = {venue.capacity}
                                    imageStadium = {venue.image}/>    
                                )
                        }
                    </div>
                </Container>
            }
        </>
    )
}

export default ListOfTeams