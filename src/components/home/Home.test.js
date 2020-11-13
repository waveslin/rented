import Home from './Home.jsx';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { findByDataTest } from '../../util/testHelper';

configure({adapter: new Adapter()});

const setup = (props={}) =>{
    const component = shallow(<Home {...props} />);
    return component;
}


describe("Home test", ()=>{

    let component;

    beforeEach(()=>{
        component = setup();
    });

    it('Home header', ()=>{
        let sample = findByDataTest(component, 'home-header');
        expect(sample.length).toBe(1);
    });

    it('Home section', ()=>{
        let sample = findByDataTest(component, 'home-section');
        expect(sample.length).toBe(2);
    })

    it('Home shown number of buildings image', ()=>{
        let sample = findByDataTest(component, 'building-property');
        expect(sample.length).toBe(6);
    });

    it('Good reasons for using the web app', ()=>{
        let sample = findByDataTest(component, 'good-reason');
        expect(sample.length).toBe(3);
    })

});