// Servicio para obtener todas las ligas 

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '94ed01be6emshec6176ce6eab864p1bc948jsn78a91a05bbdd',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};
const URL = 'https://api-football-v1.p.rapidapi.com/v3/leagues?'

const GetLeague =({params = {}}= {})=>{
    const arrayParams = Object.entries(params);

    const Params_request = arrayParams.filter( q => q[1]!== null && q[1] !== "");

    const params_filter = Object.fromEntries(Params_request);

    // Genero la URL con los filtros a buscar.
    let URLUpdate = URL + new URLSearchParams(params_filter);
    return fetch(URLUpdate, options)
        .then(res => res.json())
        .then(data => {
            const {response = []} = data
            return response
        })
}

export default GetLeague