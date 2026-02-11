import { createSlice } from '@reduxjs/toolkit';
import { fetchThreadDetail, addComment } from './threadDetailThunk';

const threadDetailSlice = createSlice({
  name: 'threadDetail',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearThreadDetail: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchThreadDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchThreadDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchThreadDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.data.comments.unshift(action.payload);
      });
  },
});

export const { clearThreadDetail } = threadDetailSlice.actions;
export default threadDetailSlice.reducer;
