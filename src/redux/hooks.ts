import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import {
  ActionCreator,
  ActionCreatorsMapObject,
  AsyncThunk,
  bindActionCreators
} from '@reduxjs/toolkit';
import { useMemo } from 'react';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type BoundActions<Actions extends ActionCreatorsMapObject> = {
  [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any>
    ? BoundAsyncThunk<Actions[key]>
    : Actions[key];
};

type BoundAsyncThunk<Actions extends ActionCreator<any>> = (
  ...args: Parameters<Actions>
) => ReturnType<ReturnType<Actions>>;

export const useActionCreators = <
  Actions extends ActionCreatorsMapObject = ActionCreatorsMapObject
>(
  actions: Actions
): BoundActions<Actions> => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), []);
};
