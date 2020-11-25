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

    it('Account component has a header', ()=>{
        let sample = findByDataTest(component, 'Account-header');
        expect(sample.length).toBe(1);
    });

    it('Account component has a info section', ()=>{
        let sample = findByDataTest(component, 'Account-info');
        expect(sample.length).toBe(1);
    });

    it('Account component has a danger zone section', ()=>{
        let sample = findByDataTest(component, 'Account-danger');
        expect(sample.length).toBe(1);
    });
})