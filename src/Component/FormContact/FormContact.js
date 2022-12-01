import { useState } from "react";
import SendMail from "../../Services/PostMail";
import CustomAlert from "../Alert/Alert";
import { Form, Button} from 'react-bootstrap'

function FormContact() {

    // Banderas para mostrar la notificacion
    const [show, setShow] = useState(false)
    const [errorvalue, setError] = useState()
    const [message, setMessage] = useState();
    

    const handleSubmit = (event)=>{
        setShow(false)
        let formValidate = event.target
        let formdata = new FormData(event.target)

        if(!formValidate.checkValidity()){
            event.preventDefault()
            event.stopPropagation()
        }

        if(formValidate.checkValidity()){
            event.preventDefault()
            SendMail({formdata}).then((response) =>{
                if(response.ok){
                    setError(false)
                    setShow(true)
                    setMessage('Form sent successfully')
                    for(const form of document.getElementsByTagName('form')) {
                        form.reset();
                    }
                }else{
                    setError(true)
                    setShow(true)
                    setMessage('Error to send form')
                }
            })
        }
        
        formValidate.classList.add('was-validated')
    }

  return (
    <>
        { show &&
            <CustomAlert error={errorvalue}  msg={message}/>
        }
        <div className="m-auto clearfix">
            <h4 className="text-center">
                Contactanos para cualquier sugerencia que quieras hacernos
            </h4>
        </div>
        <div>
            <form className="col-5 m-auto needs-validation" 
             action="https://formspree.io/f/xbjbvdrq" 
             method="POST"
            onSubmit={event => handleSubmit(event)} 
            noValidate>
                
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        className="form-control"
                        placeholder="nombre"
                        required
                    />
                    <label className="form-label" htmlFor="nombre">Nombre*</label>
                    <div className="fs-5 invalid-feedback">
                        Por favor ingrese su nombre.
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        name="apellido"
                        id="apellido"
                        className="form-control"
                        placeholder="apellido"
                        required
                    />
                    <label className="form-label" htmlFor="apellido">Apellido*</label>
                    <div className="fs-5 invalid-feedback">
                        Por favor ingrese su apellido.
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                    />
                    <label htmlFor="email">Email*</label>
                    <div className="fs-5 invalid-feedback">
                        Por favor ingrese su email.
                    </div>
                </div>
                <div className="form-floating">
                    <textarea 
                        name="comentario"
                        rows="5"
                        cols="40" 
                        id="comment"
                        placeholder="Comentario"
                        className="form-control"
                        style={{height: '150px'}}
                        required
                    ></textarea>
                    <label className="form-label" htmlFor="comment">Comentario*</label>
                    <div className="fs-5 invalid-feedback">
                        Por favor ingrese su comentario
                    </div>
                </div>
                <p className="fs-5">(*) campos obligatorios</p>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary m-3"> Enviar </button>
                </div>
        
            </form>
        </div>
        
    </>
  );
}

export default FormContact