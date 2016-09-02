/**
 * These interactions are provided for prototyping use ONLY.
 *
 * Browser support, accessibility and security are not concerns in this prototype.
 * This is not aimed at being keyboard accessible or screen-reader friendly.
 * For these reasons, the JavaScript below is NOT for production use.
 */

/**
 * Open / Close an element
 * @param {Node} element
 */
const toggle = (element) => element.classList.toggle('slds-is-open');

/**
 * Open / Close an element's parent
 * @param {Node} element
 */
const toggleParent = (element) => toggle(element.parentNode);

/**
 * Dropdown menus
 * https://www.lightningdesignsystem.com/components/menus/
 */
const dropdownButtons = document.querySelectorAll('.slds-dropdown-trigger--click > .slds-button');

Array.from(dropdownButtons)
  .forEach((button) =>
    button.addEventListener('click', (event) => toggleParent(event.target), false)
  );

/**
 * Tabs
 * https://www.lightningdesignsystem.com/components/tabs/
 */

const tabs = (variant) => document.querySelectorAll(`.slds-tabs--${variant} [role=tablist] [role=tab]`);
const tabActiveReset = (tab) => Array.from(tab.parentNode.parentNode.querySelectorAll('li'))
  .forEach((element) => element.classList.remove('slds-active'));
const tabActiveSet = (tab) => tab.parentNode.classList.add('slds-active');
const tabPanelsReset = (tab) => Array.from(tab.parentNode.parentNode.parentNode.querySelectorAll('[role="tabpanel"]'))
  .forEach((tabpanel) => {
    tabpanel.classList.remove('slds-show');
    tabpanel.classList.remove('slds-hide');
    tabpanel.classList.add('slds-hide');
  });
const tabPanelShow = (tab) => {
  const tabpanel = document.getElementById(tab.getAttribute('aria-controls'));
  tabpanel.classList.remove('slds-show');
  tabpanel.classList.remove('slds-hide');
  tabpanel.classList.add('slds-show');
};

const defaultTabs = tabs('default');
const scopedTabs = tabs('scoped');

const assignTabEvents = (event) => {
  tabActiveReset(event.target);
  tabActiveSet(event.target);
  tabPanelsReset(event.target);
  tabPanelShow(event.target);
}

Array.from(defaultTabs).forEach((tab) => {
  tab.addEventListener('click', assignTabEvents, false);
});
Array.from(scopedTabs).forEach((tab) => {
  tab.addEventListener('click', assignTabEvents, false);
});
