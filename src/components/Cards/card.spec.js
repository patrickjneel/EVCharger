import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Card from './Card';
import { mockChargingData } from '../../mockData/mockData.ts';

jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  QueryClientProvider: ({ children }) => <>{children}</>,
}));

describe('Card Tests', () => {
  test('should render basic UI elements', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Card data={mockChargingData} />
      </QueryClientProvider>
    );

    expect(screen.getByText('Charging Locations')).toBeInTheDocument();
    expect(screen.getByText('Filter By:')).toBeInTheDocument();
  });

  test('should have default for select as ALL', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Card data={mockChargingData} />
      </QueryClientProvider>
    );

    expect(screen.getByText('ALL')).toBeInTheDocument();
    expect(screen.getAllByText('OFFLINE')[0]).toBeInTheDocument();
    expect(screen.getAllByText('ONLINE')[0]).toBeInTheDocument();
  });

  test('should have both ONLINE and OFFLINE by default', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Card data={mockChargingData} />
      </QueryClientProvider>
    );

    expect(screen.getAllByText('OFFLINE')[0]).toBeInTheDocument();
    expect(screen.getAllByText('ONLINE')[0]).toBeInTheDocument();
  });

  test('should show only ONLINE when a user selects ONLINE', () => {});
});
