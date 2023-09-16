import { Component } from '@angular/core';
import { Stockdetails } from '../../../admin/shared/model/stockdetails';
import { AdminService } from '../../../admin/shared/service/admin.service';
import { GraphQLService } from '../../../admin/shared/service/graphql.service';

import { map } from 'rxjs/operators'; 
import { Observable } from 'rxjs';

import { Apollo, gql } from 'apollo-angular';

export interface StockData {
  stockSymbol: string;
  companyName: string;
}

@Component({
  selector: 'admin-app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class AdminViewComponent {

  stocksData: StockData[] = [];

  constructor(private adminService: AdminService, private graphQLService: GraphQLService) {
  }

  ngOnInit(): void {
    this.getLatestStockDetailsGraphQL()
   }

   getLatestStockDetailsGraphQL() {
    this.graphQLService.getStockDetails().subscribe(data => {
      this.stocksData = data;
    });
  }

  getStockImageURL(stockSymbol: string): String {
    return "https://investa-stock-logos.s3.us-east-1.amazonaws.com/" + stockSymbol + ".png";
  }
  
}
