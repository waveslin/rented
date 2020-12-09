import './Signup.scss';


const Signup = ()=>{

    return (
        <>
        <header className="signup" data-test='Signup-header'>
            <h1><i className="fas fa-user-plus"></i> Sign Up</h1>
        </header>
        <section className="signup">
            <form action="" data-test='Signup-form'>
                <div className='signup-input'>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" id="firstname"  placeholder="First Name"/>
                </div>
                <div className='signup-input'>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" id="lastname"  placeholder="Last Name"/>
                </div>
                <div className='signup-input'>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email"  placeholder="E-mail"/>
                </div>
                <div className='signup-input'>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address"  placeholder="Address"/>
                </div>
                <div className="signup-combine">
                    <div className='signup-combine-input'>
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" id="city"  placeholder="City"/>
                    </div>
                    <div className='signup-combine-input'>
                        <label htmlFor="province">Province</label>
                        <select name="province" id="province">
                            <option value="/"> </option>
                            <option value="AB">AB</option>
                            <option value="BC">BC</option>
                            <option value="MB">MB</option>
                            <option value="NB">NB</option>
                            <option value="NL">NL</option>
                            <option value="NS">NS</option>
                            <option value="ON">ON</option>
                            <option value="PE">PE</option>
                            <option value="QC">QC</option>
                            <option value="SK">SK</option>
                        </select>
                    </div>
                    <div className='signup-combine-input'>
                        <label htmlFor="postal">Postal</label>
                        <input type="text" name="postal" id="postal"  placeholder="Postal"/>
                    </div>
                    <div className='signup-combine-input'>
                        <label htmlFor="apt">Apt</label>
                        <input type="text" name="apt" id="apt"  placeholder="#Apt"/>
                    </div>
                </div>
                <div className='signup-input'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"  placeholder="Password"/>
                </div>
                <div className='signup-input'>
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type="password" name="confirm_password" id="confirm_password"  placeholder="confirm_Password"/>
                </div>
                <button>Sign up</button>
            </form>
        </section>
        </>
    );
}

export default Signup;