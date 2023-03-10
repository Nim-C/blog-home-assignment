import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import dataEntitiesReducer from 'src/store/slices/dataEntities';

export const store = configureStore({
  reducer: {
    dataEntities: dataEntitiesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
