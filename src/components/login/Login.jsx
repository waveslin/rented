import './Login.scss';
import axios from 'axios';
import URLS from '../../util/urls';
import {useState} from 'react';
import { useHistory } from "react-router-dom";
import {useAuthUpdate} from '../context/Auth';
import {useVisibility} from '../context/Visibility.jsx';



const Login = () =>{

    const hide = useVisibility();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const authUpdate = useAuthUpdate()

    let history = useHistory();

    const LoginHandle = e => {
        e.preventDefault();
        (async ()=>{
            const res = await axios({
                    method: 'post',
                    url: URLS.LOGIN,
                    data: {
                        email,
                        password
                    },
                    headers: {'Content-Type': 'application/json'}
                });
            const login = res.data.login;
            const token = res.data.token;
            const rented_account = res.data.rented_account;
           authUpdate({login, token, rented_account});
           if(login)
            {
                history.push("/dashboard");
            }
        })()
    }

    return (
        <>
        <header className="login" data-test='Login-header'>
            <h1><i className="fas fa-sign-in-alt"></i> Log In</h1>
            <p>Welcome Back</p>
        </header>
        <section className="login">
            <form action="" data-test='Login-form' onSubmit={LoginHandle}>
                <div className={`login-input${(hide)? '': ' hide-input'}`}>
                    <input type="email" name="email" id="email"  placeholder="E-mail" data-test='Login-input-email' value={email} onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="email">E-mail</label>
                </div>
                <div className={`login-input${(hide) ? '': ' hide-input'}`}>
                    <input type="password" name="password" id="password"  placeholder="Password" data-test='Login-input-password' value={password} onChange={e => setPassword(e.target.value)} autoComplete='on'/>
                    <label htmlFor="password">Password</label>
                </div>
                <button data-test='Login-login-button' type="submit">Log In</button>
            </form>
        </section>
        </>
    );
}

export default Login;