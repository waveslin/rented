import Contact from './Contact.jsx';
import Adaptor from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import {findByDataTest} from '../../util/testHelper';

configure({adapter: new Adaptor()});

const setup = (props={}) => {
    return shallow(<Contact {...props} />);
}

describe('Contact Test', () => {
    let component;

    beforeEach(() => {
        component = setup();
    });
    
    it('Contact has a header', ()=>{
        let sample = findByDataTest(component, 'Contact-header');
        expect(sample.length).toBe(1);
    });

    it('Contact component has 2 places provided information about address and contact', ()=>{
        let sample = findByDataTest(component, 'Contact-information');
        expect(sample.length).toBe(2);
    });

    it('Contact component has provided a map', ()=>{
        let sample = findByDataTest(component, 'Contact-map');
        expect(sample.length).toBe(1);
    });

})
