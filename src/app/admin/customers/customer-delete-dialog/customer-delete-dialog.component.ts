import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AdminService } from '../../../admin/shared/service/admin.service';

@Component({
  selector: 'app-customer-delete-dialog',
  templateUrl: './customer-delete-dialog.component.html',
  styleUrls: ['./customer-delete-dialog.component.css']
})
export class CustomerDeleteDialogComponent {

  constructor(private deleteCustomerDialogRef: MatDialogRef<CustomerDeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public customerRowObject: any, 
              private adminService: AdminService) {
      this.customerRowObject = customerRowObject;
  }

  onDeleteClick(customerId:any) {
  console.log("On submit() method called > ", customerId);      
  this.adminService.deleteCustomer(customerId).then(response => {
  console.log("Customer deleted successfully.", response);
  this.deleteCustomerDialogRef.close(customerId);
  })
  .catch(error => {
  console.error("Error deleting customer:", error);
  // Handle error if needed
  });
  }
}