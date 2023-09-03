import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AdminService } from '../../../../admin/shared/service/admin.service';

@Component({
  selector: 'app-subscription-delete-dialog',
  templateUrl: './subscription-delete-dialog.component.html',
  styleUrls: ['./subscription-delete-dialog.component.css']
})
export class SubscriptionDeleteDialogComponent {

  constructor(private deleteSubscriptionDialogRef: MatDialogRef<SubscriptionDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public subscriptionRowObject: any, 
    private adminService: AdminService) {

  this.subscriptionRowObject = subscriptionRowObject;

}

onDeleteClick(subscriptionId:any) {
  console.log("On submit() method called > ", subscriptionId);      
  this.adminService.deleteSubscription(subscriptionId).then(response => {
    console.log("Subscription deleted successfully.", response);
    this.deleteSubscriptionDialogRef.close(subscriptionId);
  })
    .catch(error => {
    console.error("Error deleting subscription:", error);
    // Handle error if needed
  });
}

}