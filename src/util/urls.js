const PREFIX = 'http://localhost:4500/rented/';

// const PREFIX = 'https://living-f3655a.us1.kinto.io/rented/';

const URLS = {
    SIGNUP: `${PREFIX}signup`,
    LOGIN: `${PREFIX}login`,
    LOGOUT: `${PREFIX}logout`,
    DESTROY: `${PREFIX}delete_account`,
    EDITINFO: `${PREFIX}edit_account`,
    ADDCARD: `${PREFIX}add_card`,
    DELCARD: `${PREFIX}delete_card`,
    MAKEPAY: `${PREFIX}make_payment`,
    LISTAPT: `${PREFIX}list_apartment`,
}

export default URLS;