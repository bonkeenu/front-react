const React = require('react');
const ReactDOM = require('react-dom');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

ReactDOM.render(
  <div>
    <h1>Hello, world</h1>
    <MuiThemeProvider>
      <RaisedButton label="Default" />
    </MuiThemeProvider>
  </div>,
  document.getElementById('content')
);