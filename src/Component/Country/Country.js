import React from "react";
import {Card, Button } from 'react-bootstrap'

import {Link} from 'react-router-dom'
const Country = ({name,code,flag}) =>{
    return(
        <>
            <Card style={{ width: '18rem' }} className="m-2 shadow">
                <Card.Title className="m-2 text-center fs-3">{name}</Card.Title>
                <div className="m-auto">
                <Card.Img variant="top" src={flag} className="p-3 img-fluid align-self-center"/>
                <Card.Body>
                </Card.Body>
                </div>
                <Button variant="primary" className="m-4 shadow align-self-center" as={Link} to={`/Country/Detail/${name}`}>Detail</Button>
            </Card>
        </>
    )

}

export default Country