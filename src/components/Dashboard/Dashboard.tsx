import React, { FC } from 'react';
import { Card, Typography, CardContent } from '@mui/material';

import ChargeIcon from '../../assets/charger.png';
import { ChargerLocationObject } from '../../types/types';
import './dashboard.styles.css';

interface DashBoardProps {
  data: ChargerLocationObject[] | undefined;
}

const Dashboard: FC<DashBoardProps> = ({ data }) => {
  const calcAvg = (arr: any): number =>
    arr.reduce(
      (total: number, { maxCapacity }: ChargerLocationObject) =>
        total + maxCapacity / arr.length,
      0
    );

  const calcAvg2 = (arr2: any): number =>
    arr2.reduce(
      (total: number, { currentChargingLoad }: ChargerLocationObject) =>
        total + currentChargingLoad / arr2.length,
      0
    );

  return (
    <div className="dashboard-container">
      <Typography variant="h4">Dashboard Readouts</Typography>
      <div className="dashboard-card-container">
        <Card
          variant="outlined"
          style={{ width: '320px', margin: '10px', textAlign: 'center' }}
        >
          <CardContent
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography>{calcAvg(data).toFixed(2)}</Typography>
            <img className="dashboard-icon" src={ChargeIcon} alt="plug icon" />
          </CardContent>
          <span className="card-title">Average Max Capacity</span>
        </Card>
        <Card
          variant="outlined"
          style={{ width: '320px', margin: '10px', textAlign: 'center' }}
        >
          <CardContent
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography>{calcAvg2(data).toFixed(2)}</Typography>
            <img
              className="dashboard-icon"
              src={ChargeIcon}
              alt="charger icon"
            />
          </CardContent>
          <span className="card-title">Average Charging Load</span>
        </Card>
        <Card
          variant="outlined"
          style={{ width: '320px', margin: '10px', textAlign: 'center' }}
        >
          <CardContent
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography>
              {data !== undefined
                ? Math.max(
                    ...data?.map(
                      ({ currentLimit }: ChargerLocationObject) => currentLimit
                    )
                  )
                : 0}
            </Typography>
            <img
              className="dashboard-icon"
              src={ChargeIcon}
              alt="charger icon"
            />
          </CardContent>
          <span className="card-title">Max Current Limit</span>
        </Card>
        <Card
          variant="outlined"
          style={{ width: '320px', margin: '10px', textAlign: 'center' }}
        >
          <CardContent
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography>
              {data !== undefined
                ? Math.min(
                    ...data?.map(
                      ({ currentLimit }: ChargerLocationObject) => currentLimit
                    )
                  )
                : 0}
            </Typography>
            <img
              className="dashboard-icon"
              src={ChargeIcon}
              alt="charger icon"
            />
          </CardContent>
          <span className="card-title">Min Current Limit</span>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
