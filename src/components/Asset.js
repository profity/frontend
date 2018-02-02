import React from 'react';
import {Table, Icon} from 'semantic-ui-react'; // eslint-disable-line no-unused-vars

// import PropTypes from 'prop-types';

const Asset = () => (
  <Table.Row>
    <Table.Cell collapsing>
      <Icon name='add circle'/>
    </Table.Cell>
    <Table.Cell>BTC</Table.Cell>
    <Table.Cell>$12222</Table.Cell>
    <Table.Cell>10%</Table.Cell>
    <Table.Cell>20</Table.Cell>
    <Table.Cell>$300</Table.Cell>
    <Table.Cell>203</Table.Cell>
    <Table.Cell>1</Table.Cell>
  </Table.Row>
);


export default Asset;