import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product=null;
  errors = [];
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params
      .subscribe((params:Params) => {
        this._httpService.getProduct(params.id)
          .subscribe((data:any) => {
            this.product = data.product});
      })
  }
  handleCancel(){
    this._router.navigate(['/']);
  }
  handleSubmit(){
    this._httpService.updateProduct(this.product._id, {
      title: this.product.title,
      url: this.product.url,
      price: this.product.price
    })
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
