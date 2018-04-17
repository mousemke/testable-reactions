import type { FishAction, FishState } from '../browser/redux/reducers/fish';

declare module 'testable-reactions-types' {
  // start redux types
  declare type Dispatch = (action: Action | ThunkAction) => void;

  declare type ThunkAction = (
    dispatch: Dispatch,
    getState: GetState
  ) => Promise<*> | void;

  declare type GetState = () => Object;

  declare type Action =
    | FishAction;
}
