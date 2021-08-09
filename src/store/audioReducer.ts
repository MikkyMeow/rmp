import { TrackInfo } from './../common/types/index';
const defaultState = {
  path: '',
  trackName: '',
  author: '',
};

const SELECT_TRACK = 'SELECT_TRACK';

export const audioReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SELECT_TRACK:
      return { ...action.payload };
    default:
      return state;
  }
};

export const selectTrackAction = (payload: TrackInfo) => ({
  type: SELECT_TRACK,
  payload,
});
