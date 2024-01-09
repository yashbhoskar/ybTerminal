import React from 'react';
import {
    XYPlot,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis,
    VerticalBarSeries,
    DiscreteColorLegend,
    MarkSeries,
  } from 'react-vis';

const Roadmap = () => {

    const data = [
        { x: 1, y: 2, label: 'Step 1' },
        { x: 2, y: 4, label: 'Step 2' },
        { x: 3, y: 6, label: 'Step 3' },
        // Add more data points as needed
      ];
    
      const workExperiences = [
        { x: 1.5, y: 2.5, title: 'Intern at XYZ Company', color: '#FF9833' },
        { x: 2.5, y: 5, title: 'Full-time at PQR Company', color: '#33B5E5' },
        // Add more work experiences as needed
      ];
    
      const items = [
        { title: 'Completed', color: '#12939A' },
        { title: 'In Progress', color: '#79C7E3' },
        { title: 'Planned', color: '#1A3177' },
      ];

  return (
    <div>
      <XYPlot width={800} height={400}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="Timeline" />
        <YAxis title="Progress" />
        {items.map((item, index) => (
          <VerticalBarSeries
            key={index}
            data={data.map(point => ({ ...point, y: point.y + index * 2 }))}
            color={item.color}
          />
        ))}
        <MarkSeries data={workExperiences} />
      </XYPlot>
      <DiscreteColorLegend items={items} orientation="horizontal" />
    </div>
  )
}

export default Roadmap
