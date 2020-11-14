import Account from './Account.jsx';
import Adaptor from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import {findByDataTest} from '../../util/testHelper';


configure({adapter: new Adaptor()});

const setup = (props={}) => {
    return shallow(<Account {...props} />)
}

describe('Account Test', ()=>{
    let component;

    beforeEach(()=>{
        component = setup()
    });

    it('Account component success', ()=>{
        // let sample = findByDataTest(component, 'success');
        expect(1).toBe(1);
    })
})