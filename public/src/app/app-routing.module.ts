import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {
    path: 'new',
    component: NewProductComponent
  },
  {
    path: 'all',
    component: AllProductsComponent
  },
  {
    path: 'edit/:id',
    component: EditProductComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
