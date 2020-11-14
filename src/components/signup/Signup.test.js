import Signup from './Signup.jsx';
import Adaptor from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import {findByDataTest} from '../../util/testHelper';

configure({adapter: new Adaptor()});

const setup = (props={}) => {
    return shallow(<Signup {...props} />);
}

describe('Signup Test', () => {
    let component;

    beforeEach(()=>{
        component = setup();
    });

    it('Signup component has a header', ()=>{
        let sample = findByDataTest(component, 'Signup-header');
        expect(sample.length).toBe(1);
    });

    it('Signup component has a sign up form', ()=>{
        let sample = findByDataTest(component, 'Signup-form');
        expect(sample.length).toBe(1);
    });
})
