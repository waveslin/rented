import './Account.css';

const Account = (props) => {
    return (
        <>
            <header className='account-header' data-test='Account-header'>
                <h1>Account Setting</h1>
            </header>
            <section className='account-info' data-test='Account-info'>
                <fieldset className='account-info-field'>
                    <legend>Account Information</legend>
                    <form action="">
                        <div className="info-field-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" name="email" id="email" value="sample@gmail.com" disabled/>
                        </div>
                        <div className="info-field-group">
                            <label htmlFor="account">Rented Account</label>
                            <input type="text" name="account" id="account" value="34839362" disabled/>
                        </div>
                        <div className="info-field-group">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" name="firstname" id="firstname" value="Joe" disabled/>
                        </div>
                        <div className="info-field-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name="lastname" id="lastname" value="Divade" disabled/>
                        </div>
                        <div className="info-field-group">
                            <label htmlFor="date">Create Date</label>
                            <input type="text" name="date" id="date" value="2020-11-10" disabled/>
                        </div>
                        <div className="info-field-group">
                            <label htmlFor="apt">Apartment Number</label>
                            <input type="text" name="apt" id="apt" value="402" disabled/>
                        </div>
                        <div className="info-field-group-lg">
                            <label htmlFor="address">Apartment Address</label>
                            <input type="text" name="address" id="address" value="4450 Rue Saint Fanc, Montreal, Quebec, Canada H2K 2C0" disabled/>
                        </div>
                        <button>Edit</button>
                    </form>
                </fieldset>
            </section>
            <section data-test='Account-danger'>
                <fieldset>
                    <legend>Danger Zone</legend>
                    <p>Once you delete your account, there is no going back. Please be certain.</p>
                    <button>Delete Account</button>
                </fieldset>
            </section>
        </>
    );
}

export default Account;