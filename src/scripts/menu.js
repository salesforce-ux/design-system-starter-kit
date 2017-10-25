// Copyright (c) 2017-present, Salesforce.com, Inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

'use strict'

/**
 * These interactions are provided for prototyping use ONLY.
 *
 * Browser support, accessibility and security are not concerns in this prototype.
 * This is not aimed at being keyboard accessible or screen-reader friendly.
 * For these reasons, the JavaScript below is NOT for production use.
 */

/*
* Menu Buttons
*/
const toggleMenu = (menu) =>
{
  var open = menu.classList.contains('slds-is-open');
  /* Make sure only one menu is open at a time. */
  closeAllMenus();
  if(!open) {
    menu.classList.add('slds-is-open');
  }
};

const closeAllMenus = () =>
{
    var menus = document.querySelectorAll(".slds-is-open");
    Array.from(menus).forEach((menu) =>
      menu.classList.remove('slds-is-open')
    );
};

const toggleMenuItem = (menuItems,item) => {
  if( item.getAttribute('aria-disabled') != "true" ) {
    Array.from(menuItems).forEach((item) =>
    {
      item.parentElement.classList.remove('slds-is-selected');
      item.setAttribute('aria-checked',false);
    });
    item.parentElement.classList.add('slds-is-selected');
    item.setAttribute('aria-checked',true);
  }
}

const initMenus = (menus,dropdowns) => {

  Array.from(menus).forEach((menu) =>
  {
    /* If the user clicked a menu button, toggle the menu. */
    menu.getElementsByClassName("slds-button")[0].addEventListener('click', () => toggleMenu(menu), false);
    /* If the user clicked inside a menu, capture the event. */
    menu.addEventListener('click', (event) => event.stopPropagation(), false);
  });

  Array.from(dropdowns).forEach((dropdown) =>
  {
    const menuItems = dropdown.querySelectorAll('[role="menuitemcheckbox"]');
    Array.from(menuItems).forEach((item) =>
    {
      item.addEventListener('click', () => toggleMenuItem(menuItems,item), false);
    });
  });

}

/* If the user clicked outside a menu, close all menus. */
window.addEventListener('click', closeAllMenus , false);

const menus = document.querySelectorAll(".slds-dropdown-trigger");
const dropdowns = document.querySelectorAll('.slds-dropdown__list');

initMenus(menus,dropdowns);
