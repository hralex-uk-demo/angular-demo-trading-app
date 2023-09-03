import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {NgFor} from '@angular/common'
import {MatDividerModule} from '@angular/material/divider';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Customerdetails } from '../../../admin/shared/model/customerdetails';
import { AdminService } from '../../../admin/shared/service/admin.service';

interface SelectBox {
  name: string;
  value: string;
}

@Component({
  selector: 'app-customer-edit-dialog',
  templateUrl: './customer-edit-dialog.component.html',
  styleUrls: ['./customer-edit-dialog.component.css']
})
export class CustomerEditDialogComponent {

  customerForm: FormGroup;

  subscriptionTypes: SelectBox[] = [
    {name: 'Basic', value: 'Basic'},
    {name: 'Standard', value: 'Standard'},
    {name: 'Plus', value: 'Plus'}
  ];

  constructor(private editCustomerDialogRef: MatDialogRef<CustomerEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public customerRowObject: any, 
              private formBuilder: FormBuilder, private adminService: AdminService) {
        this.customerForm = this.formBuilder.group({
            id: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            mobileNumber: ['',  [Validators.required, Validators.pattern(/^0\d{10}$/)]],
            totalInvestment: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
            subscriptionType: ['', Validators.required]
        });

        // Load stock data into form
        this.customerForm.patchValue({
            id: this.customerRowObject._id,
            firstName: this.customerRowObject.firstName,
            lastName: this.customerRowObject.lastName,
            mobileNumber: this.customerRowObject.mobileNumber,
            totalInvestment: this.customerRowObject.totalInvestment,
            subscriptionType: this.customerRowObject.subscriptionType
        });
  }


  onSubmit() {
    console.info(this.customerForm.value);
      this.adminService.updateCustomer(this.customerForm.value).then(response => {
        console.log("Customer details updated successfully.", response);
        this.editCustomerDialogRef.close(this.customerForm.value);
      }).catch(error => {
        console.error("Error updating customer:", error);
        // Handle error if needed
      });
  }

}
