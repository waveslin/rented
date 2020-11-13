import Footer from './Footer.jsx';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import {findByDataTest} from '../../util/testHelper';

configure({adapter: new Adapter()});

const setup = (props={}) =>{
    const component = shallow(<Footer {...props} />);
    return component;
}

describe('Footer Test', ()=>{

    let component;
    beforeEach(()=>{
        component = setup();
    });

    it('Footer initialization', ()=>{
        let sample = findByDataTest(component, 'Footer-footer');
        expect(sample.length).toBe(1);    
    });

    it('Number of Footer payment method icon', ()=>{
        let sample = findByDataTest(component, 'payment-icon');
        expect(sample.length).toBe(4);
    })

})