import { FC, useState } from 'react';
import {
  Card as MUICard,
  Typography,
  CardContent,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';

import './card.styles.css';
import { ChargerLocationObject } from '../../types/types';

interface CardProps {
  data: ChargerLocationObject[] | undefined;
}

const Card: FC<CardProps> = ({ data }) => {
  const [filterValues, setFilterValues] = useState<any>(data);
  const menuItemsArr: { name: string; value: string }[] = [
    { name: 'ONLINE', value: 'ONLINE' },
    { name: 'OFFLINE', value: 'OFFLINE' },
    { name: 'ALL', value: 'ALL' },
  ];

  const setValues = (filterValues: any, status: string) => {
    if (status === 'ALL') return setFilterValues(data);
    return setFilterValues(
      filterValues.filter(({ onlineStatus }: any) => onlineStatus === status)
    );
  };

  return (
    <div className="card-container">
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
      <div className="scroll-container">
        {filterValues
          ? filterValues.map(
              ({
                id,
                name,
                vendor,
                location,
                onlineStatus,
                current,
              }: ChargerLocationObject) => (
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
