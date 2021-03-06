import React from 'react';
import {Table, Icon} from 'semantic-ui-react'; // eslint-disable-line no-unused-vars

// import PropTypes from 'prop-types';

const Asset = ( {symbol, price} ) => (
  <Table.Row>
    <Table.Cell collapsing>
      <Icon name='add circle'/>
    </Table.Cell>
    <Table.Cell> { symbol } </Table.Cell>
    <Table.Cell>{ price }</Table.Cell>
    <Table.Cell>1</Table.Cell>
    <Table.Cell>20</Table.Cell>
    <Table.Cell>$300</Table.Cell>
    <Table.Cell>20</Table.Cell>
    <Table.Cell>0</Table.Cell>
  </Table.Row>
);


export default Asset;