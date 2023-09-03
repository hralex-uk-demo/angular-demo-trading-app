import { Component, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import { Router } from '@angular/router';

import { Subscriptiondetails } from '../../../admin/shared/model/subscriptiondetails';
import { AdminService } from '../../../admin/shared/service/admin.service';
import { SubscriptionAddDialogComponent } from '../../settings/subscriptions/subscription-add-dialog/subscription-add-dialog.component';
import { SubscriptionEditDialogComponent } from '../../settings/subscriptions/subscription-edit-dialog/subscription-edit-dialog.component';
import { SubscriptionDeleteDialogComponent } from '../../settings/subscriptions/subscription-delete-dialog/subscription-delete-dialog.component';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent {

  displayedColumns: string[] = ['type',  'amount', 'actions'];

  dataSource!: MatTableDataSource<Subscriptiondetails>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private adminService: AdminService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
      this.dataSource = new MatTableDataSource<Subscriptiondetails>();
      this.getLatestSubscriptionsDetails();
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

  getLatestSubscriptionsDetails() {
      this.adminService.getSubscriptionsDetails().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;  
        this.dataSource._updateChangeSubscription();
      });
  }

  openSubscriptionAddDialog(){
    const dialogRef =  this.dialog.open(SubscriptionAddDialogComponent, { disableClose: true });
        dialogRef.afterClosed().subscribe(result => {
          console.log('Dialog closed with result:', result);
          if (result) {
            console.log('Received result from dialog:', result);
            this.getLatestSubscriptionsDetails(); 
          }
        });
  }

  openSubscriptionEditDialog(subscriptionRowObject :any){
    console.log('UPDATE : openCurrencyEditDialog() called >', subscriptionRowObject);
    const dialogEditRef = this.dialog.open(SubscriptionEditDialogComponent, {
      data: subscriptionRowObject // Pass the data to the dialog component
    });

    dialogEditRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
      // Handle the result returned from the dialog
      if (result) {
        // Do something with the result in the parent component
        console.log('Received result from dialog:', result);
        this.getLatestSubscriptionsDetails();
      }
    });
  }

  openSubscriptionDeleteDialog(subscriptionRowObject :any){
      console.log('DELETE : openCurrencyDeleteDialog() called >', subscriptionRowObject);
      const dialogDeleteRef = this.dialog.open(SubscriptionDeleteDialogComponent, {
        data: subscriptionRowObject // Pass the data to the dialog component
      });

      dialogDeleteRef.afterClosed().subscribe(result => {
        console.log('Dialog closed with result:', result);
        // Handle the result returned from the dialog
        if (result) {
          // Do something with the result in the parent component
          console.log('Received result from dialog:', result);
          this.getLatestSubscriptionsDetails();
        }
      });
  }

}
