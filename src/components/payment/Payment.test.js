import Payment from './Payment.jsx';
import Adaptor from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import {findByDataTest} from '../../util/testHelper';


configure({adapter: new Adaptor()});

const setup = (props={}) => {
    return shallow(<Payment {...props} />)
}

describe('Payment Test', ()=>{
    let component;

    beforeEach(()=>{
        component = setup()
    });

    it('Payment component has a header', ()=>{
        let sample = findByDataTest(component, 'Payment-header');
        expect(sample.length).toBe(1);
    });

    it('Payment component has a payment pay now section', ()=>{
        let sample = findByDataTest(component, 'Payment-pay');
        expect(sample.length).toBe(1);
    });

    it('Payment component has a payment method section', ()=>{
        let sample = findByDataTest(component, 'Payment-method');
        expect(sample.length).toBe(1);
    });
})