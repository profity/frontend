import React from 'react';
import ShowPortfolio from '../containers/ShowPortfolio';
import AddAsset from '../containers/AddAsset';
import Summary from './Summary';
import AssetPie from './AssetPie'

const PortfolioPage = () => (
    <div>
        <Summary/>
        <AssetPie/>
        <ShowPortfolio/>
        <AddAsset/>
    </div>
)

export default PortfolioPage