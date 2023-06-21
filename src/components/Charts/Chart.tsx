import React, { FC } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { barOptions, pieOptions } from './chartUtils';
import { ChargerLocationObject } from '../../types/types';

interface ChartProps {
  data: ChargerLocationObject[] | undefined;
}

const Chart: FC<ChartProps> = ({ data }) => {
  const chargingNames: string[] | undefined =
    data !== undefined
      ? data?.map(({ name }: ChargerLocationObject) => name)
      : [];
  const chartData: any = data?.map(
    ({ name, maxCapacity }: ChargerLocationObject) => ({
      name,
      data: [maxCapacity],
    })
  );

  const chargerLocations: Array<{ name: string; y: number }> = data?.reduce(
    (accu: any, { location }: ChargerLocationObject) => {
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
