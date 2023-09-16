import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'; 

import { Apollo, gql } from 'apollo-angular';

import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class GraphQLService {

  constructor(private apollo: Apollo) {
  }

  getStockDetails(): Observable<any> {
    return this.apollo
      .query({
        query: gql`
          query listInvestaStocks {
            listInvestaStocks {
              items {
                id
                stockSymbol
                companyName
                currencySymbol
                exchangeCode
                sectorName
                sharePrice
                status
              }
            }
          }
        `,
        fetchPolicy: 'network-only', // Force a network request
      })
      .pipe(
        map((result: any) => {
          console.log('GraphQL result', result.data.listInvestaStocks);
          return result.data.listInvestaStocks.items;
        })
      );
  }

  updateStockDetails(stockDataToUpdate: any): Observable<any> {
    console.log("GraphQL updateStockDetails() method called", stockDataToUpdate);

    const UPDATE_STOCK = gql`
            mutation UpdateInvestaStock($updateinvestastocksinput: UpdateInvestaStocksInput!) {
              updateInvestaStocks(input: $updateinvestastocksinput) {
                id
                stockSymbol
                companyName
                currencySymbol
                sectorName
                exchangeCode
                sharePrice
                status
              }
            }
          `;


    var updateStockJSON = {};
    
    updateStockJSON =  {
        id: stockDataToUpdate.id,
        stockSymbol : stockDataToUpdate.stockSymbol,
        companyName : stockDataToUpdate.companyName,
        currencySymbol : stockDataToUpdate.currencySymbol,
        sectorName :stockDataToUpdate.sectorName,
        exchangeCode : stockDataToUpdate.exchangeCode,
        status : stockDataToUpdate.status
      };   

    console.log("GraphQL updateStockDetails() updateStockJSON >", updateStockJSON);
    return new Observable((observer) => {
        this.apollo
        .mutate({
          mutation: UPDATE_STOCK,
          variables: {
            updateinvestastocksinput: updateStockJSON
          }
        })
        .subscribe(
          ({ data }) => {
            console.log('got data', data);
            observer.next(data);
            observer.complete();
          },
          (error) => {
            console.log('there was an error sending the query', error);
            observer.error(error);
          }
          );
        });
  }

  
  insertStockDetails(stockDataToInsert: any): Observable<any> {
    const INSERT_STOCK = gql`
      mutation createInvestaStocks($createinvestastocksinput: CreateInvestaStocksInput!) {
        createInvestaStocks(input: $createinvestastocksinput) {
          id
          stockSymbol
          companyName
          currencySymbol
          sectorName
          exchangeCode
          sharePrice
          status
        }
      }
    `;

    // Generate a new UUID
    const newUUID = uuidv4();

    const newStockJSON = {
      id: newUUID,
      stockSymbol: stockDataToInsert.stockSymbol,
      companyName: stockDataToInsert.companyName,
      currencySymbol: stockDataToInsert.currencySymbol,
      sectorName: stockDataToInsert.sectorName,
      exchangeCode: stockDataToInsert.exchangeCode,
      sharePrice: 0.0,
      status: 'new',
    };

    return new Observable((observer) => {
      this.apollo
        .mutate({
          mutation: INSERT_STOCK,
          variables: {
            createinvestastocksinput: newStockJSON,
          },
        })
        .subscribe(
          ({ data }) => {
            console.log('got data', data);
            observer.next(data);
            observer.complete();
          },
          (error) => {
            console.log('there was an error sending the query', error);
            observer.error(error);
          }
        );
    });
  }

}