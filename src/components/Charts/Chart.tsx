import { FC } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { barOptions, pieOptions } from './chartUtils';
import { ChargerLocationObject } from '../../types/types';
import './chart.styles.css';

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
      const foundObj = accu.find(
        (obj: ChargerLocationObject) => obj.name === location
      );
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
    <div className="chart-container">
      <div className="chart-wrapper" style={{ margin: '15px' }}>
        <HighchartsReact
          data-testid="bar-chart"
          highcharts={Highcharts}
          options={barGraphOptions}
        />
      </div>
      <div className="chart-wrapper" style={{ margin: '15px' }}>
        <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
      </div>
    </div>
  );
};

export default Chart;
