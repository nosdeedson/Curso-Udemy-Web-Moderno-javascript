import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { UserComponent } from './views/users/user/user.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path : "users",
    component: UserComponent
  },
  {
    path: "users/create",
    component: UserCreateComponent
  },
  {
    path: 'users/update/:id/:labelBotao',
    component: UserUpdateComponent
  }, 
  {
    path: 'users/delete/:id/:labelBotao',
    component: UserDeleteComponent
  },
  {
    path: 'products',
    component: ProductCrudComponent
  },
  {
    path: 'products/create',
    component: ProductCreateComponent
  },
  {
    path: 'products/delete/:id/:labelBotao',
    component: ProductDeleteComponent
  },
  {
    path: 'products/update/:id/:labelBotao',
    component: ProductUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
