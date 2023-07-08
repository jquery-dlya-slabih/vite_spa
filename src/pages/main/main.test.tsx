import { describe, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from './main';

describe('Main component test', () => {
  test('should render with content', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    expect(screen.getByText('Vite + React')).toBeDefined();
  });

  test('value should change on button click', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    const button = screen.getByText('count is 0');

    fireEvent.click(button);
    expect(button.textContent).toBe('count is 1');
  });
});
