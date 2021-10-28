import { createReducer, createAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const toggle = createAction<boolean, 'toggle'>('toggle');
const change = createAction<boolean, 'change'>('change');

const exampleReducer = createReducer(false, (builder) =>
  builder
    .addCase(toggle, (state) => !state)
    .addCase(change, (state, action) => action.payload)
);

export default persistReducer(
  {
    key: 'example',
    storage,
  },
  exampleReducer
);
