import './Payment.scss';
import {useState} from 'react';

const Payment = props => {

    const card = useState({last_4_digit : 4893, card_holder: 'Joe Divade'});
    // const card = useState(null);

    const payment_method = props =>{
        if(props === null){
            return (
                <>
                    <div className="payment-form">
                        <form action="">
                            <input type="text" name="holder" placeholder="Card Holder"/>
                            <input type="text" name="number" placeholder="Card Number"/>
                            <input type="text" name="date" placeholder="Expire Date"/>
                            <input type="text" name="cvv" placeholder="CVV"/>
                            <button>SAVE</button>
                        </form>
                    </div>
                </>
            );
        }
        return (
            <>
                <div className="payment-card">
                    <p>Card Holder: <span>Xuan Li</span></p>
                    <p>Last 4 digit: <span>1500</span></p>
                    <button>DELETE CARD</button>
                </div>
            </>
        );
    }

    return (
        <>
            <header className="payment" data-test='Payment-header'>
                <h1>Payment</h1>
            </header>
            <section className="payment" data-test='Payment-pay'>
                <div className="payment-inquiry">
                    <div className="make-payment">
                        <p>Rented Account: <span>34839362</span></p>
                        <p>Your bill total: <span>$1500</span></p>
                    </div>
                    <div className="make-payment">
                        <button>PAY NOW</button>
                    </div>
                </div>
            </section>
            <section className="payment" data-test='Payment-method'>
                <h1>Payment method</h1>
                <div className="payment-method">
                    { payment_method(card[0])}
                </div>
            </section>
        </>
    );
}

export default Payment;