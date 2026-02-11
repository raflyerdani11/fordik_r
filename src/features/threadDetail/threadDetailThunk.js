import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchThreadDetail = createAsyncThunk(
  'threadDetail/fetch',
  async (threadId) => {
    const res = await axios.get(
      `https://forum-api.dicoding.dev/v1/threads/${threadId}`,
    );
    return res?.data?.data?.detailThread;
  },
);

export const addComment = createAsyncThunk(
  'threadDetail/addComment',
  async ({ threadId, content }) => {
    try {
      const res = await axios.post(
        `https://forum-api.dicoding.dev/v1/threads/${threadId}/comments`,
        { content },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      return res?.data?.data?.comment;
    } catch (err) {
      alert(
        err.response?.data?.message || 'Terjadi Kesalahan Mengirim Komentar',
      );
    }
  },
);
