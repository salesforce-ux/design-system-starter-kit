import React from 'react';
import ReactDOM from 'react-dom';

import { Lookup, Button } from 'react-lightning-design-system';

// Base Global Header component
// https://www.lightningdesignsystem.com/components/global-header/
const GlobalHeader = () => (
  <header className="slds-global-header_container">
    <a href="javascript:void(0);" className="slds-assistive-text slds-assistive-text--focus">Skip to Navigation</a>
    <a href="javascript:void(0);" className="slds-assistive-text slds-assistive-text--focus">Skip to Main Content</a>
    <div className="slds-global-header slds-grid slds-grid--align-spread">
      <div className="slds-global-header__item">
        <div className="slds-global-header__logo">
          <img src="https://www.lightningdesignsystem.com/assets/images/logo-noname.svg" alt="" />
        </div>
      </div>
      <div className="slds-global-header__item slds-global-header__item--search">
        <Lookup
          iconAlign="left"
          placeholder="Search Salesforce"
        />
      </div>
      <ul className="slds-global-header__item slds-grid slds-grid--vertical-align-center">
        <li className="slds-dropdown-trigger slds-dropdown-trigger--click slds-m-left--x-small">
          <Button title="person name" aria-haspopup="true">
            <span className="slds-avatar slds-avatar--circle slds-avatar--medium">
              <img src="/assets/images/avatar2.jpg" alt="person name" />
            </span>
          </Button>
        </li>
      </ul>
    </div>
  </header>
);

export default GlobalHeader;
