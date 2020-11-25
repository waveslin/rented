import './Payment.css';
import {useState} from 'react';

const Payment = (props) => {

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
            <header data-test='Payment-header'>
                <h1>Payment</h1>
            </header>
            <section data-test='Payment-method'>
               { payment_method(card[0])}
            </section>
        </>
    );
}

export default Payment;