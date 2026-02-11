import { createSlice } from '@reduxjs/toolkit';
import { fetchThreads } from './threadsThunk';
import { addThread } from './addThreadThunk';

const threadsSlice = createSlice({
  name: 'threads',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchThreads.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchThreads.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchThreads.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addThread.pending, (state) => {
        state.loading = true;
      })
      .addCase(addThread.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addThread.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default threadsSlice.reducer;
