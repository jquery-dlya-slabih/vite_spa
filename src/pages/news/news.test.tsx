import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import News from './news';

describe('News component test', () => {
  test('should render with content', () => {
    render(<News />);

    expect(screen.getByText(/news page/i)).toBeDefined();
  });
});
