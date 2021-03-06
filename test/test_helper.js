import jsdom from 'jsdom';
// preprend _ so that jquery doesn't try to access DOM browser (which doesn't exist) and fail
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers/';
import chaiJquery from 'chai-jquery';

// Setting up testing environment to run like a browser in the CLI
// Assign a fake html DOM (using jsdom) to the global.document (window)
global.document =  jsdom.jsdom('<!DOCTYPE HTML><HTML><BODY></BODY></HTML>');
global.window =  global.document.defaultView;
// Wrap global.window in a jquery object
const $ = _$(global.window);


// Build 'renderComponent' helper that renders a given react component
function renderComponent(Component, props = {}, state = {}){
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <Component {...props} />
    </Provider>
  );
  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML which is wrapped inside a jquery object
}

// Build helper for simulating events
// Every jquery object will have access to a simulate function
$.fn.simulate = function(eventName, value){
  if (value){
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };