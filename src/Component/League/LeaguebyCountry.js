import React , {useEffect, useState} from "react";
import GetLeague from "../../Services/GetLeague";
import ListOfLeague from "../League/ListOfLeague";
import CustomAlert from "../Alert/Alert";
  
  const LeaguebyCountry = ({country})=>{
    
    const [spinner, setSpinner] = useState();
    const [countryResponse, setCountryResponse]= useState();
    const [leagues, setLeagues] = useState()
    const [params, setParams] = useState({country});

     // Genero dos estados para mostrar mensaje de error en caso que no se pueda cargar datos
     const [show, setShow] = useState(false)
     const [message, setMessage] = useState('')

    useEffect(() =>{
          setSpinner(true)
            // setParams({...params, country:country})
            GetLeague({params}).then(res => {
              if(res.length > 0){
                let arrayResponse = []
                res.forEach(data => {
                  arrayResponse.push(data);
                });
              setLeagues(arrayResponse)
            }else{
              setShow(true)
              setMessage('Data not found, try later')
            }
            setCountryResponse(res[0].country)
            setSpinner(false)
          })
    },[])



    return(
        <>
          {show &&
            <CustomAlert errorvalue={true} msg={message}/>
          }
          <ListOfLeague leagues={leagues} spinner={spinner} countryResponse={countryResponse} />
        </>
    )
  }

  export default LeaguebyCountry