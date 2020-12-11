import './Signup.scss';
import {useState, useEffect} from 'react';

const Signup = () =>{

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postal, setPostal] = useState("");
    const [apt, setApt] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [dismatch, setDismatch] = useState(false);

    useEffect(()=>{
        if(password !== password2)
            setDismatch(true);
        if(password === password2)
            setDismatch(false);
    }, [password, password2]);

    return (
        <>
        <header className="signup" data-test='Signup-header'>
            <h1><i className="fas fa-user-plus"></i> Sign Up</h1>
        </header>
        <section className="signup">
            <form action="" data-test='Signup-form'>
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
                <div className='signup-input'>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address"  placeholder="Address"  value={address} onChange={e => setAddress(e.target.value)} />
                </div>
                <div className="signup-combine">
                    <div className='signup-combine-input'>
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" id="city"  placeholder="City"  value={city} onChange={e => setCity(e.target.value)} />
                    </div>
                    <div className='signup-combine-input'>
                        <label htmlFor="province">Province</label>
                        <select name="province" id="province"  value={province} onChange={e => setProvince(e.target.value)} >
                            <option value="/"> </option>
                            <option value="BC">BC</option>
                            <option value="ON">ON</option>
                            <option value="QC">QC</option>
                        </select>
                    </div>
                    <div className='signup-combine-input'>
                        <label htmlFor="postal">Postal</label>
                        <input type="text" name="postal" id="postal"  placeholder="Postal" value={postal} onChange={e => setPostal(e.target.value)} />
                    </div>
                    <div className='signup-combine-input'>
                        <label htmlFor="apt">Apt</label>
                        <input type="text" name="apt" id="apt"  placeholder="#Apt" value={apt} onChange={e => setApt(e.target.value)} />
                    </div>
                </div>
                <div className='signup-input'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"  placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className='signup-input'>
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type="password" name="confirm_password" class={dismatch ? 'dismatch-password' : ''} id="confirm_password"  placeholder="confirm_Password" value={password2} onChange={e => setPassword2(e.target.value)} />
                </div>
                <button>Sign up</button>
            </form>
        </section>
        </>
    );
}

export default Signup;