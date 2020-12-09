import './Contact.css';

const Contact = ()=>(
        <>
            <header className="contact-header" data-test='Contact-header'>
                <h1>Contact</h1>
            </header>
            <section className="contact">
                <div className="contact-content">
                    <div className="contact-text">
                        <article className="contact-detail" data-test='Contact-information'>
                            <h2>Montreal</h2>
                            <p className="first-line"><span className="detail-name">Address: </span> 2400 Rue Bonjour</p>
                            <p className="second-line">Montreal Quebec, H1H 1H1</p>
                            <p><span className="detail-name">Phone: </span> 413 000 0000</p>
                            <p><span className="detail-name">Email: </span> Support@Rented.com</p>
                        </article>
                        <article className="contact-detail" data-test='Contact-information'>
                            <h2>Toronto</h2>
                            <p className="first-line"><span className="detail-name">Address: </span> 2400 Hello Street</p>
                            <p className="second-line">Toronto Ontario, G2G 2G2</p>
                            <p><span className="detail-name">Phone: </span> 416 000 0000</p>
                            <p><span className="detail-name">Email: </span> Support@Rented.com</p>
                        </article>
                    </div>
                    <div className="contact-map" data-test='Contact-map'>
                        <img src="images/util/location.png" alt=""/>
                    </div>
                </div>
            </section>
        </>
    );

export default Contact;