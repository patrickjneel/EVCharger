import { useQuery } from 'react-query';
import { mockChargingData } from '../mockData/mockData';

const fetchChargingStationData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return mockChargingData;
}

export const useChargingStations = () => {
  return useQuery('chargingStations', fetchChargingStationData)
}
