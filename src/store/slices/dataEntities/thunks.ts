import { createAsyncThunk } from '@reduxjs/toolkit';

import { IDataEntity } from 'src/types';

export const fetchDataEntities = createAsyncThunk<IDataEntity>(
  'dataEntities/fetchDataEntities',
  async () => {
    const response = await new Promise<IDataEntity>((resolve) => {
      resolve({ id: '' });
    });
    return response;
  }
);
