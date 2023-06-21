import { averageFunc } from './utils';
import { mockChargingData } from '../mockData/mockData.ts';

describe('util functions', () => {
  describe('average function', () => {
    test('should handle empty values', () => {
      const nonValues = averageFunc();
      expect(nonValues).toEqual(0);
    });

    test('should be called with correct args and return correct avg with property currentChargingLoad', () => {
      const correctAvg = averageFunc(mockChargingData, 'currentChargingLoad');
      expect(correctAvg).toEqual(11.6475);
    });

    test('should be called with correct args and return correct avg with property maxCapacity', () => {
      const correctAvg = averageFunc(mockChargingData, 'maxCapacity');
      expect(correctAvg).toEqual(31.75);
    });
  });
});
