import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

import { Stockdetails } from '../../admin/shared/model/stockdetails';
import { StockService } from '../../admin/shared/service/stock.service';
import { StockAddDialogComponent } from '../../admin/stocks/stock-add-dialog/stock-add-dialog.component';
import { StockEditDialogComponent } from '../../admin/stocks/stock-edit-dialog/stock-edit-dialog.component';
import { StockDeleteDialogComponent } from '../../admin/stocks/stock-delete-dialog/stock-delete-dialog.component';

import {  FormBuilder, FormGroup, Validators  } from '@angular/forms';

import { map } from 'rxjs/operators'; 
import { Observable } from 'rxjs';

import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent {

  displayedColumns: string[] = ['stockImage', 'stockSymbol', 'companyName', 'exchange', 'currentPrice', 'type', 'status', 'actions'];

  dataSource!: MatTableDataSource<Stockdetails>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private stockService: StockService, public dialog: MatDialog, private apollo: Apollo) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Stockdetails>();
    //this.getLatestStockDetails();
    this.apollo
    .watchQuery({
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
    })
    .valueChanges.subscribe((result: any) => {
      console.log("GraphQL result");
    });
  }

  getLatestStockDetailsGraphQL() {
    this.stockService.getStockDetails().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;  
      this.dataSource._updateChangeSubscription();
    });
  }

  getLatestStockDetails() {
    this.stockService.getStockDetails().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;  
      this.dataSource._updateChangeSubscription();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openStockAddDialog(){

    const dialogRef =  this.dialog.open(StockAddDialogComponent, { disableClose: true });
        dialogRef.afterClosed().subscribe(result => {
          console.log('Dialog closed with result:', result);
          // Handle the result returned from the dialog
          if (result) {
            // Do something with the result in the parent component
            console.log('Received result from dialog:', result);
            this.getLatestStockDetails();
          }
        });


  }

  openStockEditDialog(stockRowObject :any){
    console.log('UPDATE : openStockEditDialog() called >', stockRowObject);
    const dialogEditRef = this.dialog.open(StockEditDialogComponent, {
      data: stockRowObject // Pass the data to the dialog component
    });

    dialogEditRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
      // Handle the result returned from the dialog
      if (result) {
        // Do something with the result in the parent component
        console.log('Received result from dialog:', result);
        this.getLatestStockDetails();
      }
    });


  }

  openStockDeleteDialog(stockRowObject :any){
      console.log('DELETE : openStockDeleteDialog() called >', stockRowObject);
      const dialogDeleteRef = this.dialog.open(StockDeleteDialogComponent, {
        data: stockRowObject // Pass the data to the dialog component
      });

      dialogDeleteRef.afterClosed().subscribe(result => {
        console.log('Dialog closed with result:', result);
        // Handle the result returned from the dialog
        if (result) {
          // Do something with the result in the parent component
          this.getLatestStockDetails();
        }
      });
  }

}
