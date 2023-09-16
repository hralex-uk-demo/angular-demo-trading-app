import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GraphQLService } from '../../../admin/shared/service/graphql.service';

@Component({
  selector: 'app-stock-delete-dialog',
  templateUrl: './stock-delete-dialog.component.html',
  styleUrls: ['./stock-delete-dialog.component.css']
})
export class StockDeleteDialogComponent {

  constructor(private deleteStockDialogRef: MatDialogRef<StockDeleteDialogComponent>,
                                  @Inject(MAT_DIALOG_DATA) public stockRowObject: any, 
                                  private graphQLService: GraphQLService) {
                  this.stockRowObject = stockRowObject;
    }

    onDeleteClick(stockId:any) {
      console.log("On submit() method called > ", stockId);  
      
      this.graphQLService.deleteStockDetails(stockId).subscribe(data => {
        this.deleteStockDialogRef.close(stockId);
      });
    
    }

}
