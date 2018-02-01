import React from 'react';
import {Table } from 'semantic-ui-react';
import Asset from './Asset';
const PortfolioTable = ({ assets }) => (
  <Table celled structured>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell/>
        <Table.HeaderCell>Symbol</Table.HeaderCell>
        <Table.HeaderCell>Last Price</Table.HeaderCell>
        <Table.HeaderCell>Change</Table.HeaderCell>
        <Table.HeaderCell>Shares</Table.HeaderCell>
        <Table.HeaderCell>Cost basis</Table.HeaderCell>
        <Table.HeaderCell>Market Value</Table.HeaderCell>
        <Table.HeaderCell>Lot</Table.HeaderCell>

      </Table.Row>

    </Table.Header>

    <Table.Body>
      { assets.map( asset =>
        <Asset/>
      )}
      
    </Table.Body>
  </Table>
)

export default PortfolioTable