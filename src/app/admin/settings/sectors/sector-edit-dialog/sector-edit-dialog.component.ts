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
  selector: 'app-sector-edit-dialog',
  templateUrl: './sector-edit-dialog.component.html',
  styleUrls: ['./sector-edit-dialog.component.css']
})
export class SectorEditDialogComponent {

  sectorForm: FormGroup;

  constructor(private editSectorDialogRef: MatDialogRef<SectorEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public sectorRowObject: any, 
              private formBuilder: FormBuilder, private adminService: AdminService) {

        this.sectorForm = this.formBuilder.group({
            id: [''],
            icon: ['', [Validators.required]],
            name: ['', [Validators.required]]
        });

        // Load currency data into form
        this.sectorForm.patchValue({
            id: this.sectorRowObject._id,
            icon: this.sectorRowObject.icon,
            name: this.sectorRowObject.name
        });
  }

  onSubmit() {
    console.info(this.sectorForm.value);
      this.adminService.updateSector(this.sectorForm.value).then(response => {
        console.log("Currency details updated successfully.", response);
        this.editSectorDialogRef.close(this.sectorForm.value);
      }).catch(error => {
        console.error("Error updating customer:", error);
        // Handle error if needed
      });
  }

}
