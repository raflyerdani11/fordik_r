import { loginUser, registerUser } from '../authThunk';
import axios from 'axios';
import { vi } from 'vitest';
import { describe, it, expect } from 'vitest';

vi.mock('axios');

describe('Auth Thunk', () => {
  // should return token when login success
  it('should return token when login success', async () => {
    axios.post.mockResolvedValue({
      data: {
        data: {
          token: 'test-token',
        },
      },
    });

    const dispatch = vi.fn();
    const thunk = loginUser({ email: 'a@test.com', password: '123456' });

    const result = await thunk(dispatch, () => ({}), null);

    expect(result.payload).toBe('test-token');
  });

  // should resolve registerUser without error
  it('should resolve registerUser without error', async () => {
    axios.post.mockResolvedValue({});

    const dispatch = vi.fn();
    const thunk = registerUser({
      name: 'User',
      email: 'test@mail.com',
      password: '123456',
    });

    const result = await thunk(dispatch, () => ({}), null);

    expect(result.type).toContain('fulfilled');
  });
});
