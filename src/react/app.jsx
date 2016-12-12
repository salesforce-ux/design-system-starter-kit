import { Component } from 'react';
import ReactDOM from 'react-dom';

import GlobalHeader from './GlobalHeader';
import NavigationBar from './NavigationBar';
import Example from './Example';

const App = () => (
  <div>
    <GlobalHeader />
    <div className="app-header-placeholder" />
    <NavigationBar />
    <main className="app-wrapper">
      <Example />
      <footer
        className="app-footer">
        Built using the <a href="https://github.com/salesforce-ux/design-system-starter-kit">Salesforce Lightning Design System Starter Kit</a>.
      </footer>
    </main>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
