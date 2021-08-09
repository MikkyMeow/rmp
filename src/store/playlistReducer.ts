import { tracklist } from 'mock/tracklist';

const defaultState = {
  playlist: tracklist,
};

export const playlistReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
