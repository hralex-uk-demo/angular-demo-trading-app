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
  selector: 'app-exchange-add-dialog',
  templateUrl: './exchange-add-dialog.component.html',
  styleUrls: ['./exchange-add-dialog.component.css']
})
export class ExchangeAddDialogComponent {

  exchangeForm: FormGroup;

  constructor(private addExchangeDialogRef: MatDialogRef<ExchangeAddDialogComponent>,
                     private formBuilder: FormBuilder, private adminService: AdminService) {

    addExchangeDialogRef.disableClose = true;  

    this.exchangeForm = this.formBuilder.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
      openingHours: ['', [Validators.required]],
      closingHours: ['', [Validators.required]],
      timeZone: ['', [Validators.required]]
    });
  }
  
  ngOnInit() {
  }

  onSubmit() {
    console.info(this.exchangeForm.value);
    this.adminService.addExchange(this.exchangeForm.value);
    this.addExchangeDialogRef.close(this.exchangeForm.value);
  }

}
