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

import { Subscriptiondetails } from '../../../../admin/shared/model/subscriptiondetails';
import { AdminService } from '../../../../admin/shared/service/admin.service';

@Component({
  selector: 'app-subscription-edit-dialog',
  templateUrl: './subscription-edit-dialog.component.html',
  styleUrls: ['./subscription-edit-dialog.component.css']
})
export class SubscriptionEditDialogComponent {

  subscriptionForm: FormGroup;

  constructor(private editSubscriptionDialogRef: MatDialogRef<SubscriptionEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public subscriptionRowObject: any, 
              private formBuilder: FormBuilder, private adminService: AdminService) {

        this.subscriptionForm = this.formBuilder.group({
            id: [''],
            type: ['', [Validators.required]],
            amount: ['', [Validators.required]]
        });

        // Load currency data into form
        this.subscriptionForm.patchValue({
            id: this.subscriptionRowObject._id,
            type: this.subscriptionRowObject.type,
            amount: this.subscriptionRowObject.amount
        });
  }

  onSubmit() {
    console.info(this.subscriptionForm.value);
      this.adminService.updateSubscription(this.subscriptionForm.value).then(response => {
        console.log("Currency details updated successfully.", response);
        this.editSubscriptionDialogRef.close(this.subscriptionForm.value);
      }).catch(error => {
        console.error("Error updating customer:", error);
        // Handle error if needed
      });
  }

}
