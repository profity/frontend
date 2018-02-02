import React from 'react';
import { Table } from 'semantic-ui-react';
import ShowAsset from '../containers/ShowAsset';
const PortfolioTable = ({ assets, onUpdatePrice }) => (
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
        <ShowAsset key={asset.symbol} {...asset} />
      )}
      
    </Table.Body>
  </Table>
)

export default PortfolioTable