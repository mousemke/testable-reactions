// @flow
import timestampActions from '../../constants/actionTypes';

export type TimestampState = {
  +now: ?Number,
};

export type TimestampAction = { type: 'GET_TIME', now: number };

const initialState = {
  now: null,
};

export default function(state: TimestampState = initialState, action: TimestampAction) {
  switch (action.type) {
    case timestampActions.GET_TIME:
      return getTime(state, action);
  }

  return state;
}

function getTime(state, action) {
  const { now } = action;

  return {
    ...state,
    now,
  };
}
