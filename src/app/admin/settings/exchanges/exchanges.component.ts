import { Component, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import { Router } from '@angular/router';

import { Exchangedetails } from '../../../admin/shared/model/exchangedetails';
import { AdminService } from '../../../admin/shared/service/admin.service';
import { ExchangeAddDialogComponent } from '../../settings/exchanges/exchange-add-dialog/exchange-add-dialog.component';
import { ExchangeEditDialogComponent } from '../../settings/exchanges/exchange-edit-dialog/exchange-edit-dialog.component';
import { ExchangeDeleteDialogComponent } from '../../settings/exchanges/exchange-delete-dialog/exchange-delete-dialog.component';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.css']
})
export class ExchangesComponent {
  displayedColumns: string[] = ['code',  'name', 'location',  'openingHours', 'closingHours',  'timeZone', 'actions'];

  dataSource!: MatTableDataSource<Exchangedetails>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private adminService: AdminService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
      this.dataSource = new MatTableDataSource<Exchangedetails>();
      this.getLatestExchangesDetails();
  }

  ngAfterViewInit() {  
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getLatestExchangesDetails() {
      this.adminService.getExchangesDetails().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;  
        this.dataSource._updateChangeSubscription();
      });
  }

  openExchangeAddDialog(){
    const dialogRef =  this.dialog.open(ExchangeAddDialogComponent, { disableClose: true });
        dialogRef.afterClosed().subscribe(result => {
          console.log('Dialog closed with result:', result);
          if (result) {
            console.log('Received result from dialog:', result);
            this.getLatestExchangesDetails(); 
          }
        });
  }

  openExchangeEditDialog(exchangeRowObject :any){
    console.log('UPDATE : openExchangeEditDialog() called >', exchangeRowObject);
    const dialogEditRef = this.dialog.open(ExchangeEditDialogComponent, {
      data: exchangeRowObject // Pass the data to the dialog component
    });

    dialogEditRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
      // Handle the result returned from the dialog
      if (result) {
        // Do something with the result in the parent component
        console.log('Received result from dialog:', result);
        this.getLatestExchangesDetails();
      }
    });
  }

  openExchangeDeleteDialog(exchangeRowObject :any){
      console.log('DELETE : openExchangeDeleteDialog() called >', exchangeRowObject);
      const dialogDeleteRef = this.dialog.open(ExchangeDeleteDialogComponent, {
        data: exchangeRowObject // Pass the data to the dialog component
      });

      dialogDeleteRef.afterClosed().subscribe(result => {
        console.log('Dialog closed with result:', result);
        // Handle the result returned from the dialog
        if (result) {
          // Do something with the result in the parent component
          console.log('Received result from dialog:', result);
          this.getLatestExchangesDetails();
        }
      });
  }

}