import React, { FC } from 'react';
import { Card, Typography, CardContent } from '@mui/material';

import ChargeIcon from '../../assets/charger.png';
import { ChargerLocationObject } from '../../types/types';
import './dashboard.styles.css';
import { averageFunc } from '../../utils/utils';

interface DashBoardProps {
  data: ChargerLocationObject[] | undefined;
}

const Dashboard: FC<DashBoardProps> = ({ data }) => {
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
            <Typography>
              {averageFunc(data, 'maxCapacity').toFixed(2)}
            </Typography>
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
            <Typography>
              {averageFunc(data, 'currentChargingLoad').toFixed(2)}
            </Typography>
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
