import axios from 'axios';


const LINK = 'https://rented.netlify.app/.netlify/functions/';

const API = {
    LOGIN : `${LINK}login`
}

export const ACTIONS = {
    LOGIN : 'login'
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
            const data = await httpLogin(API.LOGIN, action.payload);
            console.log('result',data)
            return data;
        default:
            break;
    }
}