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

import { Stockdetails } from '../../../admin/shared/model/stockdetails';
import { StockService } from '../../../admin/shared/service/stock.service';

interface SelectBox {
  name: string;
  value: string;
}

@Component({
  selector: 'app-stock-edit-dialog',
  templateUrl: './stock-edit-dialog.component.html',
  styleUrls: ['./stock-edit-dialog.component.css']
})
export class StockEditDialogComponent implements OnInit {

  stockForm: FormGroup;

  statusTypes: SelectBox[] = [
    {name: 'New', value: 'New'},
    {name: 'Live', value: 'Live'}
  ];

  exchangeTypes: SelectBox[] = [
    {name: 'NYSE', value: 'NYSE'},
    {name: 'NASDAQ', value: 'NASDAQ'},
    {name: 'LSE', value: 'LSE'}
  ];

  stockTypes: SelectBox[] = [
    {name: 'ESG', value: 'ESG'},
    {name: 'Dividend Yielders', value: 'Dividend Yielders'},
    {name: 'Others', value: 'Others'}
  ];

  constructor(private editStockDialogRef: MatDialogRef<StockEditDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public stockRowObject: any, 
                  private formBuilder: FormBuilder, private stockService: StockService) {
    this.stockForm = this.formBuilder.group({
      id: [''],
      stockSymbol: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      companyName: ['', Validators.required],
      stockExchange: ['', Validators.required],
      stockType: ['', Validators.required],
      status: ['', Validators.required]
    });

     // Load stock data into form
     this.stockForm.patchValue({
      id: this.stockRowObject._id,
      stockSymbol: this.stockRowObject.stockSymbol,
      companyName: this.stockRowObject.companyName,
      stockExchange: this.stockRowObject.exchange,
      stockType: this.stockRowObject.type,
      status: this.stockRowObject.status
    });

  }

  ngOnInit() {
  }

  onSubmit() {
    console.info(this.stockForm.value);
    this.stockService.updateStock(this.stockForm.value).then(response => {
      console.log("Stock deleted successfully.", response);
      this.editStockDialogRef.close(this.stockForm.value);
    })
    .catch(error => {
      console.error("Error deleting stock:", error);
      // Handle error if needed
    });
  }

}
