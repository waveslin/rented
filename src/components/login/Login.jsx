import './Login.css';
import {useVisibility} from '../context/Visibility.jsx';

const Login = ()=>{

    const hide = useVisibility();
    return (
        <>
        <header className="login">
            <h1><i className="fas fa-sign-in-alt"></i> Log In</h1>
            <p>Welcome Back</p>
        </header>
        <section className="login">
            <form action="">
                <div className={`login-input${(hide)? '': ' hide-input'}`}>
                    <input type="email" name="email" id="email"  placeholder="E-mail"/>
                    <label htmlFor="email">E-mail</label>
                </div>
                <div className={`login-input${(hide) ? '': ' hide-input'}`}>
                    <input type="password" name="password" id="password"  placeholder="Password"/>
                    <label htmlFor="password">Password</label>
                </div>
                <button>Log In</button>
            </form>
        </section>
        </>
    );
}

export default Login;