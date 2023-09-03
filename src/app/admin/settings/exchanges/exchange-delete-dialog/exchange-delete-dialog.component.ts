import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AdminService } from '../../../../admin/shared/service/admin.service';

@Component({
  selector: 'app-exchange-delete-dialog',
  templateUrl: './exchange-delete-dialog.component.html',
  styleUrls: ['./exchange-delete-dialog.component.css']
})
export class ExchangeDeleteDialogComponent {

  constructor(private deleteExchangeDialogRef: MatDialogRef<ExchangeDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public exchangeRowObject: any, 
    private adminService: AdminService) {

  this.exchangeRowObject = exchangeRowObject;

}

onDeleteClick(exchangeId:any) {
  console.log("On submit() method called > ", exchangeId);      
  this.adminService.deleteExchange(exchangeId).then(response => {
    console.log("Customer deleted successfully.", response);
    this.deleteExchangeDialogRef.close(exchangeId);
  })
    .catch(error => {
    console.error("Error deleting exchange:", error);
    // Handle error if needed
  });
}

}
