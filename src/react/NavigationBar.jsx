import React from 'react';

import { Button, DropdownMenu, MenuItem, MenuHeader, Icon } from 'react-lightning-design-system';

// Navigation Bar component
// https://www.lightningdesignsystem.com/components/global-navigation/
const NavigationBar = () => (
  <div className="slds-context-bar">
    <div className="slds-context-bar__primary slds-context-bar__item--divider-right">
      <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-no-hover">
        <div className="slds-context-bar__icon-action">
          <a href="javascript:void(0);" className="slds-icon-waffle_container slds-context-bar__button">
            <div className="slds-icon-waffle">
              <div className="slds-r1"></div>
              <div className="slds-r2"></div>
              <div className="slds-r3"></div>
              <div className="slds-r4"></div>
              <div className="slds-r5"></div>
              <div className="slds-r6"></div>
              <div className="slds-r7"></div>
              <div className="slds-r8"></div>
              <div className="slds-r9"></div>
            </div>
            <span className="slds-assistive-text">Open App Launcher</span>
          </a>
        </div>
        <span className="slds-context-bar__label-action slds-context-bar__app-name">
          <span className="slds-truncate">App Name</span>
        </span>
      </div>
    </div>
    <nav className="slds-context-bar__secondary" role="navigation">
      <ul className="slds-grid">
        <li className="slds-context-bar__item">
          <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Home">
            <span className="slds-truncate">Home</span>
          </a>
        </li>
        <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--hover" aria-haspopup="true">
          <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item">
            <span className="slds-truncate">Menu Item</span>
          </a>
          <div className="slds-context-bar__icon-action slds-p-left--none" tabIndex="0">
            <Button
              className="slds-context-bar__button"
              icon="chevrondown"
            >
              <span className="slds-assistive-text">Open menu item submenu</span>
            </Button>
          </div>
          <DropdownMenu
            hoverPopup
            align="right"
          >
            <MenuItem>
              <Icon
                size="x-small"
                icon="add"
                className="slds-m-right--x-small"
              />
              Main action
            </MenuItem>
            <MenuHeader divider="top">Menu header</MenuHeader>
            <MenuItem>Menu Item One</MenuItem>
            <MenuItem>Menu Item Two</MenuItem>
            <MenuItem>Menu Item Three</MenuItem>
          </DropdownMenu>
        </li>
        <li className="slds-context-bar__item">
          <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item 0">
            <span className="slds-truncate">Menu Item</span>
          </a>
        </li>
        <li className="slds-context-bar__item">
          <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item 1">
            <span className="slds-truncate">Menu Item</span>
          </a>
        </li>
        <li className="slds-context-bar__item">
          <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item 2">
            <span className="slds-truncate">Menu Item</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default NavigationBar;
