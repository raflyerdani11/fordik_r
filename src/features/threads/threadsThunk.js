import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchThreads = createAsyncThunk(
  'threads/fetchThreads',
  async () => {
    const threadsRes = await axios.get(
      'https://forum-api.dicoding.dev/v1/threads',
    );
    const usersRes = await axios.get('https://forum-api.dicoding.dev/v1/users');

    const threads = threadsRes.data.data.threads;
    const users = usersRes.data.data.users;

    return threads.map((t) => ({
      ...t,
      authorName: users.find((u) => u.id === t.ownerId)?.name,
    }));
  },
);
