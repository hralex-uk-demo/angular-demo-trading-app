import { createReducer, on } from '@ngrx/store';
import * as CurrencyActions from './currency.actions';

export const initialState: any[] = [];

export const currencyReducer = createReducer(
  initialState,
  on(CurrencyActions.loadCurrenciesSuccess, (state, { currencies }) => {
    console.log('NGRX Currencies data added to state:', currencies); // 
    return [...currencies];
  }),
);

export function reducer(state: any[] | undefined, action: any) {
  return currencyReducer(state, action);
}

