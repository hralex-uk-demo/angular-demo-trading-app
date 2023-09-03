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

import { Stockdetails } from '../../../admin/shared/model/stockdetails';
import { StockService } from '../../../admin/shared/service/stock.service';

interface SelectBox {
  name: string;
  value: string;
}

@Component({
  selector: 'app-stock-add-dialog',
  templateUrl: './stock-add-dialog.component.html',
  styleUrls: ['./stock-add-dialog.component.css']
})
export class StockAddDialogComponent implements OnInit {

  stockForm: FormGroup;

  selectedIconFile: File | null = null;

  selectedIconFileName = '';

  statusTypes: SelectBox[] = [
    {name: 'New', value: 'new'},
    {name: 'Live', value: 'live'}
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

  currencyTypes: SelectBox[] = [
    {name: 'GBP', value: '£'},
    {name: 'USD', value: '$'},
    {name: 'EUR', value: '€'}
  ];


  constructor(private addStockDialogRef: MatDialogRef<StockAddDialogComponent>,
                     private formBuilder: FormBuilder, private stockService: StockService) {

    addStockDialogRef.disableClose = true;  

    this.stockForm = this.formBuilder.group({
      stockSymbol: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      companyName: ['', Validators.required],
      stockExchange: ['', Validators.required],
      stockType: ['', Validators.required],
      currencyType: ['', Validators.required],
      stockIcon: [null]
    });
  }
  
  ngOnInit() {
  }

  onFileSelected(event: any) {
    this.selectedIconFile = event.target.files[0];
    if (this.selectedIconFile) {
      this.selectedIconFileName = this.selectedIconFile.name;
    }
  }

  onSubmit() {
    console.info(this.stockForm.value);
    // Load stock data into form
    this.stockForm.get('stockIcon')?.setValue(this.selectedIconFile);
    console.info(this.stockForm.value);
    this.stockService.addStock(this.stockForm.value);
    this.addStockDialogRef.close(this.stockForm.value);
  }

}
