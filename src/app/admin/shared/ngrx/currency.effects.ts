import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as CurrencyActions from './currency.actions';
import { AdminService } from '../service/admin.service';

@Injectable()
export class CurrencyEffects {

  loadCurrencies$ = createEffect(() =>
  this.actions$.pipe(
    ofType(CurrencyActions.loadCurrencies),
    mergeMap(() =>
      this.adminService.getCurrenciesDetails().pipe(
        map((currencies) => {
          console.log('NGRX > Currencies data retrieved:', currencies); // Add this log statement
          return CurrencyActions.loadCurrenciesSuccess({ currencies })
        }),
        catchError((error) => {
          console.error('NGRX > Error fetching currencies:', error); // Add this log statement
          return of(CurrencyActions.loadCurrenciesFailure({ error }))
        })
      )
    )
  )
);

  constructor(
    private actions$: Actions,
    private adminService: AdminService // Replace with your currency service
  ) {}

}
