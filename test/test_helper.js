import jsdom from 'jsdom';
// preprend _ so that jquery doesn't try to access DOM browser (which doesn't exist) and fail
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';


// Setting up testing environment to run like a browser in the CLI
// Assign a fake html DOM (using jsdom) to the global.document (window)
global.document =  jsdom.jsdom('<!DOCTYPE HTML><HTML><BODY></BODY></HTML>');
global.window =  global.document.defaultView;
// Wrap global.window in a jquery object
const $ = _$(global.window);


// Build 'renderComponent' helper that renders a given react component
function renderComponent(Component){
  const componentInstance = TestUtils.renderIntoDocument(<Component />);
  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML which is wrapped inside a jquery object

}