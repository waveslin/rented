const jwt = require('jsonwebtoken');

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  };

export function handler(event, context, callback) {
    let msg = '';
    let token = null;
    // crypto.createHash('sha256').update(pwd).digest('hex');

    const state = {email: "Sample@gmail.com", password: "12345gg", account: 34839362};
    const {email, password} = JSON.parse(event.body); 
    const login = (state.email === email && state.password === password) ? true : false;

    if(event.httpMethod === 'POST' && login){
        token = jwt.sign({account:state.account, email: state.email}, 'Rented-Secret-Signature', { expiresIn: 60 * 60 });
        msg = 'Yay! You have log in.';
        return callback(null, {
            statusCode: 200,
            headers,
            body: JSON.stringify({ msg, login, token})
        });
    }else{
        msg = 'Log in Fail!!!';
        return callback(null, {
            statusCode: 400,
            body: JSON.stringify({msg, login,token})
        });
    }   
  }
  