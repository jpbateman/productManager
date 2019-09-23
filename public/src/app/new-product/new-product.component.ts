import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  newProduct = {
    title: '',
    url: '',
    price: '',
  };
  errors = [];


  
  constructor(
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
  }
  handleCancel(){
    this._router.navigate(['/']);
  }
  handleSubmit(){
    this._httpService.createProduct(this.newProduct)
      .subscribe((data:any) => {
        if(data.hasOwnProperty('errors')){
          this.errors = data.errors;
        }
        else{
          this._router.navigate(['/']);
        }
      })
  }
}
