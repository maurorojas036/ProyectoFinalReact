import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import LeaguebyCountry from "../Component/League/LeaguebyCountry";


//StyleSheet

function Detail(){
    const {country} = useParams();
  
    return(
        <>
            <LeaguebyCountry country={country}/>
        </>
    )
}

export default Detail