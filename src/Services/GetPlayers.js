
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '94ed01be6emshec6176ce6eab864p1bc948jsn78a91a05bbdd',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

const URL = 'https://api-football-v1.p.rapidapi.com/v3/players?'
// Servicio que va traer los jugadores que integran el equipo
const GetPlayers = async({params}) =>{
    const arrayParams = Object.entries(params)

    // genero un array con los parametros que se cargaron 
    const paramsNotEmpty = arrayParams.filter((q) => q[1]!== null && q[1]!== '');

    const paramsQuery = Object.fromEntries(paramsNotEmpty)

    const URLUpdate = URL + new URLSearchParams(paramsQuery)
    return await fetch(URLUpdate, options)
	    .then(res => res.json())
	    .then(data => {
            if(data.results > 0){
                const {response = []} = data
                return response
            }
            return []
        })
	    .catch(err => {
            console.error(err)
            return err 
        })
}

export default GetPlayers