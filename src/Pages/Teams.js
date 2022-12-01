import React from "react";
import { useParams } from "react-router-dom";
import ListOfTeams from "../Component/Teams/ListOfTeams";

function Teams(){
    const {id, season} = useParams();

    return (
        <>
            <ListOfTeams id={id} season={season}/>
        </>
    )
}

export default Teams