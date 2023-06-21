import React, { FC, useState } from 'react';
import {
  Card as MUICard,
  Typography,
  CardContent,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';

import './cardStyles.css';

const Card = ({ data }: any): any => {
  const [filterValues, setFilterValues] = useState<any>(data);
  const menuItemsArr: { name: string; value: string }[] = [
    { name: 'ONLINE', value: 'ONLINE' },
    { name: 'OFFLINE', value: 'OFFLINE' },
    { name: 'ALL', value: 'ALL' },
  ];

  const setValues = (filterValues: any, status: any) => {
    if (status === 'ALL') return setFilterValues(data);
    return setFilterValues(
      filterValues.filter(({ onlineStatus }: any) => onlineStatus === status)
    );
  };

  return (
    <div className="card-container" style={{ width: '50%', margin: '10px' }}>
      <Typography variant="h4">Charging Locations</Typography>
      <InputLabel style={{ color: 'white' }}>Filter By:</InputLabel>
      <FormControl>
        <Select
          defaultValue="ALL"
          label="Filter By"
          style={{ width: '250px', backgroundColor: 'white' }}
          size="small"
          onChange={({ target: { value } }) => setValues(data, value)}
        >
          {menuItemsArr.map(({ name, value }) => (
            <MenuItem key={name} value={value}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div
        className="scroll-container"
        style={{ maxHeight: '400px', overflow: 'scroll' }}
      >
        {filterValues
          ? filterValues.map(
              ({ id, name, vendor, location, onlineStatus, current }: any) => (
                <MUICard
                  key={id}
                  variant="outlined"
                  style={{
                    margin: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <CardContent>
                    <Typography>{name}</Typography>
                    <Typography>Location: {location}</Typography>
                    <Typography>Vendor: {vendor}</Typography>
                    <Typography>Charging Type: {current}</Typography>
                  </CardContent>
                  <CardContent>
                    <span
                      className={
                        onlineStatus === 'ONLINE' ? 'online' : 'offline'
                      }
                    >
                      {onlineStatus}
                    </span>
                  </CardContent>
                </MUICard>
              )
            )
          : null}
      </div>
    </div>
  );
};

export default Card;
