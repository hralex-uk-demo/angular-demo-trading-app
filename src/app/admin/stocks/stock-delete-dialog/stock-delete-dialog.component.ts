import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { StockService } from '../../../admin/shared/service/stock.service';

@Component({
  selector: 'app-stock-delete-dialog',
  templateUrl: './stock-delete-dialog.component.html',
  styleUrls: ['./stock-delete-dialog.component.css']
})
export class StockDeleteDialogComponent {

  constructor(private deleteStockDialogRef: MatDialogRef<StockDeleteDialogComponent>,
                                  @Inject(MAT_DIALOG_DATA) public stockRowObject: any, 
                                  private stockService: StockService) {
                  this.stockRowObject = stockRowObject;
    }

    onDeleteClick(stockId:any) {
      console.log("On submit() method called > ", stockId);      
      this.stockService.deleteStock(stockId).then(response => {
        console.log("Stock deleted successfully.", response);
        this.deleteStockDialogRef.close(stockId);
      })
      .catch(error => {
        console.error("Error deleting stock:", error);
        // Handle error if needed
      });
    }

}
