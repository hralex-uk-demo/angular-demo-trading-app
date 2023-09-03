import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from "@angular/common/http";
import { Base64ConversionService } from './base64-conversion.service';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  private getStocksAPIUrl    = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_get_stocks?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private insertStockAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_insert_stock?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private updateStockAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_update_stock?apiKey=2b1b02b0a6b64bc9b817cfd414148795';
  private deleteStockAPIUrl  = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-chqhg/endpoint/investa_mongodb_delete_stock?apiKey=2b1b02b0a6b64bc9b817cfd414148795';

  constructor(private http: HttpClient, private base64ConversionService: Base64ConversionService) {
  }

  getStockDetails(): Observable<any> {
      return this.http.get<any>(`${this.getStocksAPIUrl}`);
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

}