import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {NgFor} from '@angular/common'
import {MatDividerModule} from '@angular/material/divider';

interface SelectBox {
  name: string;
  value: string;
}
@Component({
  selector: 'app-stock-info-dialog',
  templateUrl: './stock-info-dialog.component.html',
  styleUrls: ['./stock-info-dialog.component.css']
})
export class StockInfoDialogComponent {

keywordTypes: SelectBox[] = [
    {name: 'Java', value: 'java'},
    {name: 'Data Analyst', value: 'data-analyst'},
    {name: 'Others', value: 'others'}
  ];

  jobTypes: SelectBox[] = [
    {name: 'Permanent', value: 'permanent'},
    {name: 'Contract', value: 'contract'}
  ];

  statusTypes: SelectBox[] = [
      {name: 'Show', value: 'show'},
      {name: 'Hide', value: 'hide'}
    ];
}
