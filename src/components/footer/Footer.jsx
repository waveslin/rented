import './Footer.css';
import {useVisibility} from '../context/Visibility.jsx'


const Footer = ()=>{

    const toggle = useVisibility();

    return (
        <footer className={`${toggle ? '' : 'footer-hide'}`}>
            <div className="footer-section" id="footer" data-test='Footer-footer'>
                <div>
                    <i className="fab fa-cc-visa" data-test='payment-icon'></i>
                    <i className="fab fa-cc-mastercard"  data-test='payment-icon'></i>
                    <i className="fab fa-cc-amex"  data-test='payment-icon'></i>
                    <i className="fab fa-cc-paypal"  data-test='payment-icon'></i>
                </div>
                <p>
                    © 2020 Rented All Rights Reserved <a href="#footer">Terms of use</a> | <a href="#footer"> Privacy Policy</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;