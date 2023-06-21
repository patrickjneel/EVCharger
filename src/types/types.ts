export interface ChargerLocationData {
  id: string;
  created: string;
  updated: string;
  name: string;
  networkId: string;
  allowAllIdTags: boolean;
  customName: string;
  firmwareVersion: string;
  latitude: number;
  location: string;
  longitude: number;
  modelName: string;
  ocppId: string;
  onlineStatus: string;
  position: {
    orientation: string;
    x: number;
    y: number;
  };
  protocol: string;
  source: string;
  vendor: string;
  powerSplit: boolean;
  maxCapacity: number;
  active: boolean;
  current: string;
  currentChargingLoad: number;
  currentLimit: number;
  lastSessionStarted: string;
  meterType: string;
  serialNumber: string;
}
