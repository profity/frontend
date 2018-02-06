import React from 'react';
import PortfolioPage from './PortfolioPage';
import { Container } from 'semantic-ui-react'
import './App.css'
const App = () => (
    <div className="flex-container">
        <nav className="admin-sidebar">
            <ol>
                <li>Portfolio</li>
                <li>Trading</li>
            </ol>
        </nav>
        <PortfolioPage classStyle="admin-content"/>
    </div>
)

export default App;