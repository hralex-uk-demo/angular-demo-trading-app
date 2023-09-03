import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { Stockdetails } from '../model/stockdetails';
import { Customerdetails } from '../model/customerdetails';
import { HttpHeaders } from "@angular/common/http";
import { Base64ConversionService } from './base64-conversion.service';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private getStocksAPIUrl    = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_get_stocks?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private insertStockAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_insert_stock?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private updateStockAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_update_stock?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private deleteStockAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_delete_stock?apiKey=2b1b02b0a6b64bc9b817cfd414148795';

  private getCustomersAPIUrl    = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_get_customers?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private insertCustomerAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_insert_customer?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private updateCustomerAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_update_customer?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private deleteCustomerAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_delete_customer?apiKey=2b1b02b0a6b64bc9b817cfd414148795';

  private getCurrenciesAPIUrl    = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_get_currencies?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private insertCurrencyAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_insert_currency?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private updateCurrencyAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_update_currency?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private deleteCurrencyAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_delete_currency?apiKey=2b1b02b0a6b64bc9b817cfd414148795';

  private getSubscriptionsAPIUrl    = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_get_subscriptions?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private insertSubscriptionAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_insert_subscription?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private updateSubscriptionAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_update_subscription?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private deleteSubscriptionAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_delete_subscription?apiKey=2b1b02b0a6b64bc9b817cfd414148795';

  private getSectorsAPIUrl    = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_get_sectors?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private insertSectorAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_insert_sector?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private updateSectorAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_update_sector?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private deleteSectorAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_delete_sector?apiKey=2b1b02b0a6b64bc9b817cfd414148795';

  private getExchangesAPIUrl    = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_get_exchanges?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private insertExchangeAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_insert_exchange?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private updateExchangeAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_update_exchange?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private deleteExchangeAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_delete_exchange?apiKey=2b1b02b0a6b64bc9b817cfd414148795';


  constructor(private http: HttpClient, private base64ConversionService: Base64ConversionService) {
  }

  getStockDetails(): Observable<any> {
      return this.http.get<any>(`${this.getStocksAPIUrl}`);
  }

  getCurrenciesDetails(): Observable<any> {
    return this.http.get<any>(`${this.getCurrenciesAPIUrl}`);
  }

  getSubscriptionsDetails(): Observable<any> {
    return this.http.get<any>(`${this.getSubscriptionsAPIUrl}`);
  }

  getSectorsDetails(): Observable<any> {
    return this.http.get<any>(`${this.getSectorsAPIUrl}`);
  }

  getExchangesDetails(): Observable<any> {
    return this.http.get<any>(`${this.getExchangesAPIUrl}`);
  }

  addStock = async (newStockOJSON: any) => {
    console.log("addStock() method called > ", newStockOJSON);
    let response: any = {};
    try {
      let requestStockJson: any = {
        exchange: newStockOJSON.stockExchange,
        companyName: newStockOJSON.companyName,
        stockSymbol: newStockOJSON.stockSymbol,
        type: newStockOJSON.stockType,
        status: 'New',
        sharePrice: 0.01
      };

      console.log("newStockOJSON.stockIcon >", newStockOJSON.stockIcon);
      console.log("stockIcon.name >", newStockOJSON.stockIcon.name);
      console.log("stockIcon.name >", newStockOJSON.stockIcon.type);

      console.log("converetd file >", this.base64ConversionService.convertFileToBase64(newStockOJSON.stockIcon));

      let headers = new HttpHeaders();
      headers.append("Content-Type", "application/json");

      response = await this.http
        .post(this.insertStockAPIUrl, requestStockJson, { headers })
        .toPromise();

      return response;

    } catch (error) {
      console.log(error);
    }
  }

  updateStock(updateStockOJSON: any): Promise<any> {
      let response: any = {};

      console.log("updateStock() method called ", updateStockOJSON);

      let requestStockJson: any = {
        id: updateStockOJSON.id,
        exchange: updateStockOJSON.stockExchange,
        companyName: updateStockOJSON.companyName,
        stockSymbol: updateStockOJSON.stockSymbol,
        type: updateStockOJSON.stockType,
        status: updateStockOJSON.status,
        sharePrice: updateStockOJSON.sharePrice
      };

      let headers = new HttpHeaders();
      headers.append("Content-Type", "application/json");
        return this.http
                      .post(this.updateStockAPIUrl, requestStockJson, { headers })
                      .toPromise()
        .then(response => {
          console.log("Stock deleted successfully.", response);
          return response;
        })
        .catch(error => {
          console.error("Error deleting stock:", error);
          throw error; // Rethrow the error to be caught by the caller
        });
  }

  
  deleteStock(stockId: any): Promise<any> {
    let response: any = {};

      let requestStockJson: any = {
        id: stockId
      };

      let headers = new HttpHeaders();
      headers.append("Content-Type", "application/json");
        return this.http
        .post(this.deleteStockAPIUrl, requestStockJson, { headers })
        .toPromise()
        .then(response => {
          console.log("Stock deleted successfully.", response);
          return response;
        })
        .catch(error => {
          console.error("Error deleting stock:", error);
          throw error; // Rethrow the error to be caught by the caller
        });
  }

  getCustomerDetails(): Observable<any> {
    return this.http.get<any>(`${this.getCustomersAPIUrl}`);
  }

  addCustomer = async (newCustomer: any) => {
    let response: any = {};

    try {

      let requestCustomerJson: any = {
        firstName: newCustomer.firstName,
        lastName: newCustomer.lastName,
        mobileNumber: newCustomer.mobileNumber,
        totalInvestment: newCustomer.totalInvestment,
        currentValue : newCustomer.totalInvestment,
        subscriptionType: newCustomer.subscriptionType
      };

      let headers = new HttpHeaders();
      headers.append("Content-Type", "application/json");

      response = await this.http
        .post(this.insertCustomerAPIUrl, requestCustomerJson, { headers })
        .toPromise();

      return response;

    } catch (error) {
      console.log(error);
    }
  }

  updateCustomer(updateCustomer: any): Promise<any> {
      let response: any = {};

      console.log("updateCustomer() method called ", updateCustomer);

      let requestCustomerJson: any = {
        id: updateCustomer.id,
        firstName: updateCustomer.firstName,
        lastName: updateCustomer.lastName,
        mobileNumber: updateCustomer.mobileNumber,
        totalInvestment: updateCustomer.totalInvestment,
        subscriptionType: updateCustomer.subscriptionType
      };

      let headers = new HttpHeaders();
      headers.append("Content-Type", "application/json");
        return this.http
                      .post(this.updateCustomerAPIUrl, requestCustomerJson, { headers })
                      .toPromise()
        .then(response => {
          console.log("Customer updated successfully.", response);
          return response;
        })
        .catch(error => {
          console.error("Error updating customer:", error);
          throw error; // Rethrow the error to be caught by the caller
        });
  }
  
  deleteCustomer(customerId: any): Promise<any> {
    let response: any = {};

      let requestCustomerJson: any = {
        id: customerId
      };

      let headers = new HttpHeaders();
      headers.append("Content-Type", "application/json");
        return this.http
        .post(this.deleteCustomerAPIUrl, requestCustomerJson, { headers })
        .toPromise()
        .then(response => {
          console.log("Customer deleted successfully.", response);
          return response;
        })
        .catch(error => {
          console.error("Error deleting customer:", error);
          throw error; // Rethrow the error to be caught by the caller
        });
  }

  addCurrency = async (newCurrencyJSON: any) => {
    console.log("addCurrency() method called > ", newCurrencyJSON);
    let response: any = {};
    try {
      let requestCurrencyJson: any = {
        symbol: newCurrencyJSON.symbol,
        code: newCurrencyJSON.code,
        name: newCurrencyJSON.name,
        country: newCurrencyJSON.country
      };

      let headers = new HttpHeaders();
      headers.append("Content-Type", "application/json");

      response = await this.http
        .post(this.insertCurrencyAPIUrl, requestCurrencyJson, { headers })
        .toPromise();

      return response;

    } catch (error) {
      console.log(error);
    }
  }

  updateCurrency(updateCurrency: any): Promise<any> {
      let response: any = {};

      console.log("updateCurrency() method called ", updateCurrency);

      let requestCurrencyJson: any = {
        id: updateCurrency.id,
        symbol: updateCurrency.symbol,
        code: updateCurrency.code,
        name: updateCurrency.name,
        country: updateCurrency.country
      };

      let headers = new HttpHeaders();
      headers.append("Content-Type", "application/json");
        return this.http
                      .post(this.updateCurrencyAPIUrl, requestCurrencyJson, { headers })
                      .toPromise()
        .then(response => {
          console.log("Currency updated successfully.", response);
          return response;
        })
        .catch(error => {
          console.error("Error updating currency:", error);
          throw error; // Rethrow the error to be caught by the caller
        });
  }

  deleteCurrency(currencyId: any): Promise<any> {
    console.log("deleteCurrency() method called > ", currencyId);
    let response: any = {};

      let requestCurrencyJson: any = {
        id: currencyId
      };

      let headers = new HttpHeaders();
      headers.append("Content-Type", "application/json");
        return this.http
        .post(this.deleteCurrencyAPIUrl, requestCurrencyJson, { headers })
        .toPromise()
        .then(response => {
          console.log("Currency deleted successfully.", response);
          return response;
        })
        .catch(error => {
          console.error("Error deleting curency:", error);
          throw error; // Rethrow the error to be caught by the caller
        });
  }

  addSubscription = async (newSubscriptionJSON: any) => {
    console.log("addSubscription() method called > ", newSubscriptionJSON);

    let response: any = {};

    try {
      let requestSubscriptionJson: any = {
        type: newSubscriptionJSON.type,
        amount: newSubscriptionJSON.amount
      };

      let headers = new HttpHeaders();
      headers.append("Content-Type", "application/json");

      response = await this.http
        .post(this.insertSubscriptionAPIUrl, requestSubscriptionJson, { headers })
        .toPromise();

      return response;

    } catch (error) {
      console.log(error);
    }
  }

  updateSubscription(updateSubscription: any): Promise<any> {
    console.log("updateSubscription() method called ", updateSubscription);

    let response: any = {};

    let requestSubscriptionJson: any = {
      id: updateSubscription.id,
      type: updateSubscription.type,
      amount: updateSubscription.amount
    };

    let headers = new HttpHeaders();
    
    headers.append("Content-Type", "application/json");
      return this.http
                    .post(this.updateSubscriptionAPIUrl, requestSubscriptionJson, { headers })
                    .toPromise()
      .then(response => {
        console.log("Subscription updated successfully.", response);
        return response;
      })
      .catch(error => {
        console.error("Error updating subscription:", error);
        throw error; // Rethrow the error to be caught by the caller
      });
  }

  deleteSubscription(subscriptionId: any): Promise<any> {
    console.log("deleteSubscription() method called ", subscriptionId);

    let response: any = {};

      let requestSubscriptionJson: any = {
        id: subscriptionId
      };

      let headers = new HttpHeaders();
      headers.append("Content-Type", "application/json");
        return this.http
        .post(this.deleteSubscriptionAPIUrl, requestSubscriptionJson, { headers })
        .toPromise()
        .then(response => {
          console.log("Subscription deleted successfully.", response);
          return response;
        })
        .catch(error => {
          console.error("Error deleting subscription:", error);
          throw error; // Rethrow the error to be caught by the caller
        });
  }

  addSector = async (newSectorJSON: any) => {
    console.log("addSector() method called > ", newSectorJSON);

    let response: any = {};

    try {
      let requestSubscriptionJson: any = {
        icon: newSectorJSON.icon,
        name: newSectorJSON.name
      };

      let headers = new HttpHeaders();
      headers.append("Content-Type", "application/json");

      response = await this.http
        .post(this.insertSectorAPIUrl, newSectorJSON, { headers })
        .toPromise();

      return response;

    } catch (error) {
      console.log(error);
    }
  }

  updateSector(updateSector: any): Promise<any> {
    console.log("updateSector() method called ", updateSector);

    let response: any = {};

    let requestSectorJson: any = {
      id: updateSector.id,
      icon: updateSector.icon,
      name: updateSector.name
    };

    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
      return this.http
                    .post(this.updateSectorAPIUrl, requestSectorJson, { headers })
                    .toPromise()
      .then(response => {
        console.log("Sector updated successfully.", response);
        return response;
      })
      .catch(error => {
        console.error("Error updating sector:", error);
        throw error; // Rethrow the error to be caught by the caller
      });
  }

  deleteSector(sectorId: any): Promise<any> {
    console.log("deleteSector() method called ", sectorId);

    let response: any = {};

      let requestSectorJson: any = {
        id: sectorId
      };

      let headers = new HttpHeaders();
      headers.append("Content-Type", "application/json");
        return this.http
        .post(this.deleteSectorAPIUrl, requestSectorJson, { headers })
        .toPromise()
        .then(response => {
          console.log("Sector deleted successfully.", response);
          return response;
        })
        .catch(error => {
          console.error("Error deleting sector:", error);
          throw error; // Rethrow the error to be caught by the caller
        });
  }

  addExchange = async (newExchange: any) => {
    console.log("addExchange() method called > ", newExchange);

    let response: any = {};

    try {
      let requestExchangeJson: any = {
        code : newExchange.code,
        name : newExchange.name,
        location : newExchange.location,
        openingHours : newExchange.openingHours,
        closingHours : newExchange.closingHours,
        timeZone : newExchange.timeZone
      };

      let headers = new HttpHeaders();
      headers.append("Content-Type", "application/json");

      response = await this.http
        .post(this.insertExchangeAPIUrl, requestExchangeJson, { headers })
        .toPromise();

      return response;

    } catch (error) {
      console.log(error);
    }
  }

  updateExchange(updateExchange: any): Promise<any> {
    console.log("updateExchange() method called ", updateExchange);

    let response: any = {};

    let requestExchangeJson: any = {
      id: updateExchange.id,
      code : updateExchange.code,
      name : updateExchange.name,
      location : updateExchange.location,
      openingHours : updateExchange.openingHours,
      closingHours : updateExchange.closingHours,
      timeZone : updateExchange.timeZone
    };

    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
      return this.http
                    .post(this.updateExchangeAPIUrl, requestExchangeJson, { headers })
                    .toPromise()
      .then(response => {
        console.log("Exchange updated successfully.", response);
        return response;
      })
      .catch(error => {
        console.error("Error updating exchange:", error);
        throw error; // Rethrow the error to be caught by the caller
      });
  }

  deleteExchange(exchangeId: any): Promise<any> {
    console.log("deleteExchange() method called ", exchangeId);

    let response: any = {};

      let requestExchangeJson: any = {
        id: exchangeId
      };

      let headers = new HttpHeaders();
      headers.append("Content-Type", "application/json");
        return this.http
        .post(this.deleteExchangeAPIUrl, requestExchangeJson, { headers })
        .toPromise()
        .then(response => {
          console.log("Exchange deleted successfully.", response);
          return response;
        })
        .catch(error => {
          console.error("Error deleting exchange:", error);
          throw error; // Rethrow the error to be caught by the caller
        });
  }

}