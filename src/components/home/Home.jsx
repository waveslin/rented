import './Home.css';
import {Link} from 'react-router-dom';


const Home = ()=>{
    const arr = [1,2,3,4,5,6];
    const cards = arr.map((num, index) =>{
        return (
        <article className="card" key={index} data-test='building-property'>
            <Link to='#look'>
                <div className="card-img" >
                    <img src={`images/buildings/${'dushane-white-3lo_lkdeOBE-unsplash.jpg'}`} alt=""/>
                </div>
                <div className="card-body">

                </div>
            </Link>
        </article>);
    });

    return (
        <>
            <header data-test='home-header'>
                <div className="hero">
                    <h1>Welcome To Rented</h1>
                    <p>Your best friend to handle your rent</p>
                </div>
            </header>
            <section className="home" data-test='home-section'>
                <div className="gallery-title">
                    <h2>Please Select the apartment you live in...</h2>
                </div>
                <div className="gallery">
                    {cards}
                </div>
            </section>
            <section className="home"  data-test='home-section'>
                <div className="reason">
                    <div className="reason-title">
                        <h3>We Promise</h3>
                    </div>
                    <div className="reason-content">
                        <article className="reason-card" data-test='good-reason'>
                            <div className="reason-card-img" >
                                <img src="images/icon/fast.png" alt=""/>
                            </div>
                            <div className="reason-card-body">
                                <h3>FAST</h3>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>
                        </article>

                        <article className="reason-card" data-test='good-reason'>
                            <div className="reason-card-img" >
                                <img src="images/icon/safe.png" alt=""/>
                            </div>
                            <div className="reason-card-body">
                                <h3>SAFE</h3>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                </p>
                            </div>
                        </article>

                        <article className="reason-card" data-test='good-reason'>
                            <div className="reason-card-img" >
                                <img src="images/icon/easy.png" alt=""/>
                            </div>
                            <div className="reason-card-body">
                                <h3>EASY</h3>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;