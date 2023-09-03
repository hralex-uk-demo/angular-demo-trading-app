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

import { Currencydetails } from '../../../../admin/shared/model/currencydetails';
import { AdminService } from '../../../../admin/shared/service/admin.service';

@Component({
  selector: 'app-currency-edit-dialog',
  templateUrl: './currency-edit-dialog.component.html',
  styleUrls: ['./currency-edit-dialog.component.css']
})
export class CurrencyEditDialogComponent {

  currencyForm: FormGroup;

  constructor(private editCurrencyDialogRef: MatDialogRef<CurrencyEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public currencyRowObject: any, 
              private formBuilder: FormBuilder, private adminService: AdminService) {

        this.currencyForm = this.formBuilder.group({
            id: [''],
            symbol: ['', [Validators.required, Validators.maxLength(3)]],
            code: ['', [Validators.required, Validators.pattern('[A-Z]{3}')]],
            name: ['', Validators.required],
            country: ['',  Validators.required]
        });

        // Load currency data into form
        this.currencyForm.patchValue({
            id: this.currencyRowObject._id,
            symbol: this.currencyRowObject.symbol,
            code: this.currencyRowObject.code,
            name: this.currencyRowObject.name,
            country: this.currencyRowObject.country
        });
  }

  onSubmit() {
    console.info(this.currencyForm.value);
      this.adminService.updateCurrency(this.currencyForm.value).then(response => {
        console.log("Currency details updated successfully.", response);
        this.editCurrencyDialogRef.close(this.currencyForm.value);
      }).catch(error => {
        console.error("Error updating customer:", error);
        // Handle error if needed
      });
  }

}
