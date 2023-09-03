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

import { Exchangedetails } from '../../../../admin/shared/model/exchangedetails';
import { AdminService } from '../../../../admin/shared/service/admin.service';


@Component({
  selector: 'app-exchange-edit-dialog',
  templateUrl: './exchange-edit-dialog.component.html',
  styleUrls: ['./exchange-edit-dialog.component.css']
})
export class ExchangeEditDialogComponent {

  exchangeForm: FormGroup;

  constructor(private editExchangeDialogRef: MatDialogRef<ExchangeEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public exchangeRowObject: any, 
              private formBuilder: FormBuilder, private adminService: AdminService) {

      this.exchangeForm = this.formBuilder.group({
        id: [''],
        code: ['', [Validators.required]],
        name: ['', [Validators.required]],
        location: ['', [Validators.required]],
        openingHours: ['', [Validators.required]],
        closingHours: ['', [Validators.required]],
        timeZone: ['', [Validators.required]]
      });

      // Load exchange data into form
      this.exchangeForm.patchValue({
        id: this.exchangeRowObject._id,
        code: this.exchangeRowObject.code,
        name: this.exchangeRowObject.name,
        location: this.exchangeRowObject.location,
        openingHours: this.exchangeRowObject.openingHours,
        closingHours: this.exchangeRowObject.closingHours,
        timeZone: this.exchangeRowObject.timeZone
      });
  }

  onSubmit() {
    console.info(this.exchangeForm.value);
      this.adminService.updateExchange(this.exchangeForm.value).then(response => {
        console.log("Exchange details updated successfully.", response);
        this.editExchangeDialogRef.close(this.exchangeForm.value);
      }).catch(error => {
        console.error("Error updating exchange:", error);
        // Handle error if needed
      });
  }

}
