import jsdom from 'jsdom';


// Setting up testing environment to run like a browser in the CLI
// Assign a fake html DOM (using jsdom) to the global.document (window)
global.document =  jsdom.jsdom('<!DOCTYPE HTML><HTML><BODY></BODY></HTML>');
global.window =  global.document.defaultView;