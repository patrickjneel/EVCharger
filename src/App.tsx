import { useChargingStations } from './queries/chargingStations';
import CircularProgress from '@mui/material/CircularProgress';

import Dashboard from './components/Dashboard/Dashboard';
import Card from './components/Cards/Card';
import Chart from './components/Charts/Chart';
import './App.css';

const App = () => {
  const { data, isLoading, isError } = useChargingStations();
  console.log('data', data);

  return (
    <div className="App-header">
      {isLoading && <CircularProgress />}
      {isError && <div>Error pleasue Try again...</div>}
      <Dashboard data={data?.data} />
      <Card data={data?.data} />
      <Chart data={data?.data} />
    </div>
  );
};

export default App;
