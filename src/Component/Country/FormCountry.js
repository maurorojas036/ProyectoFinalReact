import React , {useState, useEffect}from "react";
import GetCountry from "../../Services/GetCountry";
import CustomAlert from "../Alert/Alert";

function FormCountry({countries , params, f, setCountries, setSpinner}){
    const [AuxParams, setAuxParams] = useState()

    // Genero dos estados para mostrar mensaje de error en caso que no se pueda cargar datos
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState('')
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setAuxParams({...AuxParams, [name]:value})
    }

    const handleConsult = (event) =>{
        event.preventDefault()
        f(AuxParams)
    } 

    useEffect(()=>{
        setSpinner(true)
        GetCountry({params: params})
        .then((countries) => { 
            if(countries.length > 0){
                setCountries(countries);
            }else{
                setShow(true)
                setMessage('Data not found, try later')
            }
            setSpinner(false)
        })
    },[params])

    return (
        <>
          
            <form onSubmit={handleConsult} className="d-flex flex-row justify-content-center m-3">
                <div className="col-3">
                    <input
                        type="text" 
                        placeholder="Search Country..."
                        name="name" 
                        className="form-control"
                        onChange={event => handleChange(event)}
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-md ms-2">Buscar</button>
            </form>
            {show &&
                <CustomAlert errorvalue={true} msg={message}/>
            }
        </>
    )
}

export default FormCountry