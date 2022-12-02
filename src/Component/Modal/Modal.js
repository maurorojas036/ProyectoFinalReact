import React from 'react';
import {Button, Form , Modal, Figure, Table} from 'react-bootstrap';

function ModalApp({
    show,
    setShow,
    name,
    address = 'No posee direccion',
    city= '',
    capacity = '',
    image='',
    bandera,
    players,
    playersEmpty
  }) {
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { !bandera && 
            <Form className='text-center m-auto'>
              <Form.Group className="mb-3" >
                <Figure className='m-auto img-fluid'>
                  <Figure.Image
                    width={300}
                    height={300}
                    alt={name}
                    src={image}
                  />
                </Figure>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Text className='fs-3'> Direccion: {address}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Text className='fs-3'>Ciudad: {city}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Text className='fs-3'>Capacidad: {capacity} personas</Form.Text>
              </Form.Group>
            </Form>
          }
          { bandera && 
            <>
            { playersEmpty  ?
              <Table striped bordered hover>
              <thead>
              <tr>
                <th>photo</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Nationality</th>
              <th>Height</th>
              <th>Weight</th>

              </tr>
              </thead>
              <tbody>
              { Array.isArray(players) && 
                players.map(({id,firstname,lastname, age ,nationality, height, weight,photo}) => 
                    <tr key={id}>
                      <td><img alt={name} src={photo}/></td>
                      <td>{firstname}</td>
                      <td>{lastname}</td>
                      <td>{age}</td>
                      <td>{nationality}</td>
                      <td>{height}</td>
                      <td>{weight}</td>
                    </tr>
                )
              }
              </tbody>
              </Table> : <p className='text-primary text-center'> No se encontraron datos de jugadores</p>
            }
            </>
          }
          </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalApp