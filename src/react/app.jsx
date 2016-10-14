import React from 'react';
import ReactDOM from 'react-dom';
import SVGIcon from './SVGIcon/index.jsx';

var HelloMessage = React.createClass({
  render: function() {
    return (
      <div>
        <h2 className="slds-text-heading--medium slds-m-top--large">Example of injected React</h2>
        <p className="slds-m-vertical--large">
          <SVGIcon className="slds-icon slds-icon-standard-opportunity" sprite="standard" symbol="opportunity" />
          <span className="slds-text-body--regular slds-p-left--small">Hello {this.props.name}</span>
        </p>
      </div>
    );
  }
});

export default class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    var name = "";
    switch (window.location.pathname) {
      case '/example.html':
        name = "John";
        break;
      case '/example2.html':
        name = "Mike";
        break;
    }
    return <HelloMessage name={name} />
  }
};

ReactDOM.render(<Page/>, document.getElementById('render-react'));
