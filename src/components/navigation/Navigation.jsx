import './Navigation.scss';
import {useState} from 'react';
import {Link} from'react-router-dom';
import {useVisibility, useVisibilityUpdate, useVisibilityReset} from '../context/Visibility.jsx'

const Navigation = () => {

    const toggle = useVisibility();
    const setToggle = useVisibilityUpdate();
    const resetToggle = useVisibilityReset();

    const [auth, setAuth] = useState(true);
    const resetAuth = () => { setAuth(false); resetToggle();}
   
    const links = (props) =>{
        if(props){
            return (
                <>
                    <li><Link to='/dashboard' onClick={resetToggle}>Dashboard</Link></li>
                    <li><Link to='/payment' onClick={resetToggle}>Payment</Link></li>
                    <li><Link to='/account' onClick={resetToggle}>Account</Link></li>
                    <li><Link to='/' onClick={resetAuth} >Log out</Link></li>
                </>
            );
        }
        return (
            <>
                <li><Link to='/' onClick={resetToggle}>Home</Link></li>
                <li><Link to='/contact' onClick={resetToggle}>Contact</Link></li>
                <li><Link to='/signup' onClick={resetToggle}>Sign up</Link></li>
                <li><Link to='/login' onClick={resetToggle}>Log in</Link></li>
            </>
        );
    }

    return (
        <nav data-test='Navigation-nav'>
            <section className="nav-content">
                <div className='nav-logo' data-test='logo-img'>
                    <Link to='/' onClick={resetToggle}>
                        <img src="rented-logo.png" alt=""/>
                    </Link>
                </div>

                <button className={`nav-toggle toggle-icon sm-menu${toggle? '': ' hide'}`} id="toggle_icon" data-menu="menu" onClick={setToggle} data-test='Navigation-menu-toggle'>
                    <i className="fas fa-bars"></i>
                </button>

                <button className={`menu-exit toggle-icon${toggle ? ' hide' : ' show'}`} onClick={setToggle} data-test='Navigation-menu-close'>
                    <i className="fas fa-times-circle"></i>
                </button>
                <ul className={`nav-list${toggle ? ' hide' : ' show'}`} id="menu" data-test='Navigation-link-list'>
                    {links(auth)}
                </ul>
            </section>
        </nav>
    );
}

export default Navigation;