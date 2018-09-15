const React = require('react');
import ReactDOM from 'react-dom';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(App, div);
  ReactDOM.unmountComponentAtNode(div);
});

/* ------ Unit Testing ------- */

/* Not working with state check
const goUp = require("./components/Elevator");
test("when clicked on up 0 => 1", () =>{
  expect(goUp.toBe(1));
});
*/
