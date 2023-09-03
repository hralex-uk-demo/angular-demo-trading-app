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
  selector: 'app-sector-add-dialog',
  templateUrl: './sector-add-dialog.component.html',
  styleUrls: ['./sector-add-dialog.component.css']
})
export class SectorAddDialogComponent {
  sectorForm: FormGroup;


  constructor(private addSectorDialogRef: MatDialogRef<SectorAddDialogComponent>,
                     private formBuilder: FormBuilder, private adminService: AdminService) {

    addSectorDialogRef.disableClose = true;  

    this.sectorForm = this.formBuilder.group({
      icon: ['', [Validators.required]],
      name: ['', [Validators.required]]
    });
  }
  
  ngOnInit() {
  }

  onSubmit() {
    console.info(this.sectorForm.value);
    this.adminService.addSector(this.sectorForm.value);
    this.addSectorDialogRef.close(this.sectorForm.value);
  }

}
