import { createAction, props } from '@ngrx/store';

export const loadCurrencies = createAction('[Currency] Load Currencies');
export const loadCurrenciesSuccess = createAction('[Currency] Load Currencies Success', props<{ currencies: any[] }>());
export const loadCurrenciesFailure = createAction('[Currency] Load Currencies Failure', props<{ error: any }>());