import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFound from './notFound';

describe('NotFound component test', () => {
  test('should render with content', () => {
    render(<NotFound />);

    expect(screen.getByText(/woopsie/i)).toBeDefined();
  });
});
