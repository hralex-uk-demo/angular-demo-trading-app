import { Component, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import { Router } from '@angular/router';

import { Customerdetails } from '../../admin/shared/model/customerdetails';
import { AdminService } from '../../admin/shared/service/admin.service';
import { CustomerAddDialogComponent } from '../../admin/customers/customer-add-dialog/customer-add-dialog.component';
import { CustomerEditDialogComponent } from '../../admin/customers/customer-edit-dialog/customer-edit-dialog.component';
import { CustomerDeleteDialogComponent } from '../../admin/customers/customer-delete-dialog/customer-delete-dialog.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements AfterViewInit {

  displayedColumns: string[] = ['firstName',  'mobileNumber', 'totalInvestment', 'currentValue', 'change', 'subscriptionType', 'actions'];

  dataSource!: MatTableDataSource<Customerdetails>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private adminService: AdminService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
      this.dataSource = new MatTableDataSource<Customerdetails>();
      this.getLatestCustomerDetails();
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

  getLatestCustomerDetails() {
      this.adminService.getCustomerDetails().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;  
        this.dataSource._updateChangeSubscription();
      });
  }

  openCustomerAddDialog(){
    const dialogRef =  this.dialog.open(CustomerAddDialogComponent, { disableClose: true });
        dialogRef.afterClosed().subscribe(result => {
          console.log('Dialog closed with result:', result);
          // Handle the result returned from the dialog
          if (result) {
            console.log('Received result from dialog:', result);
            this.getLatestCustomerDetails(); 
          }
        });
  }

  openCustomerEditDialog(customerRowObject :any){
    console.log('UPDATE : openCustomerEditDialog() called >', customerRowObject);
    const dialogEditRef = this.dialog.open(CustomerEditDialogComponent, {
      data: customerRowObject // Pass the data to the dialog component
    });

    dialogEditRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
      // Handle the result returned from the dialog
      if (result) {
        // Do something with the result in the parent component
        console.log('Received result from dialog:', result);
        this.getLatestCustomerDetails();
      }
    });
  }

  openCustomerDeleteDialog(customerRowObject :any){
      console.log('DELETE : openCustomerDeleteDialog() called >', customerRowObject);
      const dialogDeleteRef = this.dialog.open(CustomerDeleteDialogComponent, {
        data: customerRowObject // Pass the data to the dialog component
      });

      dialogDeleteRef.afterClosed().subscribe(result => {
        console.log('Dialog closed with result:', result);
        // Handle the result returned from the dialog
        if (result) {
          // Do something with the result in the parent component
          console.log('Received result from dialog:', result);
          this.getLatestCustomerDetails();
        }
      });
  }

  calculateInvestmentChange(initialInvestment :any, currentInvestment :any) {
    const initialInvestmentValue = parseFloat(initialInvestment);
    const currentInvestmentValue = parseFloat(currentInvestment);
  
    if (isNaN(initialInvestmentValue) || isNaN(currentInvestmentValue)) {
      return "";
    }
  
    const changeAmount = currentInvestmentValue - initialInvestmentValue;
    const changePercentage = ((changeAmount / initialInvestmentValue) * 100).toFixed(2);
  
    return parseFloat(changePercentage);
  }

  getColorClass(changePercentage: any): string {
    const changePercentageFloat = parseFloat(changePercentage);
    return changePercentage > 0 ? 'positive-value' : changePercentage < 0 ? 'negative-value' : '';
  }
  

}
