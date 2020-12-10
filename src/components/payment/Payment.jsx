import './Payment.scss';
import {useState} from 'react';

const Payment = props => {

    const card = useState({last_4_digit : 4893, card_holder: 'Joe Divade'});

    const payment_method = props =>{
        if(props === null){
            return (
                <>
                    <div>please add a payment method</div>
                </>
            );
        }
        return (
            <>
            <div>{props.last_4_digit}</div>
            <div>{props.card_holder}</div>
            </>
        );
    }

    return (
        <>
            <header className="payment" data-test='Payment-header'>
                <h1>Payment</h1>
            </header>
            <section className="payment" data-test='Payment-pay'>
                <div>
                    <p className="payment-account">Rented Account: <span className="account-number">34839362</span></p>
                    <p className="payment-bill">Your bill total: <span className="bill-number">$1500</span></p>
                </div>
                <div>
                    <button>Pay Now</button>
                </div>
            </section>
            <section className="payment-method" data-test='Payment-method'>
               { payment_method(card[0])}
            </section>
        </>
    );
}

export default Payment;