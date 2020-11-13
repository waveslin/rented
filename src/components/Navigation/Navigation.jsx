import './Navigation.css';
import {Link} from'react-router-dom';
import {useVisibility, useVisibilityUpdate, useVisibilityReset} from '../context/Visibility.jsx'

const Navigation = ()=> {

    const toggle = useVisibility();
    const setToggle = useVisibilityUpdate();
    const resetToggle = useVisibilityReset();
    // className={`nav-logo${toggle ? '':' menu-logo'}`}
    return (
        <>
            <nav>
                <div className='nav-logo'>
                    <Link to='/' onClick={resetToggle}>
                        <img src="rented-logo.png" alt=""/>
                    </Link>
                </div>

               <button className={`nav-toggle toggle-icon sm-menu${toggle? '': ' hide'}`} id="toggle_icon" data-menu="menu" onClick={setToggle}>
                    <i className="fas fa-bars"></i>
               </button>

                <button className={`menu-exit toggle-icon${toggle ? ' hide' : ' show'}`} onClick={setToggle}>
                    <i className="fas fa-times-circle"></i>
                </button>
                <ul className={`nav-list${toggle ? ' hide' : ' show'}`} id="menu">
                    <li><Link to='/' onClick={resetToggle}>Home</Link></li>
                    <li><Link to='/contact' onClick={resetToggle}>Contact</Link></li>
                    <li><Link to='/signup' onClick={resetToggle}>Sign up</Link></li>
                    <li><Link to='/login' onClick={resetToggle}>Log in</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;