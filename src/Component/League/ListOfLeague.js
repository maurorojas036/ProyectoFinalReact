import React, { useEffect, useState } from "react";
import GetLeague from "../../Services/GetLeague";
import League from "./League";

// StyleSheet
// import "../Css/ListOfLeague.css"
import{Container, Spinner} from 'react-bootstrap'

function ListOfLeague({leagues= [], leagueBoolean = true, spinner=false ,countryResponse=''}){
    
    return(
        <>
            <Container>
                {leagueBoolean &&
                    <div className="d-flex flex-row flex-wrap justify-content-start align-items-center mb-1 mt-1">
                    { spinner && 
                        <Spinner animation="border" variant="dark"/>
                    }
                    { !spinner &&
                        <img alt={countryResponse.name} src={countryResponse.flag} className="w-25 h-25 rounded-circle p-5"/>
                    }
                    <h1 className="text-center">{countryResponse.name}</h1>
                </div>
                }
                
                {/* Realizar un filtro  */}
                
                    { spinner &&
                        <div className="text-center">
                            <Spinner animation="border" variant="dark" />
                        </div>
                    }
                    {!spinner &&
                        <div className="d-flex flex-row flex-wrap justify-content-start w-auto h-50">
                        {
                            leagues.map(({league, seasons}) =>
                                <League key={league.id} id={league.id} name={league.name} logo={league.logo} seasons={seasons} />
                            )
                        }
                        </div>
                    }
                
            </Container>
        </>
    )
}

export default ListOfLeague