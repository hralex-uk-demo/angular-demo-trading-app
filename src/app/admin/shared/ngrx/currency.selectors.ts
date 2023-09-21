import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCurrency from './currency.reducer';

export const selectCurrencyState = createFeatureSelector<any>('currency');

export const selectCurrencies = createSelector(
  selectCurrencyState,
  (state) => state
);
