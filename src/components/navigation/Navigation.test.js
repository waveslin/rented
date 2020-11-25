import Navigation from './Navigation.jsx';
import Adaptor from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import {findByDataTest} from '../../util/testHelper';

configure({adapter: new Adaptor()});

const setup = (props={}) => {
    return shallow(<Navigation {...props} />);
}

describe('Navigation Test', ()=>{
    let component;
    beforeEach(()=>{
        component = setup();
    });

    it('Navigation used nav as container', ()=>{
        let sample = findByDataTest(component, 'Navigation-nav');
        expect(sample.length).toBe(1);
    });


    it('Navigation has the link list', ()=>{
        let sample = findByDataTest(component, 'Navigation-link-list');
        expect(sample.length).toBe(1);
    });

    it('Navigation has the small screen menu toggle button', ()=>{
        let sample = findByDataTest(component, 'Navigation-menu-toggle');
        expect(sample.length).toBe(1);
    });

    it('Navigation has the small screen menu close button', ()=>{
        let sample = findByDataTest(component, 'Navigation-menu-close');
        expect(sample.length).toBe(1);
    });

});