import './Payment.scss';
import {useState} from 'react';

const Payment = ({cardHolder, last4digit}) => {

    cardHolder = 'Joe Divade'; last4digit = 4839;

    const [holder, setHolder] = useState("");
    const [number, setNumber] = useState("");
    const [expire, setExpire] = useState("");
    const [cvv, setCvv] = useState("");

    const payment_method = (cardHolder, last4digit) =>{
        if(cardHolder === undefined  || last4digit === undefined || cardHolder === null || last4digit === null){
            return (
                <div className="payment-form">
                    <form action="">
                        <input type="text" name="holder" placeholder="Card Holder" value={holder} onChange={e=>setHolder(e.target.value)} />
                        <input type="text" name="number" placeholder="Card Number" value={number} onChange={e=>setNumber(e.target.value)} />
                        <input type="text" name="expire" placeholder="Expire Date" value={expire} onChange={e=>setExpire(e.target.value)} />
                        <input type="text" name="cvv" placeholder="CVV" value={cvv} onChange={e=>setCvv(e.target.value)} />
                        <button>SAVE</button>
                    </form>
                </div>
            );
        }
        return (
            <div className="payment-card">
                <p>Card Holder: <span>{cardHolder}</span></p>
                <p>Last 4 digit: <span>{last4digit}</span></p>
                <button>DELETE CARD</button>
            </div>
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
                    { payment_method(cardHolder, last4digit)}
                </div>
            </section>
        </>
    );
}

export default Payment;