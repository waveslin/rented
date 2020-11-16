import PageNotFound from './PageNotFound.jsx';
import Adaptor from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import {findByDataTest} from '../../util/testHelper';


configure({adapter: new Adaptor()});

const setup = (props={}) => {
    return shallow(<PageNotFound {...props} />)
}

describe('PageNotFound Test', ()=>{
    let component;

    beforeEach(()=>{
        component = setup()
    });

    it('PageNotFound component', ()=>{
        let sample = findByDataTest(component, 'PageNotFound');
        expect(sample.length).toBe(1);
    })
})