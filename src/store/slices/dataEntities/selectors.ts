import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/store';

export const selectData = (state: RootState) => state.dataEntities.data;

export const selectIdFromDataIsString = createSelector(
  selectData,
  (data) => typeof data?.id === 'string'
);
