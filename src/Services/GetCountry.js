
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '94ed01be6emshec6176ce6eab864p1bc948jsn78a91a05bbdd',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    let URL= 'https://api-football-v1.p.rapidapi.com/v3/countries?'

export default function GetCountry({params = {}} = {}){

    let con = Object.entries(params);
    let conMod = con.filter(p => p[1]!== null && p[1] !==  "");
    const param_filter = Object.fromEntries(conMod);
    let URLUpdate = URL + new URLSearchParams(param_filter);

    return fetch(URLUpdate , options)
	.then(res => res.json())
	.then(data => {
            const {response = []} = data
            if(Array.isArray(response)){
                return response.filter(({name}) => name !== 'World')
            }
            return []
        }
    )
	.catch(err => {
        return err
    });
}