import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }) => {
    try {
      const res = await axios.post('https://forum-api.dicoding.dev/v1/login', {
        email,
        password,
      });
      window.location.href = '/';
      return res.data.data.token;
    } catch (err) {
      alert(err.response?.data?.message || 'Terjadi Kesalahan saat Login');
    }
  },
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ name, email, password }) => {
    try {
      await axios.post('https://forum-api.dicoding.dev/v1/register', {
        name,
        email,
        password,
      });
      window.location.href = '/login';
    } catch (err) {
      alert(err.response?.data?.message || 'Terjadi Kesalahan saat Register');
    }
  },
);
