import React, { useCallback } from 'react';
import { Card, Typography, CardContent } from '@mui/material';

import ChargeIcon from '../../assets/charger.png';

const Dashboard = ({ data }: any) => {
  const calcAvg = (arr: any): number =>
    arr.reduce(
      (total: number, { maxCapacity }: any) => total + maxCapacity / arr.length,
      0
    );

  const calcAvg2 = (arr2: any): number =>
    arr2.reduce(
      (total: number, { currentChargingLoad }: any) =>
        total + currentChargingLoad / arr2.length,
      0
    );

  return (
    <div
      className="dashboard-container"
      style={{ width: '50%', margin: '10px', borderRight: '1px solid white' }}
    >
      <Typography variant="h4" style={{ padding: '0', margin: '0' }}>
        Dashboard Readouts
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
            <img
              style={{ height: '35px', width: '40px' }}
              src={ChargeIcon}
              alt="plug icon"
            />
          </CardContent>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>
            Average Max Capacity
          </span>
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
              style={{ height: '35px', width: '40px' }}
              src={ChargeIcon}
              alt="charger icon"
            />
          </CardContent>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>
            Average Charging Load
          </span>
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
              {Math.max(...data.map(({ currentLimit }: any) => currentLimit))}
            </Typography>
            <img
              style={{ height: '35px', width: '40px' }}
              src={ChargeIcon}
              alt="charger icon"
            />
          </CardContent>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>
            Max Current Limit
          </span>
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
              {Math.min(...data.map(({ currentLimit }: any) => currentLimit))}
            </Typography>
            <img
              style={{ height: '35px', width: '40px' }}
              src={ChargeIcon}
              alt="charger icon"
            />
          </CardContent>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>
            Min Current Limit
          </span>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
