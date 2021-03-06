// @flow
export const TIMESTAMP_ACTION_TYPES = {
  GET_TIME: 'GET_TIME',
};

export const PAGE_HEADER_ACTION_TYPES = {
  CLICK_SEARCH_BUTTON: 'CLICK_SEARCH_BUTTON',
  CHANGE_SEARCH_TERM: 'CHANGE_SEARCH_TERM',
};

export default Object.assign(
  {},
  TIMESTAMP_ACTION_TYPES,
  PAGE_HEADER_ACTION_TYPES
);
