import React from 'react';

import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderHeadingTitle,
  PageHeaderDetail,
  PageHeaderDetailItem,
  PageHeaderDetailBody,
  PageHeaderDetailLabel,
  Icon, Button, ButtonGroup, DropdownButton, MenuItem,
} from 'react-lightning-design-system';

const PageHeaderWrapper = (
  <PageHeader>
    <PageHeaderHeading
      legend="RECORD TYPE"
      title="Record Title"
      figure={
        <Icon
          category="standard"
          icon="user"
          size="middle"
        />
      }
      rightActions={[
        <Button key="0" type="neutral" icon="add" iconAlign="left">
          Follow
        </Button>,
        <ButtonGroup key="1" className="slds-button-space-left">
          <Button type="neutral">Edit</Button>
          <Button type="neutral">Delete</Button>
          <Button type="neutral">Clone</Button>
          <DropdownButton
            type="icon-border-filled"
            menuAlign="right"
          >
            <MenuItem>Menu Item #1</MenuItem>
            <MenuItem>Menu Item #2</MenuItem>
            <MenuItem>Menu Item #3</MenuItem>
          </DropdownButton>
        </ButtonGroup>,
      ]}
    />
    <PageHeaderDetail>
      <PageHeaderDetailItem label="Field 1">
        Description that demonstrates truncation with a long text field
      </PageHeaderDetailItem>
      <PageHeaderDetailItem>
        <PageHeaderDetailLabel>
          <Text tag="div" trancate category="title">
            Field 2 (3)
            <DropdownButton type="icon-bare" iconSize="small" icon="down">
              <MenuItem>Menu Item #1</MenuItem>
              <MenuItem>Menu Item #2</MenuItem>
              <MenuItem>Menu Item #3</MenuItem>
            </DropdownButton>
          </Text>
        </PageHeaderDetailLabel>
        <PageHeaderDetailBody>
          Multiple Values
        </PageHeaderDetailBody>
      </PageHeaderDetailItem>
      <PageHeaderDetailItem label="Field 3">
        <a>Hyperlink</a>
      </PageHeaderDetailItem>
      <PageHeaderDetailItem label="Field 4">
        <span>Description (2-line truncat...</span>
      </PageHeaderDetailItem>
    </PageHeaderDetail>
  </PageHeader>
);

export default PageHeaderWrapper;
