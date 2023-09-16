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

import { AdminService } from '../../../admin/shared/service/admin.service';

import { GraphQLService } from '../../../admin/shared/service/graphql.service';

interface ExchangeSelectBox {
  code: string;
  name: string;
}

interface CurrencySelectBox {
  code: string;
  name: string;
}

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

  statusTypes: SelectBox[] = [
    {name: 'New', value: 'new'},
    {name: 'Live', value: 'live'}
  ];

  exchangeTypes: ExchangeSelectBox[] = [];
  sectorTypes: SelectBox[] = [];
  currencyTypes: CurrencySelectBox[] = [];


  constructor(private addStockDialogRef: MatDialogRef<StockAddDialogComponent>,
                     private formBuilder: FormBuilder, 
                     private graphQLService: GraphQLService, private adminService: AdminService) {

    addStockDialogRef.disableClose = true;  

    this.stockForm = this.formBuilder.group({
      status: 'New',
      sharePrice: 10.0,
      stockSymbol: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      companyName: ['', Validators.required],
      exchangeCode: ['', Validators.required],
      sectorName: ['', Validators.required],
      currencySymbol: ['', Validators.required]
    });
  }
  
  ngOnInit() {
    this.getAllConfigData();
  }


  onSubmit() {
    console.info(this.stockForm.value);
    // Load stock data into form    
    console.info(this.stockForm.value);
    this.graphQLService.insertStockDetails(this.stockForm.value).subscribe(data => {
      this.addStockDialogRef.close(this.stockForm.value);
    });
  }

  getAllConfigData() {
    this.adminService.getExchangesDetails().subscribe(data => {
        this.exchangeTypes = data;
    });

    this.adminService.getSectorsDetails().subscribe(data => {
      this.sectorTypes = data;
    });

    this.adminService.getCurrenciesDetails().subscribe(data => {
      this.currencyTypes = data;
    });
  }

}
