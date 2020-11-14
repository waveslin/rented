import './Login.css';
import {useVisibility} from '../context/Visibility.jsx';

const Login = ()=>{

    const hide = useVisibility();
    return (
        <>
        <header className="login" data-test='Login-header'>
            <h1><i className="fas fa-sign-in-alt"></i> Log In</h1>
            <p>Welcome Back</p>
        </header>
        <section className="login">
            <form action="" data-test='Login-form'>
                <div className={`login-input${(hide)? '': ' hide-input'}`}>
                    <input type="email" name="email" id="email"  placeholder="E-mail" data-test='Login-input-email'/>
                    <label htmlFor="email">E-mail</label>
                </div>
                <div className={`login-input${(hide) ? '': ' hide-input'}`}>
                    <input type="password" name="password" id="password"  placeholder="Password" data-test='Login-input-password'/>
                    <label htmlFor="password">Password</label>
                </div>
                <button data-test='Login-login-button'>Log In</button>
            </form>
        </section>
        </>
    );
}

export default Login;