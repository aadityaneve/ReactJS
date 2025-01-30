import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    incrementCounter: (state, action: { type: string; payload: number }) => {
      return (state += action.payload);
    },
    decrementCounter: (state, action: { type: string; payload: number }) => {
      return (state -= action.payload);
    },
  },
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;
export default counterSlice.reducer;
