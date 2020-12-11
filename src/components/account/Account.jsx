import './Account.scss';
import {useState} from 'react';

const Account = props => {

    const [disable, setDisable] = useState(true);

    const toggleDisable = () => {setDisable(!disable);}

    return (
        <>
            <header className='account' data-test='Account-header'>
                <h1>Account Setting</h1>
            </header>
            <section className='account' data-test='Account-info'>
                <fieldset className='account-info'>
                    <legend>Information</legend>
                    <form action="">
                        <div className="info-field-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value="sample@gmail.com" disabled={disable}/>
                        </div>
                        <div className="info-field-group">
                            <label htmlFor="account">Account</label>
                            <input type="text" name="account" id="account" value="34839362" disabled/>
                        </div>
                        <div className="info-field-group">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" name="firstname" id="firstname" value="Joe" disabled={disable}/>
                        </div>
                        <div className="info-field-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name="lastname" id="lastname" value="Divade" disabled={disable}/>
                        </div>
                        <div className="info-field-group">
                            <label htmlFor="date">Create Date</label>
                            <input type="text" name="date" id="date" value="2020-11-10" disabled/>
                        </div>
                        <div className="info-field-group">
                            <label htmlFor="apt">Apartment</label>
                            <input type="text" name="apt" id="apt" value="402" disabled/>
                        </div>
                        <div className="info-field-group-lg">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" id="address" value="4450 Rue Saint Fanc, Montreal, Quebec, Canada H2K 2C0" disabled/>
                        </div>
                        <div className="info-button-group">
                            <button onClick={toggleDisable} disabled={!disable}>Edit</button>
                            <button onClick={toggleDisable} disabled={disable}>Save</button>
                        </div>
                    </form>
                </fieldset>
            </section>
            <section className='account' data-test='Account-danger'>
                <fieldset className='account-danger'>
                    <legend>Danger Zone</legend>
                    <p><b>Delete this account</b></p>
                    <p>Once you delete your account, there is no going back. Please be certain.</p>
                    <div>
                        <button>Delete Account</button>
                    </div>
                </fieldset>
            </section>
        </>
    );
}

export default Account;