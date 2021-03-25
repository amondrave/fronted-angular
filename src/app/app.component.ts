import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from './services/product/product.service';
import { ProductTypesService } from './services/productTypes/product-types.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'store-app';
  productForm: FormGroup;
  types: any;
  products: any;

  constructor(public fb: FormBuilder, public product: ProductService
    , public productTypes: ProductTypesService) {
    this.productForm = this.fb.group({});
  }
  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      available: ['', Validators.required],
      type: ['', Validators.required],
    })

    this.productTypes.getAllTypes().subscribe(resp => {
      this.types = resp;
    },
      error => { console.error(error) }
    );

  }

  save(): void {
    this.product.saveProduct(this.productForm.value).subscribe(
      resp =>{

      },
      error => { console.error(error) }
    );
  }

}
