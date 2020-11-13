import checkPropTypes from 'check-prop-types';
import { Component } from 'react';


export const findByDataTest = (component, data_test) => {
    const sample = component.find(`[data-test='${data_test}']`);
    return sample;
}