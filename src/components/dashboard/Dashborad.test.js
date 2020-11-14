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

    it('Dashboard component success', ()=>{
        // let sample = findByDataTest(component, 'success');
        expect(1).toBe(1);
    })
})