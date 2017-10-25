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
* Tooltips
* Make sure that the tooltip has a unique Id and that it matches the aria-describedby value on the parent.
* Use slds-is-relative on the wrapper.
* Set your tooltip as position:absolute to keep it from reflowing your page.
*/

const showTooltip = function(tooltip,tooltipParent){
  // console.log('show tooltip',tooltip,tooltipParent);
  var relativeParentLeft = window.getComputedStyle(tooltip.parentElement).getPropertyValue('position') == 'relative' ? tooltipParent.parentElement.getBoundingClientRect().left : 0;

  if (tooltip.classList.contains('slds-nubbin_bottom-left') == true) {
    tooltip.style.left = (tooltipParent.getBoundingClientRect().left + (tooltipParent.offsetWidth/2)) - 24 - relativeParentLeft + "px";
  }
  else if (tooltip.classList.contains('slds-nubbin_bottom-right') == true) {
    tooltip.style.left = (tooltipParent.getBoundingClientRect().left + (tooltipParent.offsetWidth/2)) - (tooltip.offsetWidth - 24) - relativeParentLeft + "px";
  }
  else {
    tooltip.style.left = (tooltipParent.getBoundingClientRect().left + (tooltipParent.offsetWidth/2)) - (tooltip.offsetWidth/2) - relativeParentLeft + "px";
  }
  tooltip.style.top = -tooltip.offsetHeight - 12 + "px";
  tooltip.classList.add('slds-rise-from-ground');
  tooltip.classList.remove('slds-fall-into-ground');
};

const hideTooltip = function(tooltip,tooltipParent){
  // console.log('hide tooltip',tooltip, tooltipParent);
  tooltip.classList.remove('slds-rise-from-ground');
  tooltip.classList.add('slds-fall-into-ground');
};

var tooltips = document.querySelectorAll(".slds-popover_tooltip");

Array.from(tooltips).forEach((tooltip) => {
  var tooltipParent = document.querySelectorAll("[aria-describedby=" + tooltip.id+"]")[0];
  tooltipParent.onmouseover = () => showTooltip(tooltip,tooltipParent);
  tooltipParent.onmouseout = () => hideTooltip(tooltip,tooltipParent);
  tooltipParent.onfocus = () => showTooltip(tooltip,tooltipParent);
  tooltipParent.onblur = () => hideTooltip(tooltip,tooltipParent);
});
