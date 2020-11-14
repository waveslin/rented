import App from './App.jsx';
import Adaptor from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import {findByDataTest} from './util/testHelper';
import { BrowserRouter } from 'react-router-dom';

configure({adapter: new Adaptor()});

const setup = (props={}) => {
    return shallow(<App {...props} />);
}

describe('Signup Test', () => {
    let component;

    beforeEach(()=>{
        component = setup();
    });

    it('App component has a Router', ()=>{
        let sample = findByDataTest(component, 'App-router');
        expect(sample.length).toBe(1);
    });

    it('App component has a Url Switch', ()=>{
        let sample = findByDataTest(component, 'App-url-switch');
        expect(sample.length).toBe(1);
    });

    it('App component has a Navigation', ()=>{
        let sample = findByDataTest(component, 'App-navigation');
        expect(sample.length).toBe(1);
    });

    it('App component has a Footer', ()=>{
        let sample = findByDataTest(component, 'App-footer');
        expect(sample.length).toBe(1);
    });

})
