import authReducer, { logout, clearMessage } from '../authSlice';
import { describe, it, expect } from 'vitest';

describe('Auth Reducer', () => {
  // should handle logout correctly
  it('should handle logout correctly', () => {
    const initialState = {
      token: 'dummy-token',
      loading: false,
      error: null,
      successMessage: null,
    };

    const state = authReducer(initialState, logout());

    expect(state.token).toBeNull();
  });

  // should clear error and successMessage
  it('should clear error and successMessage', () => {
    const initialState = {
      token: null,
      loading: false,
      error: 'Error',
      successMessage: 'Success',
    };

    const state = authReducer(initialState, clearMessage());

    expect(state.error).toBeNull();
    expect(state.successMessage).toBeNull();
  });
});
