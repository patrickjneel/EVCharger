import { useChargingStations } from './queries/chargingStations';
import CircularProgress from '@mui/material/CircularProgress';

import Dashboard from './components/Dashboard/Dashboard';
import Card from './components/Cards/Card';
import Chart from './components/Charts/Chart';
import AmpLogo from '../src/assets/ampcontrol_vertical_logo_black.png';
import './App.css';

const App = () => {
  const { data, isLoading, isError } = useChargingStations();
  return (
    <div className="App-header">
      <img
        src={AmpLogo}
        alt="amp-control-logo"
        style={{
          height: '115px',
          width: '300px',
        }}
      />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <div
            className="locations-dashboard"
            style={{ display: 'flex', flexDirection: 'row', width: '100%' }}
          >
            <Dashboard data={data?.data} />
            <Card data={data?.data} />
          </div>
          <Chart data={data?.data} />
        </>
      )}
      {isError && <div>Error pleasue Try again...</div>}
    </div>
  );
};

export default App;
