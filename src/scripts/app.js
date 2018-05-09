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

const warningStyles = `
  color: #fff;
  background-color: #c23934;
  display: block;
  text-align: center;
  padding: 8px 32px;
  font: 100 16px/28px sans-serif;
  background-image: linear-gradient(45deg,rgba(0,0,0,.025) 25%,transparent 25%,transparent 50%,rgba(0,0,0,.025) 50%,rgba(0,0,0,.025) 75%,transparent 75%,transparent);
  background-size: 64px 64px;
`
console.log('%c%s', warningStyles, 'Please do not use the provided JavaScript in production!')
console.log('Code in app.js is not built for accessibility, performance, or cross-browser compatibility.')

/**
 * Open / Close an element
 * @param {Node} element
 */
const toggle = (element) => element.classList.toggle('slds-is-open')

/**
 * Open / Close an element's parent
 * @param {Node} element
 */
const toggleParent = (element) => toggle(element.parentNode)

/**
 * Dropdown menus
 * https://www.lightningdesignsystem.com/components/menus/
 */
const dropdownButtons = document.querySelectorAll('.slds-dropdown-trigger_click > .slds-button')

Array.from(dropdownButtons)
  .forEach((button) =>
    button.addEventListener('click', (event) => toggleParent(event.currentTarget), false)
  )

/**
 * Tabs
 * https://www.lightningdesignsystem.com/components/tabs/
 */

const tabs = (variant) => document.querySelectorAll(`.slds-tabs_${variant} [role=tablist] [role=tab]`)
const tabActiveReset = (tab) => Array.from(tab.parentNode.parentNode.querySelectorAll('li'))
  .forEach((element) => element.classList.remove('slds-active'))
const tabActiveSet = (tab) => tab.parentNode.classList.add('slds-active')
const tabPanelsReset = (tab) => Array.from(tab.parentNode.parentNode.parentNode.querySelectorAll('[role="tabpanel"]'))
  .forEach((tabpanel) => {
    tabpanel.classList.remove('slds-show')
    tabpanel.classList.remove('slds-hide')
    tabpanel.classList.add('slds-hide')
  })
const tabPanelShow = (tab) => {
  const tabpanel = document.getElementById(tab.getAttribute('aria-controls'))
  tabpanel.classList.remove('slds-show')
  tabpanel.classList.remove('slds-hide')
  tabpanel.classList.add('slds-show')
}

const defaultTabs = tabs('default')
const scopedTabs = tabs('scoped')

const assignTabEvents = (event) => {
  tabActiveReset(event.currentTarget)
  tabActiveSet(event.currentTarget)
  tabPanelsReset(event.currentTarget)
  tabPanelShow(event.currentTarget)
}

Array.from(defaultTabs).forEach((tab) => {
  tab.addEventListener('click', assignTabEvents, false)
})
Array.from(scopedTabs).forEach((tab) => {
  tab.addEventListener('click', assignTabEvents, false)
})
