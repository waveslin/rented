import './Dashboard.css';

const Dashboard = (props) => {

    return (
        <>
            <header className='dashboard' data-test='Dashboard-header'>
                <h1>Dashboard</h1>
            </header>
            <section className='dashboard-inquiry' data-test='Dashboard-inquiry'>
                <div className='dashboard-heading' data-test='Dashboard-subheading'>
                    Inquiry
                </div>
                <div>
                    <p className="inquiry-account">Rented Account: <span className="account-number">34839362</span></p>
                    <p className="inquiry-address">Apartment adress: </p>
                    <p className="inquiry-address-detail">4450 Rue Saint Fanc, Montreal, Quebec, Canada H2K 2C0</p>
                    <p className="inquiry-bill inquiry-bill-total">Your bill total: <span className="bill-number">$1500</span></p>
                    <p className="inquiry-bill">Your bill for this month: <span className="bill-number">$1500</span></p>
                </div>
            </section>
            <section className='dashboard-history' data-test='Dashboard-history'>
                <div className='dashboard-heading' data-test='Dashboard-subheading'>
                    History
                </div>
                <div className="history-download">
                    <div className="history-record">
                        <p className="record-month-year">Sep 2020</p>
                        <a href="#1">view</a>
                    </div>

                    <div className="history-record">
                        <p className="record-month-year">Aug 2020</p>
                        <a href="#2">view</a>
                    </div>

                    <div className="history-record">
                        <p className="record-month-year">Jul 2020</p>
                        <a href="#3">view</a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Dashboard;