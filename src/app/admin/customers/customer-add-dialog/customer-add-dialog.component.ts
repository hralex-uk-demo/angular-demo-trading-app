import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {NgFor} from '@angular/common'
import {MatDividerModule} from '@angular/material/divider';

import { AdminService } from '../../../admin/shared/service/admin.service';

interface SelectBox {
  name: string;
  value: string;
}

@Component({
  selector: 'app-customer-add-dialog',
  templateUrl: './customer-add-dialog.component.html',
  styleUrls: ['./customer-add-dialog.component.css']
})
export class CustomerAddDialogComponent {

  customerForm: FormGroup;

  subscriptionTypes: SelectBox[] = [
    {name: 'Basic', value: 'Basic'},
    {name: 'Standard', value: 'Standard'},
    {name: 'Plus', value: 'Plus'}
  ];

  constructor(private addCustomerDialogRef: MatDialogRef<CustomerAddDialogComponent>,
                     private formBuilder: FormBuilder, private adminService: AdminService) {

    addCustomerDialogRef.disableClose = true;  

    this.customerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^0\d{10}$/)]],
      totalInvestment: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      subscriptionType: ['', Validators.required]
    });
  }
  
  ngOnInit() {
  }

  onSubmit() {
    console.info(this.customerForm.value);
    this.adminService.addCustomer(this.customerForm.value);
    this.addCustomerDialogRef.close(this.customerForm.value);
  }

}