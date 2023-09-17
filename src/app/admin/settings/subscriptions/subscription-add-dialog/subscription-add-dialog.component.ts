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

import { AdminService } from '../../../../admin/shared/service/admin.service';

@Component({
  selector: 'app-subscription-add-dialog',
  templateUrl: './subscription-add-dialog.component.html',
  styleUrls: ['./subscription-add-dialog.component.css']
})
export class SubscriptionAddDialogComponent {
  subscriptionForm: FormGroup;


  constructor(private addCurrencyDialogRef: MatDialogRef<SubscriptionAddDialogComponent>,
                     private formBuilder: FormBuilder, private adminService: AdminService) {

    addCurrencyDialogRef.disableClose = true;  

    this.subscriptionForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    });
  }
  
  ngOnInit() {
  }

  onSubmit() {
    console.info("onSubmit() method called >", this.subscriptionForm.value);
    this.adminService.addSubscription(this.subscriptionForm.value);
    this.addCurrencyDialogRef.close(this.subscriptionForm.value);
  }

}
