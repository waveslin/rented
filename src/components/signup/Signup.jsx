import './Signup.scss';
import axios from 'axios';
import URLS from '../../util/urls';
import { useHistory } from "react-router-dom";
import {useAuthUpdate} from '../context/Auth';
import {useState, useEffect} from 'react';

const Signup = () =>{

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [apt, setApt] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [dismatch, setDismatch] = useState(false);

    const authUpdate = useAuthUpdate();

    let history = useHistory();

    useEffect(()=>{
        if(password !== password2)
            setDismatch(true);
        if(password === password2)
            setDismatch(false);
    }, [password, password2]);

    
    const SignupHandle = e => {
        e.preventDefault();
        (async ()=>{
            const res = await axios({
                    method: 'post',
                    url: URLS.SIGNUP,
                    data: {
                        firstname, 
                        lastname, 
                        email, 
                        password, 
                        address, 
                        apt
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
        <header className="signup" data-test='Signup-header'>
            <h1><i className="fas fa-user-plus"></i> Sign Up</h1>
        </header>
        <section className="signup">
            <form action="" data-test='Signup-form'  onSubmit={SignupHandle}>
                <div className='signup-input'>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" id="firstname"  placeholder="First Name"  value={firstname} onChange={e => setFirstname(e.target.value)} />
                </div>
                <div className='signup-input'>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" id="lastname"  placeholder="Last Name"  value={lastname} onChange={e => setLastname(e.target.value)} />
                </div>
                <div className='signup-input'>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email"  placeholder="E-mail"  value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="signup-combine">
                    <div className='signup-combine-input'>
                    <label htmlFor="address">Address</label>
                        <select type="text" name="address" id="address"  placeholder="Address"  value={address} onChange={e => setAddress(e.target.value)} >
                            <option value="/"> </option>
                            <option value="3300, Rue Saint Verdun, Montreal, Quebec, H3H 2L9">3300 Rue Saint Verdun, Montreal, Quebec, H3H 2L9</option>
                            <option value="1705, Foxing Street, Vancouver, British Columbia, V5K 2B8">1705 Foxing Street, Vancouver, British Columbia, V5K 2B8</option>
                            <option value="1705, Purplian Street, Toronto, Ontario, M4Y 1U6">1705 Purplian Street, Toronto, Ontario, M4Y 1U6</option>
                            <option value="2680, Rue Saint Castionue, Montreal, Quebec, H5I 0A7">2680 Rue Saint Castionue, Montreal, Quebec, H5I 0A7</option>
                            <option value="5600, Rosean Street, Vancouver, British Columbia, V4P 9N5">5600 Rosean Street, Vancouver, British Columbia, V4P 9N5</option>
                            <option value="1280, Natarue Street, Vancouver, British Columbia, V4M 8G8">1280 Natarue Street, Vancouver, British Columbia, V4M 8G8</option>
                        </select>
                    </div>
                    <div className='signup-combine-input'>
                        <label htmlFor="apt">Apt</label>
                        <input type="text" name="apt" id="apt"  placeholder="#Apt" value={apt} onChange={e => setApt(e.target.value)} />
                    </div>
                </div>
                <div className='signup-input'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"  placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} autoComplete='on'/>
                </div>
                <div className='signup-input'>
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type="password" name="confirm_password" className={dismatch ? 'dismatch-password' : ''} id="confirm_password"  placeholder="Confirm Password" value={password2} onChange={e => setPassword2(e.target.value)} autoComplete='off'/>
                </div>
                <button>Sign up</button>
            </form>
        </section>
        </>
    );
}

export default Signup;