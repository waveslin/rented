import Login from './Login.jsx';
import Adaptor from 'enzyme-adapter-react-16';
import {shallow, enzyme, configure} from 'enzyme';
import {findByDataTest} from '../../util/testHelper';

configure({adapter: new Adaptor()});

const setup = (props={})=>{
    return shallow(<Login {...props}/>)
}

describe('Login Test', ()=>{
    let component;

    beforeEach(()=>{
        component = setup();
    });


    it('Login has a header ', ()=>{
        let sample = findByDataTest(component, 'Login-header');
        expect(sample.length).toBe(1);
    });


    it('Login has a login form ', ()=>{
        let sample = findByDataTest(component, 'Login-form');
        expect(sample.length).toBe(1);
    });

    it('Login has a email/username input place ', ()=>{
        let sample = findByDataTest(component, 'Login-input-email');
        expect(sample.length).toBe(1);
    });

    it('Login has a password input place ', ()=>{
        let sample = findByDataTest(component, 'Login-input-password');
        expect(sample.length).toBe(1);
    });

    it('Login has a login button ', ()=>{
        let sample = findByDataTest(component, 'Login-login-button');
        expect(sample.length).toBe(1);
    });



});