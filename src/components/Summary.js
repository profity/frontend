import React from 'react';
import {Statistic} from 'semantic-ui-react'
const Summary = () => (
    <div>
        <Statistic horizontal>
            <Statistic.Value>$200,000</Statistic.Value>
            <Statistic.Label>USD</Statistic.Label>
        </Statistic>
        <br/>
        <Statistic horizontal>
            <Statistic.Value>120</Statistic.Value>
            <Statistic.Label>Bitcoin</Statistic.Label>
        </Statistic>
    </div>
)

export default Summary