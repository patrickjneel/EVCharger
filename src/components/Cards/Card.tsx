import React, { FC } from 'react';
import { Card as MUICard, Typography, CardContent } from '@mui/material';

const Card = ({ data }: any): any => {
  return (
    <div className="card-container">
      {data
        ? data.map(({ name, vendor, onlineStatus }: any) => (
            <MUICard variant="outlined" style={{ margin: '10px' }}>
              <CardContent>
                <Typography>{name}</Typography>
                <Typography>{vendor}</Typography>
              </CardContent>
              <CardContent>
                <Typography color="text.secondary">{onlineStatus}</Typography>
              </CardContent>
            </MUICard>
          ))
        : null}
    </div>
  );
};

export default Card;
