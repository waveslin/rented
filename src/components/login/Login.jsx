import {useState} from 'react';
import './Login.scss';
import {useVisibility} from '../context/Visibility.jsx';
import {ACTIONS} from '../reduce/useAuth';

const Login = ({authDispatch}) =>{

    const hide = useVisibility();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginHandle = e => {
        e.preventDefault();
        console.log(email, password);
        authDispatch({ type: ACTIONS.LOGIN , payload: {email, password}})
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
                    <input type="password" name="password" id="password"  placeholder="Password" data-test='Login-input-password' value={password} onChange={e => setPassword(e.target.value)} />
                    <label htmlFor="password">Password</label>
                </div>
                <button data-test='Login-login-button'>Log In</button>
            </form>
        </section>
        </>
    );
}

export default Login;