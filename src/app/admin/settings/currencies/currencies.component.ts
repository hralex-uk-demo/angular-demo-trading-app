import { Component, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import { Router } from '@angular/router';

import { Currencydetails } from '../../../admin/shared/model/currencydetails';
import { AdminService } from '../../../admin/shared/service/admin.service';
import { CurrencyAddDialogComponent } from '../../settings/currencies/currency-add-dialog/currency-add-dialog.component';
import { CurrencyEditDialogComponent } from '../../settings/currencies/currency-edit-dialog/currency-edit-dialog.component';
import { CurrencyDeleteDialogComponent } from '../../settings/currencies/currency-delete-dialog/currency-delete-dialog.component';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent {

  displayedColumns: string[] = ['symbol',  'code', 'name', 'country', 'actions'];

  dataSource!: MatTableDataSource<Currencydetails>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private adminService: AdminService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
      this.dataSource = new MatTableDataSource<Currencydetails>();
      this.getLatestCurrenciesDetails();
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

  getLatestCurrenciesDetails() {
      this.adminService.getCurrenciesDetails().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;  
        this.dataSource._updateChangeSubscription();
      });
  }

  openCurrencyAddDialog(){
    const dialogRef =  this.dialog.open(CurrencyAddDialogComponent, { disableClose: true });
        dialogRef.afterClosed().subscribe(result => {
          console.log('Dialog closed with result:', result);
          if (result) {
            console.log('Received result from dialog:', result);
            this.getLatestCurrenciesDetails(); 
          }
        });
  }

  openCurrencyEditDialog(currencyRowObject :any){
    console.log('UPDATE : openCurrencyEditDialog() called >', currencyRowObject);
    const dialogEditRef = this.dialog.open(CurrencyEditDialogComponent, {
      data: currencyRowObject // Pass the data to the dialog component
    });

    dialogEditRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
      // Handle the result returned from the dialog
      if (result) {
        // Do something with the result in the parent component
        console.log('Received result from dialog:', result);
        this.getLatestCurrenciesDetails();
      }
    });
  }

  openCurrencyDeleteDialog(currencyRowObject :any){
      console.log('DELETE : openCurrencyDeleteDialog() called >', currencyRowObject);
      const dialogDeleteRef = this.dialog.open(CurrencyDeleteDialogComponent, {
        data: currencyRowObject // Pass the data to the dialog component
      });

      dialogDeleteRef.afterClosed().subscribe(result => {
        console.log('Dialog closed with result:', result);
        // Handle the result returned from the dialog
        if (result) {
          // Do something with the result in the parent component
          console.log('Received result from dialog:', result);
          this.getLatestCurrenciesDetails();
        }
      });
  }

}
  