import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Card from './Card';
import mockData from '../../mockData/mockData';

jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  QueryClientProvider: ({ children }) => <>{children}</>,
}));

describe('Card Tests', () => {
  test('should render basic UI elements', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Card data={mockData} />
      </QueryClientProvider>
    );

    expect(screen.getByText('Charging Locations')).toBeInTheDocument();
    expect(screen.getByText('Filter By:')).toBeInTheDocument();
  });

  test('should have default for select as ALL', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Card data={mockData} />
      </QueryClientProvider>
    );

    expect(screen.getByText('ALL')).toBeInTheDocument();
  });

  test('should filter all cards by status', () => {});
});
