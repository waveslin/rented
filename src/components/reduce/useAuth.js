import axios from 'axios';


export const ACTIONS = {
    LOGIN : "log_in"
}

async function httpLogin(link, body){
    let data = await axios.post(link,
    {
        email:body.email,
        password: body.password
    }, {
        headers: {
            "Content-Type" : "application/json",
        }
    })
    return data;
}

export async function authReducer(auth, action){
    switch (action.type) {
        case ACTIONS.LOGIN:
            const data = await httpLogin('https://rented.netlify.app/.netlify/functions/login', action.payload);
            console.log('result',data)
            //  console.log(action.payload);
            return data;
        default:
            break;
    }
}