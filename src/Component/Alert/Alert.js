import React, { useState } from 'react';
import {Alert, Container} from 'react-bootstrap';

function CustomAlert({errorvalue, msg}) {
const [show, setShow] = useState(true);
console.log(msg)
  if (show) {
    return (
      <>
        { errorvalue &&
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Error</Alert.Heading>
            <p>
              {msg}
            </p>
          </Alert>
        }
        { !errorvalue &&
          <Container>
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Enviado</Alert.Heading>
              <p>
                {msg}
              </p>
            </Alert>
          </Container>
        }
 
      </>
    );
  }
}

export default CustomAlert