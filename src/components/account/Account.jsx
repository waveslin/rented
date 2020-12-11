import './Account.scss';
import {useState} from 'react';

const Account = props => {

    props = {
        email: "sample@gmail.com",
        account: 34839362,
        firstname: "Joe",
        lastname: "Divade",
        date: "2020-11-10",
        apt: 402,
        address: "4450 Rue Saint Fanc, Montreal, Quebec, Canada H2K 2C0"
    }

    const [disable, setDisable] = useState(true);
    const toggleDisable = () => {setDisable(!disable);}

    const [email, setEmail] = useState(props.email);
    const [firstname, setFirstname] = useState(props.firstname);
    const [lastname, setLastname] = useState(props.lastname);

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
                            <input type="email" name="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} disabled={disable}/>
                        </div>
                        <div className="info-field-group">
                            <label htmlFor="account">Account</label>
                            <input type="text" name="account" id="account" value={props.account} disabled/>
                        </div>
                        <div className="info-field-group">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" name="firstname" id="firstname" value={firstname} onChange={e=>setFirstname(e.target.value)} disabled={disable}/>
                        </div>
                        <div className="info-field-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name="lastname" id="lastname" value={lastname} onChange={e=>setLastname(e.target.value)} disabled={disable}/>
                        </div>
                        <div className="info-field-group">
                            <label htmlFor="date">Create Date</label>
                            <input type="text" name="date" id="date" value={props.date} disabled/>
                        </div>
                        <div className="info-field-group">
                            <label htmlFor="apt">Apartment</label>
                            <input type="text" name="apt" id="apt" value={props.apt} disabled/>
                        </div>
                        <div className="info-field-group-lg">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" id="address" value={props.address} disabled/>
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