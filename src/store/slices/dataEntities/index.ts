/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IDataEntity, Nullable } from 'src/types';
import { fetchDataEntities } from './thunks';

export interface IMessagesState {
  data: Nullable<IDataEntity>;
}

const initialState: IMessagesState = {
  data: null,
};

export const dataEntitiesSlice = createSlice({
  name: 'dataEntities',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    doSomething: (state, { payload }: PayloadAction<any>) => {},
  },
  extraReducers: (builder) => {
    builder
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .addCase(fetchDataEntities.pending, (state: IMessagesState) => {})
      .addCase(fetchDataEntities.fulfilled, (state, { payload }) => {
        state.data = payload;
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .addCase(fetchDataEntities.rejected, (state) => {});
  },
});

export const { doSomething } = dataEntitiesSlice.actions;

export default dataEntitiesSlice.reducer;
