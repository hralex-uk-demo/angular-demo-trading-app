import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AdminService } from '../../../../admin/shared/service/admin.service';

@Component({
  selector: 'app-currency-delete-dialog',
  templateUrl: './currency-delete-dialog.component.html',
  styleUrls: ['./currency-delete-dialog.component.css']
})
export class CurrencyDeleteDialogComponent {

  constructor(private deleteCurrencyDialogRef: MatDialogRef<CurrencyDeleteDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public currencyRowObject: any, 
      private adminService: AdminService) {

    this.currencyRowObject = currencyRowObject;

  }

  onDeleteClick(currencyId:any) {
    console.log("On submit() method called > ", currencyId);      
    this.adminService.deleteCurrency(currencyId).then(response => {
      console.log("Customer deleted successfully.", response);
      this.deleteCurrencyDialogRef.close(currencyId);
    })
      .catch(error => {
      console.error("Error deleting currency:", error);
      // Handle error if needed
    });
  }

}