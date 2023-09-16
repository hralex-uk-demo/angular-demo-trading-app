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


  exchangeTypes: ExchangeSelectBox[] = [];
  sectorTypes: SelectBox[] = [];
  currencyTypes: CurrencySelectBox[] = [];


  constructor(private editStockDialogRef: MatDialogRef<StockEditDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public stockRowObject: any, 
                  private formBuilder: FormBuilder, private graphQLService: GraphQLService, 
                  private adminService: AdminService) {
    this.stockForm = this.formBuilder.group({
      id: [''],
      stockSymbol: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      companyName: ['', Validators.required],
      exchangeCode: ['', Validators.required],
      currencySymbol: ['', Validators.required],
      sectorName: ['', Validators.required],
      status: ['', Validators.required]
    });

     // Load stock data into form
     this.stockForm.patchValue({
      id: this.stockRowObject._id,
      stockSymbol: this.stockRowObject.stockSymbol,
      companyName: this.stockRowObject.companyName,
      exchangeCode: this.stockRowObject.exchangeCode,
      currencySymbol: this.stockRowObject.currencySymbol,
      sectorName: this.stockRowObject.sectorName,
      status: this.stockRowObject.status
    });

  }

  ngOnInit() {
    this.getAllConfigData();
  }

  onSubmit() {
    console.info(this.stockForm.value);

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
