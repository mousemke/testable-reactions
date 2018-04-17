// @flow
import fishActions from '../../constants/actionTypes';

export type FishState = {
  +timestamp: ?Number,
};

export type FishAction = { type: 'VIEW_FISH', timestamp: number };

const initialState = {
  timestamp: null,
};

export default function(state: FishState = initialState, action: FishAction) {
  switch (action.type) {
    case fishActions.VIEW_FISH:
      return setViewTime(state, action);
  }

  return state;
}

function setViewTime(state, action) {
  const { timestamp } = action;

  return {
    ...state,
    timestamp,
  };
}
