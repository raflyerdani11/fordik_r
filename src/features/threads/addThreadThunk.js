import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addThread = createAsyncThunk(
  'threads/addThread',
  async ({ title, body, category }) => {
    try {
      await axios.post(
        'https://forum-api.dicoding.dev/v1/threads',
        { title, body, category },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      return true;
    } catch (err) {
      alert(
        err.response?.data?.message || 'Terjadi Kesalahan Mengirim Komentar',
      );
    }
  },
);
