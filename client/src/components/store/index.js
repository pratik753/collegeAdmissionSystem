import { configureStore } from '@reduxjs/toolkit';

import AllStatus from './AllStatus';
const store = configureStore({
  reducer: { auth: AllStatus },
});
export default store;