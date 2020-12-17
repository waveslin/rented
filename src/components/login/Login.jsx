import {useState, useEffect} from 'react';
import './Login.scss';
import {useVisibility} from '../context/Visibility.jsx';
import axios from 'axios';

const Login = ({authDispatch}) =>{
   

    const hide = useVisibility();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [thing, setThing] = useState("");

    const LoginHandle = e => {
        e.preventDefault();
    }

    useEffect(() => {
        (async ()=>{
            axios.get("http://localhost:4500/").then(res=>{
                setThing(res.data.msg);
            })
        })()
    }, [])

    return (
        <>
        <header className="login" data-test='Login-header'>
            <h1><i className="fas fa-sign-in-alt"></i> Log In</h1>
            <p>Welcome Back: {thing}</p>
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