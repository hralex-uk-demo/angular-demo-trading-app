import { Component, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { Router } from '@angular/router';

import { Sectordetails } from '../../../admin/shared/model/sectordetails';
import { AdminService } from '../../../admin/shared/service/admin.service';
import { SectorAddDialogComponent } from '../../settings/sectors/sector-add-dialog/sector-add-dialog.component';
import { SectorEditDialogComponent } from '../../settings/sectors/sector-edit-dialog/sector-edit-dialog.component';
import { SectorDeleteDialogComponent } from '../../settings/sectors/sector-delete-dialog/sector-delete-dialog.component';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent {

  displayedColumns: string[] = ['icon',  'iconName', 'name', 'actions'];

  dataSource!: MatTableDataSource<Sectordetails>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private adminService: AdminService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
      this.dataSource = new MatTableDataSource<Sectordetails>();
      this.getLatestSectorsDetails();
  }

  ngAfterViewInit() {  
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getLatestSectorsDetails() {
      this.adminService.getSectorsDetails().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;  
        this.dataSource._updateChangeSubscription();
      });
  }

  openSectorAddDialog(){
    const dialogRef =  this.dialog.open(SectorAddDialogComponent, { disableClose: true });
        dialogRef.afterClosed().subscribe(result => {
          console.log('Dialog closed with result:', result);
          if (result) {
            console.log('Received result from dialog:', result);
            this.getLatestSectorsDetails(); 
          }
        });
  }

  openSectorEditDialog(sectorRowObject :any){
    console.log('UPDATE : openSectorEditDialog() called >', sectorRowObject);
    const dialogEditRef = this.dialog.open(SectorEditDialogComponent, {
      data: sectorRowObject // Pass the data to the dialog component
    });

    dialogEditRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
      // Handle the result returned from the dialog
      if (result) {
        // Do something with the result in the parent component
        console.log('Received result from dialog:', result);
        this.getLatestSectorsDetails();
      }
    });
  }

  openSectorDeleteDialog(sectorRowObject :any){
      console.log('DELETE : openSectorDeleteDialog() called >', sectorRowObject);
      const dialogDeleteRef = this.dialog.open(SectorDeleteDialogComponent, {
        data: sectorRowObject // Pass the data to the dialog component
      });

      dialogDeleteRef.afterClosed().subscribe(result => {
        console.log('Dialog closed with result:', result);
        // Handle the result returned from the dialog
        if (result) {
          // Do something with the result in the parent component
          console.log('Received result from dialog:', result);
          this.getLatestSectorsDetails();
        }
      });
  }

}