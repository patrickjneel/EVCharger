import { useQuery } from 'react-query';
import { mockChargingData } from '../mockData/mockData';
import { ChargerLocationObject } from '../types/types';

const fetchChargingStationData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return mockChargingData;
}

export const useChargingStations = () => {
  return useQuery('chargingStations', fetchChargingStationData)
}
