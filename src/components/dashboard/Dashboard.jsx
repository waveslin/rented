import './Dashboard.scss';

const Dashboard = props => {

    props = {
        account: 34839362,
        apt: 501,
        address: "4450 Rue Saint Fanc, Montreal, Quebec, Canada H2K 2C0",
        bill: 1500,
        history: [
            {
            recordID: 2379323,
            month: "Oct",
            year: 2020,
            },
            {
                recordID: 2379322,
                month: "Sep",
                year: 2020,
            },
            {
                recordID: 2379321,
                month: "Aug",
                year: 2020,
            },
            {
                recordID: 2379320,
                month: "Jul",
                year: 2020,
            }
        ]
    }

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
                    <p className="inquiry-account">Rented Account: <span className="account-number">{props.account}</span></p>
                    <p className="inquiry-address">Apartment Number: <span>{props.apt}</span></p>
                    <p className="inquiry-address">Apartment Adress: </p>
                    <p className="inquiry-address-detail">{props.address}</p>
                    <p className="inquiry-bill inquiry-bill-total">Your bill total: <span className="bill-number">${props.bill}</span></p>
                </div>
            </section>
            <section className='dashboard-history' data-test='Dashboard-history'>
                <div className='dashboard-heading' data-test='Dashboard-subheading'>
                    History
                </div>
                <div className="history-download">
                    {
                        props.history.map((record, index) => (
                            <div className="history-record" key={index}>
                                <p className="record-month-year">{`${record.month} ${record.year}`}</p>
                                <a href={`#${record.recordID}`}>view</a>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
}

export default Dashboard;