import {VisibilityProvider} from './Visibility.jsx';
import Adaptor from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import {findByDataTest} from '../../util/testHelper';


configure({adapter: new Adaptor()});

const setup = (props={})=>{
    return shallow(<VisibilityProvider {...props} />);
}

describe('Visibility Test', ()=>{
    let component;

    beforeEach(()=>{
        component = setup('hello');
    });


    it('Visibility  has a provider which return visible', ()=>{
        let sample = findByDataTest(component, 'Visibility-provider-visible');
        expect(sample.length).toBe(1);
    });

    it('Visibility  has a provider which return a method set visible', ()=>{
        let sample = findByDataTest(component, 'Visibility-provider-setVisible');
        expect(sample.length).toBe(1);
    });

    it('Visibility  has a provider which return a method reset visible', ()=>{
        let sample = findByDataTest(component, 'Visibility-provider-resetVisible');
        expect(sample.length).toBe(1);
    });
});