import React from 'react';
import ShowPortfolio from '../containers/ShowPortfolio';
import AddAsset from '../containers/AddAsset';
import Summary from './Summary';
import AssetPie from './AssetPie'
import './App.css'

const PortfolioPage = (props) => (
    
    <div className={ `${props.classStyle}`} >
        <div className="horizontal-container">
            <Summary />
            <AssetPie />
        </div>
        <ShowPortfolio />
        <AddAsset />
    </div>
)

export default PortfolioPage