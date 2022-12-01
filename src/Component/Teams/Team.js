import React, { useState }from "react";

import {Card, Button, Spinner } from 'react-bootstrap'
import GetPlayers from "../../Services/GetPlayers";
import ModalApp from "../Modal/Modal";


function Team({
    id,
    season,
    country,
    founded,
    logo,
    name,
    nameStadium,
    addressStadium,
    cityStadium,
    capacityStadium,
    imageStadium
    }){
    const [banderaModal, setBandera]= useState(); //Esta bandera indicará en el modal si se tiene que mostrar la plantilla(true) o el estadio(false)
    const [showTemplate, setShowTemplate] = useState(false);//Estado para mostrar modal de los jugadores
    const [showStadium, setShowStadium] = useState(false);//Estado para mostrar los datos del estadio
    const [params, setParams] = useState({
        team:id,
        season:season
    }) // EStado para hacer la busqueda en el servicio con los parametros que necesita
    const [players, setPlayers]= useState([]);
    const [playersEmpty, setPlayersEmpty]= useState(true);
    const [spinner , setSpinner]= useState(true)

    // Genero dos funciones para cambiar los estados de las variables correspondientes a la plantilla y al estadio
    const handleTemplate = async (event) =>{
        setSpinner(false)
        // Realizar la llamada al servicio para obtener los jugadores
        const response = await GetPlayers({params : params})
            .then( res =>{
                if(res.length > 0){
                    let playersResponse = []
                    res.forEach(data => {
                        playersResponse.push(data.player)
                    })
                    setPlayers(playersResponse)
                }else{
                    setPlayersEmpty(false)
                }
            })
        setShowTemplate(true)
        setBandera(true)
        setSpinner(true)
        
    }
    const handleStadium = () =>{
        setShowStadium(true)
        setBandera(false)
    }

    return(
        <>
            <Card style={{ width: '18rem'}} className="m-2 shadow">
                <div className="ms-0 me-0 mb-auto mt-auto">
                    <Card.Img variant="top" src={logo} className="p-3 img-fluid align-self-center"/>
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Fundado en el año {founded} en {country}</Card.Text>
                    </Card.Body>
                </div>
                <div className="row m-auto alig-self-center">
                      <Button variant="primary" className="m-1 col-auto shadow" onClick={event => handleTemplate(event)} >
                            { !spinner ? <><Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            /> <span className="m-1 col-auto shadow">Cargando...</span> </>  : 
                            'Plantilla'
                            }
                        </Button>
                   
                        <Button variant="secondary" className="m-1 col-auto shadow" onClick={handleStadium}>
                            Estadio
                        </Button>
                </div>
            </Card>

            {/* Modal para mostrar la plantilla de jugadores */}
            <ModalApp show={showTemplate} 
                setShow={setShowTemplate}
                name='Plantilla'
                bandera={banderaModal}
                players={players}
                playersEmpty = {playersEmpty} />

            {/* Modal para mostrar el estadio y su información */}
            <ModalApp show={showStadium}
                setShow={setShowStadium}
                name={nameStadium}
                address={addressStadium}
                city={cityStadium}
                capacity={capacityStadium}
                image={imageStadium}
                bandera={banderaModal}
                />
        </>
    )
}

export default Team
