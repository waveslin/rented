import './Account.css';

const Account = (props) => {
    return (
        <>
            <header data-test='Account-header'></header>
            <section data-test='Account-info'></section>
            <section data-test='Account-danger'></section>
        </>
    );
}

export default Account;