import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../Login';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../features/auth/authSlice';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

describe('Login Component', () => {
  // should allow user to type email and password
  it('should allow user to type email and password', async () => {
    const store = configureStore({ reducer: { auth: authReducer } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>,
    );

    //qazqazqaz

    await userEvent.type(screen.getByPlaceholderText('EMAIL'), 'test@mail.com');
    await userEvent.type(screen.getByPlaceholderText('KATA SANDI'), '123456');

    expect(screen.getByPlaceholderText('EMAIL')).toHaveValue('test@mail.com');
    expect(screen.getByPlaceholderText('KATA SANDI')).toHaveValue('123456');
  });
});
