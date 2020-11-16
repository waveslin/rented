import Dashboard from './Dashboard.jsx';
import Adaptor from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import {findByDataTest} from '../../util/testHelper';


configure({adapter: new Adaptor()});

const setup = (props={}) => {
    return shallow(<Dashboard {...props} />)
}

describe('Dashboard Test', ()=>{
    let component;

    beforeEach(()=>{
        component = setup()
    });

    

    it('Dashboard component has a main header', ()=>{
        let sample = findByDataTest(component, 'Dashboard-header');
        expect(sample.length).toBe(1);
    });

    it('Dashboard component has subheading for inquiry and history', ()=>{
        let sample = findByDataTest(component, 'Dashboard-subheading');
        expect(sample.length).toBe(2);
    });

    it('Dashboard component has section for inquiry', ()=>{
        let sample = findByDataTest(component, 'Dashboard-inquiry');
        expect(sample.length).toBe(1);
    });

    it('Dashboard component has section for history', ()=>{
        let sample = findByDataTest(component, 'Dashboard-history');
        expect(sample.length).toBe(1);
    });
})