import React, { useEffect, useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import GetCountry from "../../Services/GetCountry";
import GetLeague from "../../Services/GetLeague";
import CustomAlert from "../Alert/Alert";

// En este componente se realiza la busqueda de las ligas dependiendo la busqueda realizada
function FormLeague({setLeagues,setSpinner}){

    const [params, setParams] = useState([]);

    // Estados para las cargas de los sected
    const [selectedCountry, setSelectedCountry] = useState([]);
    const [selectedLeague, setSelectedLeague] = useState([]);
    const [selectedSeason, setSelectedSeason] = useState([]);

    // Estados para guardar la seleccion
    const [country, setCountry] = useState('');
    const [league, setLeague] = useState('');
    const [season, setSeason]= useState('');

    //Spinner mientras se cargan los valores del select
    const [spinner, setSpinnerCarga]= useState(true)
    
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(()=>{
        // llamo al servicio para obtener los paises, cargarlos en el select y setear las demas opciones que se encuentran en el select
        GetCountry().then(res => {
            if(res.length >= 0){
                let country = [];
                res.map( c =>{
                    country.push(c)
                })
                setSelectedCountry(country)
                setCountry(country[0].name)
            }
        })
        setSpinner(true)
        // llamo al servicio para cargar las ligas cuando se inicia por primera vez
        GetLeague().then(res => {
            if(res.length > 0){
                setLeagues(res)
            }else{
                setShow(true)
                setMessage('Data not found, try later')
            }
            setSpinner(false)
        })
    },[])

    // useEffect para buscar las ligas que se encuentran en ese país
    useEffect(()=>{
        if(country.length > 0 ){
            // realizo la llamada al servicio
            GetLeague({params : {country}}).then(res => {
                if(res.length > 0){
                    let data =[];
                    res.map(r => 
                        data.push(r)    
                    )
                    setSelectedLeague(data)
                    setLeague(res[0].league.name)
                    setSeason(res[0].seasons[0].year)
                    setSelectedSeason(res[0].seasons)
                }else{
                    setShow(true)
                    setMessage('Data not found, try later')
                }
            })
            setSpinnerCarga(false)
        }
        
    },[country])

    const handleCountry = event=>{
        setCountry(event.target.value)
    }
    const handleLeague = event =>{
        setLeague(event.target.value)
        let seasonAux = selectedLeague.filter((e) => e.league.name === event.target.value)
        setSelectedSeason(seasonAux[0].seasons)
    }
    const handleSeason = event => {
        setSeason(event.target.value)
    }
    const handleFind = (e)=>{
        e.preventDefault();
        setParams({...params, name:league , country:country, season:season })
    }

    useEffect(() =>{
        if(params.length != 0){
            setSpinner(true)
            GetLeague({params}).then(res => {
                if(res.length > 0){
                let arrayResponse = []
                res.forEach(data => {
                    arrayResponse.push(data);
                });
                setLeagues(arrayResponse)
                }
                else{
                    setShow(true)
                    setMessage('Data not found, try later')
                }
                setSpinner(false)
            })
        }
    },[params])


    return(
        <>
            <div className="container-fluid">

            <Form className="d-flex d-row justify-content-start align-items-baseline" onSubmit={handleFind}>
                <Form.Select onChange={handleCountry} className="m-2">
                    {
                        selectedCountry.map((x) =>
                            <option key={x.code+x.name} value={x.name} >{x.name}</option>
                        )
                    }
                </Form.Select>
                <Form.Select onChange={handleLeague} className="m-2" disabled={spinner}>
                    {
                        selectedLeague.map(({league}) =>
                            <option key={league.id} value={league.name} >{league.name}</option>
                        )
                    }
                </Form.Select>
                <Form.Select onChange={handleSeason} className="m-2" disabled={spinner}>
                    {
                        selectedSeason.map((x) =>
                            <option key={x.year}  value={x.year} >{x.year}</option>
                        )
                    }
                </Form.Select>
                <Button type='submit' >Buscar </Button>
            </Form>
            {show &&
                <CustomAlert errorvalue={true} msg={message}/>
            }
            </div>
        </>
    )
}

export default FormLeague