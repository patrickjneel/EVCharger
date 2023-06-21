import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Chart from './Chart';
import { mockChargingData } from '../../mockData/mockData.ts';

jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  QueryClientProvider: ({ children }) => <>{children}</>,
}));

describe('Chart tests', () => {
  test('should render correct UI elements', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Chart data={mockChargingData} />
      </QueryClientProvider>
    );

    expect(screen.getByLabelText('Max Capacity')).toBeInTheDocument();
    expect(screen.getByLabelText('Locations By State')).toBeInTheDocument();
  });
});
