import React from 'react';

import {
  Icon, Button, DropdownButton, MenuItem,
  Text, Grid, Col,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderColumn,
  TableRowColumn,
  Tabs, Tab,
} from 'react-lightning-design-system';

import example from '../views/data/example.json';

export default () => (
  <Grid vertical={false}>
    <Col className="slds-p-horizontal--large" cols={2} totalCols={3}>
      <Text
        className="slds-m-top--large"
        category="heading"
        type="medium"
        tag="h2"
      >Example of injected data</Text>

      <Text
        className="slds-m-vertical--large"
        category="body"
        type="regular"
      >
        Data shown in this table comes from
        {' '}
        <a href="https://github.com/salesforce-ux/design-system-starter-kit/blob/react/src/views/data/example.json">
          <code>views/data/example.json</code>
        </a>
        .
      </Text>
      <Table
        bordered
        fixedLayout>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn className="slds-size--1-of-2">Account Name</TableHeaderColumn>
            <TableHeaderColumn>Billing State/Province</TableHeaderColumn>
            <TableHeaderColumn>Phone</TableHeaderColumn>
            <TableHeaderColumn>Type</TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody>
          {example.accounts.map((item, index) => (
            <TableRow key={index}>
              <TableRowColumn>
                <a href="javascript:void(0);">{item.name}</a>
              </TableRowColumn>
              <TableRowColumn>{item.state}</TableRowColumn>
              <TableRowColumn>{item.phone}</TableRowColumn>
              <TableRowColumn>{item.type}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Col>
    <Col className="slds-p-around--large" cols={1} totalCols={3}>
      <Text
        className="slds-m-bottom--medium"
        category="heading"
        type="medium"
        tag="h2"
      >Examples of interactions</Text>
      <Text
        className="slds-m-bottom--large"
        category="body"
        type="regular"
      >A few components are interactive, thanks to the JavaScript bundled in the starter kit.</Text>
      <Text tag="h3" section className="slds-m-bottom--medium">Tabs</Text>
      <Tabs type="default" defaultActiveKey={1}>
        <Tab eventKey={1} title="ITEM ONE">Item One Content</Tab>
        <Tab eventKey={2} title="ITEM TWO">Item Two Content</Tab>
        <Tab eventKey={3} title="ITEM THREE">Item Three Content</Tab>
      </Tabs>
      <Text tag="h3" section className="slds-m-vertical--medium">Dropdown menu</Text>
      <div>
        Click me:
        <DropdownButton
          type="icon-border-filled"
          menuAlign="left"
        >
          <MenuItem>Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
          <MenuItem divider="top">Menu Item Four</MenuItem>
        </DropdownButton>
      </div>
    </Col>
  </Grid>
);
