import axios from 'axios';


export const ACTIONS = {
    LOGIN : "log_in"
}

async function httpLogin(link, body){
    const result = await axios.post(link,
    {
        email:body.email,
        password: body.password
    }, {
        headers: {
            "Content-Type" : "application/json"
        }
    })
    return result;
}

export function authReducer(auth, action){
    switch (action.type) {
        case ACTIONS.LOGIN:
            const result = httpLogin('https://rented.netlify.app/.netlify/functions/login', action.payload);
            console.log(result)
            // console.log(action.payload);
            return result;
        default:
            break;
    }
}