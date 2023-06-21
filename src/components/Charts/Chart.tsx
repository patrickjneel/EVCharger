import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { barOptions, pieOptions } from './chartUtils';

const Chart = ({ data }: any) => {
  const chargingNames = data.map(({ name }: any) => name);
  const chartData = data.map(({ name, maxCapacity }: any) => ({
    name,
    data: [maxCapacity],
  }));

  const chargerLocations = data.reduce(
    (accu: [name: any, y: number], { location }: any) => {
      const foundObj = accu.find((obj: any) => obj.name === location);
      if (foundObj) foundObj.y++;
      else {
        const newObj = { name: location, y: 1 };
        accu.push(newObj);
      }
      return accu;
    },
    []
  );

  console.log('chargerLocations', chargerLocations);

  const barGraphOptions = barOptions(chargingNames, chartData);
  const pieChartOptions = pieOptions(chargerLocations);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        borderTop: '1px solid white',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <div
        className="chart-container"
        style={{ margin: '10px', display: 'flex', flexDirection: 'row' }}
      >
        <div className="chart-wrapper" style={{ margin: '15px' }}>
          <HighchartsReact highcharts={Highcharts} options={barGraphOptions} />
        </div>
        <div className="chart-wrapper" style={{ margin: '15px' }}>
          <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Chart;
