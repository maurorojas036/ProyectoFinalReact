
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '94ed01be6emshec6176ce6eab864p1bc948jsn78a91a05bbdd',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};
const URL = 'https://api-football-v1.p.rapidapi.com/v3/teams?'

const GetTeams = async ({params}) =>{
    const auxArray = Object.entries(params);

    const auxParms = auxArray.filter(q => q[1] !== null && q[1] !== '');

    const paramsQuery = Object.fromEntries(auxParms);

    let URLUpdate = URL + new URLSearchParams(paramsQuery);

    return await fetch(URLUpdate, options)
	.then(res => res.json())
	.then(data => {
        const {response = []} = data
        if(Array.isArray(response)){
            return response
        }
        return []
    })
	.catch(err => console.error(err));
}

export default GetTeams