import './Signup.css';
import {useVisibility} from '../context/Visibility.jsx'

const Signup = ()=>{

    const hide = useVisibility();

    return (
        <>
        <header className="signup" data-test='Signup-header'>
            <h1><i className="fas fa-sign-in-alt"></i> Sign Up</h1>
        </header>
        <section className="signup">
            <form action="" data-test='Signup-form'>
                <div className={`login-input${hide ? '': ' hide-input'}`}>
                    <input type="email" name="email" id="email"  placeholder="E-mail"/>
                    <label htmlFor="email">E-mail</label>
                </div>
                <div className={`login-input${hide ? '': ' hide-input'}`}>
                    <input type="password" name="password" id="password"  placeholder="Password"/>
                    <label htmlFor="password">Password</label>
                </div>
                <button>Log In</button>
            </form>
        </section>
        </>
    );
}

export default Signup;