import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { Persistor } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'playhouse-root',
  storage
}

// TODO: resolve redux-persist failed to create sync storage. falling back to noop storage.
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const makeStore = () => configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

// persistor
export const store = makeStore(); 
export const persistor: Persistor = persistStore(store);

// types
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];