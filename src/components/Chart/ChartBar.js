import React from 'react';

import './ChartBar.css';

const ChartBar = props =>{
    return (
        <div className="chart_bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill"></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}

export default ChartBar;
