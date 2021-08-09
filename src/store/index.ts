import { combineReducers, createStore } from 'redux';
import { audioReducer } from './audioReducer';
import { playlistReducer } from './playlistReducer';

const rootReducer = combineReducers({
  playlist: playlistReducer,
  audio: audioReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
