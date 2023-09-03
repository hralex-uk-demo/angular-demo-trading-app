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
  selector: 'app-currency-add-dialog',
  templateUrl: './currency-add-dialog.component.html',
  styleUrls: ['./currency-add-dialog.component.css']
})
export class CurrencyAddDialogComponent {
  currencyForm: FormGroup;


  constructor(private addCurrencyDialogRef: MatDialogRef<CurrencyAddDialogComponent>,
                     private formBuilder: FormBuilder, private adminService: AdminService) {

    addCurrencyDialogRef.disableClose = true;  

    this.currencyForm = this.formBuilder.group({
      symbol: ['', [Validators.required, Validators.maxLength(3)]],
      code: ['', [Validators.required, Validators.pattern('[A-Z]{3}')]],
      name: ['', [Validators.required]],
      country: ['', [Validators.required]]
    });
  }
  
  ngOnInit() {
  }

  onSubmit() {
    console.info(this.currencyForm.value);
    this.adminService.addCurrency(this.currencyForm.value);
    this.addCurrencyDialogRef.close(this.currencyForm.value);
  }

}
