import React from 'react';
import { render, screen } from '@testing-library/react';
import Register from '../Register';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../features/auth/authSlice';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

describe('Register Component', () => {
  // should render register inputs correctly
  it('should render register inputs correctly', () => {
    const store = configureStore({ reducer: { auth: authReducer } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByPlaceholderText('NAME')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('EMAIL')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('PASSWORD')).toBeInTheDocument();
  });
});
