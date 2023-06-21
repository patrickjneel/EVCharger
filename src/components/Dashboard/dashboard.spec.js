import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Dashboard from './Dashboard';
import { averageFunc } from '../../utils/utils.ts';
import mockData from '../../mockData/mockData';

jest.mock('../../utils/utils.ts');

jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  QueryClientProvider: ({ children }) => <>{children}</>,
}));

describe('Dashboard Tests', () => {
  test('should render the correct UI information', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Dashboard data={mockData} />
      </QueryClientProvider>
    );

    expect(screen.getByText('Dashboard Readouts')).toBeInTheDocument();
    expect(screen.getByText('Average Max Capacity')).toBeInTheDocument();
    expect(screen.getByText('Average Charging Load')).toBeInTheDocument();
    expect(screen.getByText('Max Current Limit')).toBeInTheDocument();
    expect(screen.getByText('Min Current Limit')).toBeInTheDocument();
  });

  test('should call average func with correct args', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Dashboard data={mockData} />
      </QueryClientProvider>
    );
    expect(averageFunc).toBeCalledTimes(2);
    expect(averageFunc).toHaveBeenCalledWith(mockData, 'maxCapacity');
    expect(averageFunc).toHaveBeenCalledWith(mockData, 'currentChargingLoad');
  });
});
