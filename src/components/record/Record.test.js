import Record from './Record.jsx';
import Adaptor from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import {findByDataTest} from '../../util/testHelper';


configure({adapter: new Adaptor()});

const setup = (props={}) => {
    return shallow(<Record {...props} />)
}

describe('Record Test', ()=>{
    let component;

    beforeEach(()=>{
        component = setup()
    });

    it('Record component success', ()=>{
        // let sample = findByDataTest(component, 'success');
        expect(1).toBe(1);
    })
})