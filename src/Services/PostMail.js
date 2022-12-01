const method = "POST"
const URL = 'https://formspree.io/f/xbjbvdrq'


function SendMail({formdata}){
    
    return fetch(URL, {
        method: method,
        body: formdata,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
          return response

      }).catch(error => {
        return error
      });
    
}

export default SendMail