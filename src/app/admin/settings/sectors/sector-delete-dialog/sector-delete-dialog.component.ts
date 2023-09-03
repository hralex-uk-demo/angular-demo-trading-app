import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AdminService } from '../../../../admin/shared/service/admin.service';

@Component({
  selector: 'app-sector-delete-dialog',
  templateUrl: './sector-delete-dialog.component.html',
  styleUrls: ['./sector-delete-dialog.component.css']
})
export class SectorDeleteDialogComponent {

  constructor(private deleteSubscriptionDialogRef: MatDialogRef<SectorDeleteDialogComponent>,
            @Inject(MAT_DIALOG_DATA) public sectorRowObject: any, 
            private adminService: AdminService) {

  this.sectorRowObject = sectorRowObject;

}

onDeleteClick(sectorId:any) {

    console.log("On submit() method called > ", sectorId);

    this.adminService.deleteSector(sectorId).then(response => {
      console.log("Sector deleted successfully.", response);
      this.deleteSubscriptionDialogRef.close(sectorId);
    })
    .catch(error => {
      console.error("Error deleting sector:", error);
      // Handle error if needed
    });
}

}