import React, { Component } from "react"
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router-dom';
import logo from "./logo.svg"
import "./App.css"
import FacebookLogin from './facebook.js';
import FacebookLoginWithButton from './facebook-with-button.js';

const e = React.createElement;
const responseFacebook = (response) => {
  console.log(response);
};

class Base extends Component {
  render() {
    return (
      <div>
        <Link to="/dummy">Route to dummy page</Link>

        <div>
          <p>Facebook login with default button and styling</p>
          <FacebookLoginWithButton
            appId="490652501351020"
            autoLoad
            callback={responseFacebook}
            icon="fa-facebook"
          />
        </div>

        <div>
          <p>Facebook login with render prop (and no styling provided out the box)</p>
          <FacebookLogin
            appId="490652501351020"
            autoLoad
            callback={responseFacebook}
            render={renderProps => (
              <button onClick={renderProps.onClick}>This is my custom FB button</button>
            )}
          />
        </div>
      </div>
    );
  }
}

class Dummy extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>
          This is just a dummy page to test the button<br />
          <a href="https://fb.com/">
            survives back and forth routing
          </a>
        </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Base}/>
    <Route path="/dummy" component={Dummy}/>
  </Router>,
  document.getElementById('demo')
);

const domContainer = document.querySelector('#fbContainer');
ReactDOM.render(e(fbLoginIndex), domContainer);

export default App
