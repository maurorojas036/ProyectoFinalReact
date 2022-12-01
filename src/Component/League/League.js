import React, {useState} from "react";
import {Card, Button } from 'react-bootstrap'
import {Form , Modal,Figure} from 'react-bootstrap';
import { Link } from "react-router-dom";
// import ModalApp from "./Modal";
// parametros que recibo: id de la liga, nombre de la liga, logo de la liga , y 
const League = ({id, name, logo, seasons}) => {
    // const array = ["One","Two","Three"]
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(seasons[0].year)


    const handleClose = () => setShow(false);
    const handleShow = () =>{
        setShow(true);
    }
    const handleChange = event => {
        setSelected(event.target.value)
    }

    return (
        <> 
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Debe seleccionar una temporada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Select  onChange={event => handleChange(event)}>
                            {
                                seasons.map((x)=>
                                <option key={x.year} value={x.year} >{x.year}</option>
                                )
                            }
                        </Form.Select>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" as={Link} to={`/League/Detail/${id}/${selected}`}>
                        Find
                    </Button>
                </Modal.Footer>
            </Modal>
            
            <Card style={{ width: '18rem'}} className="m-2 shadow">
                <Card.Title className="m-2 text-center fs-3">{name}</Card.Title>
                <div className="m-auto">
                <Figure className='img-fluid'>
                  <Figure.Image
                    width={200}
                    height={200}
                    src={logo}
                  />
                </Figure>
                <Card.Body>
                </Card.Body>
                </div>
                <Button variant="primary" className="m-1 shadow align-self-center" onClick={handleShow}>Detalle</Button>
            </Card>
        </> 
    )
}

export default League